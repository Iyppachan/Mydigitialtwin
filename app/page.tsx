'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || loading) return;

    const userMessage = question;
    setQuestion('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const exampleQuestions = [
    "What are your technical skills?",
    "Tell me about your work experience",
    "What are your career goals?",
    "What's your salary expectation?",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🤖 Iyppachan Tom's Digital Twin
          </h1>
          <p className="text-gray-600">
            Ask me anything about my professional background!
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4 min-h-[500px] max-h-[500px] overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <p className="text-lg mb-4">👋 Hi! Ask me about:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {exampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setQuestion(q)}
                    className="p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left text-sm transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>Powered by Upstash Vector + Groq AI</p>
        </div>
      </div>
    </main>
  );
}