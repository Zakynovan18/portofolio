import { useState, useEffect, useRef } from 'react'

const codeSnippets = [
  {
    language: 'python',
    filename: 'train_agent.py',
    lines: [
      '# train_agent.py',
      'import gym',
      'import numpy as np',
      'from agent import DQNAgent',
      '',
      'env = gym.make("CartPole-v1")',
      'state_size = env.observation_space.shape[0]',
      'action_size = env.action_space.n',
      '',
      'agent = DQNAgent(state_size, action_size)',
      'batch_size = 32',
      '',
      'for e in range(100):',
      '    state = env.reset()',
      '    for time in range(500):',
      '        action = agent.act(state)',
      '        next_state, reward, done, _ = env.step(action)',
      '        agent.remember(state, action, reward, next_state, done)',
      '        state = next_state',
      '        if done:',
      '            print(f"episode: {e}/100, score: {time}")',
      '            break'
    ],
    output: [
      '[INFO] Initializing environment: CartPole-v1',
      '[INFO] Starting training loop for 100 episodes...',
      'episode: 1/100, score: 12',
      'episode: 2/100, score: 18',
      'episode: 3/100, score: 15',
      'episode: 10/100, score: 45',
      'episode: 50/100, score: 185',
      'episode: 90/100, score: 495',
      '[SUCCESS] Agent converged with target score!',
      '[SUCCESS] Model weights saved as dqn_weights.h5'
    ]
  },
  {
    language: 'javascript',
    filename: 'server.js',
    lines: [
      '// server.js',
      'import express from "express";',
      'import { OpenAI } from "openai";',
      'import { db } from "./database.js";',
      '',
      'const app = express();',
      'const openai = new OpenAI();',
      '',
      'app.post("/api/chat", async (req, res) => {',
      '  const { messages, userId } = req.body;',
      '  ',
      '  // Log message history to database',
      '  await db.logs.create({ userId, messages });',
      '  ',
      '  const completion = await openai.chat.completions.create({',
      '    model: "gpt-4o",',
      '    messages: messages,',
      '  });',
      '',
      '  const reply = completion.choices[0].message;',
      '  res.status(200).json({ reply });',
      '});',
      '',
      'app.listen(3000, () => {',
      '  console.log("API Gateway running on port 3000");',
      '});'
    ],
    output: [
      '> node server.js',
      '[API] Database connected successfully.',
      '[API] OpenAI client initialized.',
      '[API] API Gateway running on port 3000',
      '[POST] /api/chat - 200 OK - User: usr_99a - 142ms',
      '[POST] /api/chat - 200 OK - User: usr_42b - 128ms',
      '[POST] /api/chat - 200 OK - User: usr_nanda - 95ms'
    ]
  }
]

const highlight = (line: string, lang: string) => {
  if (!line) return <span>&nbsp;</span>;
  if (line.trim().startsWith('#') || line.trim().startsWith('//')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }

  const parts = line.split(/(\s+|\(|\)|\{|\}|\[|\]|\.|\,|\;|:|=|\+|-|\*|\/|\'|\"|`)/);
  let isInsideString = false;
  let stringChar = '';

  const pyKeywords = ['import', 'from', 'class', 'def', 'return', 'super', 'for', 'in', 'break', 'as'];
  const jsKeywords = ['import', 'from', 'const', 'let', 'var', 'async', 'await', 'function', 'return', 'if', 'else', 'try', 'catch', 'require'];
  const keywords = lang === 'python' ? pyKeywords : jsKeywords;

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        if (part === '"' || part === "'" || part === '`') {
          if (!isInsideString) {
            isInsideString = true;
            stringChar = part;
            return <span key={i} className="text-emerald-400">{part}</span>;
          } else if (part === stringChar) {
            isInsideString = false;
            return <span key={i} className="text-emerald-400">{part}</span>;
          }
        }

        if (isInsideString) {
          return <span key={i} className="text-emerald-400">{part}</span>;
        }

        const trimmed = part.trim();
        if (keywords.includes(trimmed)) {
          return <span key={i} className="text-pink-500 font-semibold">{part}</span>;
        }
        if (['gym', 'np', 'DQNAgent', 'NLPModel', 'Embedding', 'LSTM', 'Dense', 'express', 'app', 'OpenAI', 'db', 'PORT'].includes(trimmed)) {
          return <span key={i} className="text-blue-400">{part}</span>;
        }
        if (['make', 'observation_space', 'action_space', 'act', 'step', 'remember', 'print', 'console', 'log', 'compile', 'predict', 'status', 'json', 'query', 'listen', 'post', 'create'].includes(trimmed)) {
          return <span key={i} className="text-yellow-400">{part}</span>;
        }
        if (/^\d+$/.test(trimmed)) {
          return <span key={i} className="text-purple-400">{part}</span>;
        }
        return <span key={i} className="text-slate-300">{part}</span>;
      })}
    </>
  );
};

