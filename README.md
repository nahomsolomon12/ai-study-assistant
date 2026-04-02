# ASA (AI Study Assistant)

An AI-powered study assistant that answers questions, explains concepts, and quizzes students based on your own markdown study materials.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4, Radix UI |
| AI / LLM | [Groq API](https://console.groq.com) — `llama-3.3-70b-versatile` |
| AI SDK | Vercel AI SDK (`ai`, `@ai-sdk/groq`) |
| Database | Prisma 6 + SQLite |
| Auth | JWT (`jose`) + bcrypt |
| Testing | Vitest + Testing Library |

## Prerequisites

- Node.js 18+
- A [Groq API key](https://console.groq.com) (free tier available)

## Setup

1. **Clone and install**

```bash
git clone <repo-url>
cd ai-study-assistant
npm run setup
```

`npm run setup` installs dependencies, generates the Prisma client, and runs database migrations.

2. **Configure environment variables**

Create a `.env` file in the project root:

```env
GROQ_API_KEY=your_groq_api_key_here
JWT_SECRET=your_random_secret_here
```

3. **Add study materials**

Create a `study-materials/` directory at the project root and drop in `.md` files — one file per topic:

```
study-materials/
  biology-chapter-3.md
  us-history.md
  calculus-derivatives.md
```

The filename becomes the topic label shown in the UI (hyphens replaced with spaces, title-cased).

4. **Run the app**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Usage

1. Sign up or continue as a guest (anonymous)
2. Select which study materials to load as context
3. Chat with the assistant — ask questions, request explanations, or ask to be quizzed
4. Projects (chat history) are saved per user account

## How It Works

- Study materials are `.md` files loaded server-side on each request
- Selected files are injected into the system prompt as context
- The Groq API streams responses back in real-time via the Vercel AI SDK
- Chat history is persisted to SQLite (registered users only)

## Scripts

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run test       # Run unit tests
npm run db:reset   # Reset the database
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GROQ_API_KEY` | Yes | Groq API key for LLM inference |
| `JWT_SECRET` | Recommended | Secret for signing session tokens |
| `DATABASE_URL` | Optional | SQLite path (defaults to `./prisma/dev.db`) |
