import { NextRequest, NextResponse } from 'next/server';
import { Index } from '@upstash/vector';
import Groq from 'groq-sdk';

const vectorIndex = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    const results = await vectorIndex.query({
      data: question,
      topK: 5,
      includeMetadata: true,
    });

    const context = results
      .map((result: any) => result.metadata?.text || '')
      .filter(Boolean)
      .join('\n\n');

    if (!context) {
      return NextResponse.json({
        answer: "I don't have specific information about that in my profile.",
      });
    }

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are Iyppachan Tom's AI digital twin. Answer questions as if you are Iyppachan, speaking in first person about your background, skills, and experience. Be professional, concise, and friendly.`,
        },
        {
          role: 'user',
          content: `Based on this information from my profile:\n\n${context}\n\nQuestion: ${question}\n\nProvide a helpful answer in first person:`,
        },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const answer = completion.choices[0]?.message?.content || 'Unable to generate response.';

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process question' },
      { status: 500 }
    );
  }
}