export default function Terminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [outputIndex, setOutputIndex] = useState(0);

  const codeContainerRef = useRef<HTMLDivElement>(null);
  const outputContainerRef = useRef<HTMLDivElement>(null);

  const currentSnippet = codeSnippets[snippetIndex];

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineText('');
    setLineIndex(0);
    setCharIndex(0);
    setIsTyping(true);
    setOutputLines([]);
    setOutputIndex(0);
  }, [snippetIndex]);

  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
    }
  }, [displayedLines, currentLineText]);

  useEffect(() => {
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [outputLines]);

  useEffect(() => {
    if (isTyping) {
      if (lineIndex < currentSnippet.lines.length) {
        const line = currentSnippet.lines[lineIndex];
        if (charIndex < line.length) {
          const timeout = setTimeout(() => {
            setCurrentLineText(prev => prev + line[charIndex]);
            setCharIndex(prev => prev + 1);
          }, 8);
          return () => clearTimeout(timeout);
        } else {
          setDisplayedLines(prev => [...prev, line]);
          setCurrentLineText('');
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }
      } else {
        setIsTyping(false);
      }
    } else {
      if (outputIndex < currentSnippet.output.length) {
        const timeout = setTimeout(() => {
          setOutputLines(prev => [...prev, currentSnippet.output[outputIndex]]);
          setOutputIndex(prev => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setSnippetIndex(prev => (prev + 1) % codeSnippets.length);
        }, 6000);
        return () => clearTimeout(timeout);
      }
    }
  }, [isTyping, lineIndex, charIndex, outputIndex, snippetIndex, currentSnippet]);

  return (
    <div className="w-full min-w-[320px] max-w-[560px] rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-left">
      <div className="bg-slate-900/80 border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs text-gray-400 font-medium">{currentSnippet.filename}</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">
          {currentSnippet.language === 'python' ? 'Python' : 'JavaScript'}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <div 
          ref={codeContainerRef}
          className="h-[240px] overflow-y-auto text-xs leading-relaxed font-mono pr-1 select-none pointer-events-none scrollbar-thin scrollbar-thumb-white/10"
        >
          {displayedLines.map((line, idx) => (
            <div key={idx} className="whitespace-pre">
              {highlight(line, currentSnippet.language)}
            </div>
          ))}
          {currentLineText && (
            <div className="whitespace-pre">
              {highlight(currentLineText, currentSnippet.language)}
              <span className="animate-pulse bg-blue-400 text-transparent select-none ml-0.5">|</span>
            </div>
          )}
        </div>

        <div className="border-t border-white/5 pt-3">
          <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase block mb-1.5">
            Console Output
          </span>
          <div 
            ref={outputContainerRef}
            className="h-[120px] overflow-y-auto text-[11px] leading-relaxed font-mono pr-1 select-none pointer-events-none scrollbar-thin scrollbar-thumb-white/10"
          >
            {outputLines.length === 0 ? (
              <div className="text-slate-600 italic">Waiting for training to start...</div>
            ) : (
              outputLines.map((line, idx) => {
                let colorClass = 'text-slate-400';
                if (line.includes('[SUCCESS]') || line.startsWith('episode:') || line.startsWith('✔')) {
                  colorClass = 'text-emerald-400';
                } else if (line.includes('[INFO]') || line.startsWith('>')) {
                  colorClass = 'text-blue-400';
                } else if (line.includes('[API]')) {
                  colorClass = 'text-cyan-400';
                }
                return (
                  <div key={idx} className={colorClass}>
                    {line}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
