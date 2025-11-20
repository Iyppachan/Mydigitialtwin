# 🤖 AI Digital Twin - RAG-Powered Professional Profile System

> An intelligent, AI-powered digital twin system using Retrieval-Augmented Generation (RAG) to provide natural language interactions with professional profile data.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://iyppachan-digital-twin.vercel.app)
[![Status](https://img.shields.io/badge/status-production-success)]()
[![License](https://img.shields.io/badge/license-MIT-blue)]()

**Live System:** [iyppachan-digital-twin.vercel.app](https://iyppachan-digital-twin.vercel.app)

---

## 📋 Overview

This project implements a complete RAG (Retrieval-Augmented Generation) system that creates an intelligent AI representation of a professional profile. The system can answer questions about skills, experience, education, and career objectives using semantic search and natural language generation.

### Key Features

✅ **Vector-based Semantic Search** - Uses Upstash Vector DB for intelligent context retrieval  
✅ **AI Response Generation** - Groq AI (Llama 3.3 70B) for natural language responses  
✅ **Multiple Interfaces** - Web app, Python CLI, MCP servers  
✅ **Production Deployment** - Live on Vercel with 100% uptime  
✅ **MCP Protocol** - Model Context Protocol implementation for AI assistant integration  
✅ **Real-time Responses** - Sub-2-second average response time  

---

## 🎯 Use Cases

- **Interview Preparation** - Practice answering questions about your background
- **Recruiter Interactions** - Provide consistent, accurate information 24/7
- **Portfolio Demonstration** - Showcase AI/ML development capabilities
- **Professional Branding** - Intelligent, interactive resume
- **Career Development** - Analyze and improve professional positioning

---

## 🏗️ Architecture

```
User Query
    ↓
Vector Embedding (OpenAI via Upstash)
    ↓
Semantic Search (Top 5 chunks)
    ↓
Context Retrieval
    ↓
LLM Generation (Groq AI)
    ↓
Natural Language Response
```

### Technology Stack

**Frontend:**
- Next.js 16 (React framework)
- TypeScript
- Tailwind CSS

**Backend:**
- Next.js Server Actions
- Node.js
- Python 3.x

**AI/ML:**
- Upstash Vector (vector database)
- OpenAI Embeddings (via Upstash)
- Groq AI (LLM inference)

**Deployment:**
- Vercel (web app)
- GitHub (version control)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Python 3.8+
- pnpm (recommended) or npm

### Installation

```bash
# Clone repository
git clone https://github.com/iyppachantom/mydigitaltwin.git
cd mydigitaltwin

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your API keys
```

### Environment Variables

Create `.env.local` with:

```bash
# Upstash Vector Database
UPSTASH_VECTOR_REST_URL=your_url_here
UPSTASH_VECTOR_REST_TOKEN=your_token_here

# Groq AI
GROQ_API_KEY=your_key_here
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📊 Project Structure

```
mydigitaltwin/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Main chat interface
│   ├── actions.ts           # RAG server actions
│   └── api/
│       └── mcp/
│           └── route.ts     # MCP HTTP endpoint
├── mcp-server/              # MCP server implementation
│   ├── index.ts             # Stdio MCP server
│   └── dist/               # Compiled output
├── digitaltwin.json        # Professional profile data
├── digitaltwin_rag.py      # Python CLI version
├── embed_digitaltwin.py    # Embedding script
├── docs/                   # Documentation
│   ├── SYSTEM_ARCHITECTURE.md
│   ├── TESTING_REPORT.md
│   ├── MCP_INTEGRATION_GUIDE.md
│   └── PROFILE_OPTIMIZATION.md
└── README.md
```

---

## 💻 Usage

### Web Interface

Visit the live demo: [iyppachan-digital-twin.vercel.app](https://iyppachan-digital-twin.vercel.app)

Or run locally:
```bash
pnpm dev
```

### Python CLI

```bash
python digitaltwin_rag.py
```

Interactive command-line chat interface.

### MCP Server

**HTTP API:**
```bash
# Start dev server
pnpm dev

# Test MCP endpoint
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"ping","id":1}'
```

**Stdio Server:**
```bash
# Build
cd mcp-server
npm run build

# Run
node dist/index.js
```

---

## 📈 Performance Metrics

Based on comprehensive testing with 21 professional queries:

| Metric | Result | Target | Status |
|--------|--------|--------|--------|
| **Avg Response Time** | 1.95s | <3s | ✅ |
| **Quality Score** | 9.7/10 | >9/10 | ✅ |
| **Accuracy** | 100% | >95% | ✅ |
| **Uptime** | 100% | >99% | ✅ |
| **Error Rate** | 0% | <1% | ✅ |

**Status:** Production-ready ✅

---

## 🔧 API Reference

### MCP HTTP Endpoint

**Base URL:** `/api/mcp`

**Methods:**

#### Ping
```json
{
  "jsonrpc": "2.0",
  "method": "ping",
  "id": 1
}
```

#### Initialize
```json
{
  "jsonrpc": "2.0",
  "method": "initialize",
  "id": 2
}
```

#### List Tools
```json
{
  "jsonrpc": "2.0",
  "method": "tools/list",
  "id": 3
}
```

#### Call Tool
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "ask_digital_twin",
    "arguments": {
      "question": "What are your technical skills?"
    }
  },
  "id": 4
}
```

---

## 🧪 Testing

### Run Comprehensive Tests

See `docs/TESTING_REPORT.md` for complete test results.

**Test Coverage:**
- ✅ 21+ professional queries tested
- ✅ 7 query categories covered
- ✅ Response time benchmarking
- ✅ Quality assessment
- ✅ Recruiter readiness validation

### Test Locally

```bash
# Web interface
pnpm dev
# Visit http://localhost:3000 and ask questions

# Python CLI
python digitaltwin_rag.py

# MCP API
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"ask_digital_twin","arguments":{"question":"test"}},"id":1}'
```

---

## 📚 Documentation

Comprehensive documentation available in `docs/`:

1. **[System Architecture](docs/SYSTEM_ARCHITECTURE.md)** - Complete technical architecture, data flow, and component details
2. **[Testing & Performance Report](docs/TESTING_PERFORMANCE_REPORT.md)** - 21-query testing results, benchmarks, and analysis
3. **[MCP Integration Guide](docs/MCP_INTEGRATION_GUIDE.md)** - MCP server setup, testing, and integration instructions
4. **[Profile Optimization Report](docs/PROFILE_OPTIMIZATION_REPORT.md)** - Profile analysis, recruiter readiness, enhancement recommendations

---

## 🎓 Educational Value

This project demonstrates:

**AI/ML Concepts:**
- Retrieval-Augmented Generation (RAG)
- Vector embeddings and semantic search
- LLM prompt engineering
- Context-aware AI responses

**Software Engineering:**
- Full-stack TypeScript development
- Serverless architecture
- API design and integration
- Cloud deployment (Vercel)
- Version control (Git/GitHub)

**Professional Skills:**
- Technical documentation
- System architecture design
- Performance testing
- Production deployment
- Problem-solving and debugging

---

## 🚧 Known Limitations

**Platform-Dependent:**
- Claude Desktop MCP integration requires platform enablement
- GitHub Copilot MCP support is experimental

**Functional:**
- Single-user system (not multi-tenant)
- Profile updates require re-embedding
- English language only
- Requires internet for API calls

---

## 🔮 Future Enhancements

### Short-term
- [ ] Add conversation memory
- [ ] Implement response streaming in web UI
- [ ] Create admin panel for profile updates
- [ ] Add analytics dashboard

### Long-term
- [ ] Multi-user support
- [ ] Voice interface integration
- [ ] Mobile app (React Native)
- [ ] Multilingual support
- [ ] Integration with job platforms

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Docker (Alternative)

```dockerfile
# Dockerfile provided
docker build -t digital-twin .
docker run -p 3000:3000 digital-twin
```

---

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Iyppachan Tom**
- Email: iyppachantom123@gmail.com
- Location: Brisbane, Queensland, Australia
- Education: Bachelor of IT (AI & Data Science), University of Southern Queensland
- LinkedIn: [Add your LinkedIn]
- GitHub: [@iyppachantom](https://github.com/iyppachantom)

---

## 🙏 Acknowledgments

**Technologies:**
- [Upstash](https://upstash.com/) - Vector database
- [Groq](https://groq.com/) - AI inference
- [Next.js](https://nextjs.org/) - React framework
- [Vercel](https://vercel.com/) - Deployment platform

**Inspiration:**
- Digital Twin AI Workshop
- Model Context Protocol (MCP) by Anthropic

---

## 📊 Project Stats

**Development Time:** 6 weeks  
**Lines of Code:** ~2,000  
**Technologies Used:** 10+  
**Test Coverage:** 21+ queries  
**Performance:** Sub-2s responses  
**Uptime:** 100%  
**Status:** Production-ready ✅

---

## 📞 Contact

Questions or feedback? Reach out!

**Email:** iyppachantom123@gmail.com  
**Live Demo:** [iyppachan-digital-twin.vercel.app](https://iyppachan-digital-twin.vercel.app)

---

## ⭐ Star This Repository

If you found this project helpful or interesting, please consider giving it a star! ⭐

---

**Built with ❤️ using cutting-edge AI technologies**

*Last Updated: November 2025*
