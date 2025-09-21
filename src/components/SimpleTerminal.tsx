'use client';

import { useEffect, useRef, useState } from 'react';

const SimpleTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const [currentDir, setCurrentDir] = useState('~');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const asciiArt = `
██████╗  █████╗ ████████╗███╗   ██╗███████╗███████╗██╗  ██╗
██╔══██╗██╔══██╗╚══██╔══╝████╗  ██║██╔════╝██╔════╝██║  ██║
██████╔╝███████║   ██║   ██╔██╗ ██║█████╗  ███████╗███████║
██╔══██╗██╔══██║   ██║   ██║╚██╗██║██╔══╝  ╚════██║██╔══██║
██║  ██║██║  ██║   ██║   ██║ ╚████║███████╗███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝

███╗   ███╗ █████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗ 
████╗ ████║██╔══██╗██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██╗
██╔████╔██║███████║██║   ██║██████╔╝ ╚████╔╝ ███████║
██║╚██╔╝██║██╔══██║██║   ██║██╔══██╗  ╚██╔╝  ██╔══██║
██║ ╚═╝ ██║██║  ██║╚██████╔╝██║  ██║   ██║   ██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝`;

  const directories = {
    '~': ['projects', 'skills', 'experience', 'education', 'contact'],
    '~/projects': ['jsonic', 'mdconverter', 'rehabify', 'microservices-demo'],
    '~/skills': ['languages.txt', 'databases.txt', 'tools.txt'],
    '~/experience': ['initializ.md'],
    '~/education': ['degree.txt'],
    '~/contact': ['info.txt']
  };

  const files = {
    '~/skills/languages.txt': `Programming Languages:
━━━━━━━━━━━━━━━━━━━━━

🔹 Go (Golang)     ████████████ Expert
🔹 Elixir          ██████████   Advanced  
🔹 JavaScript      ████████████ Expert
🔹 TypeScript      ███████████  Advanced
🔹 Python          ████████     Intermediate
🔹 SQL             ████████████ Expert
🔹 Bash/Shell      ██████████   Advanced`,

    '~/skills/databases.txt': `Databases & Storage:
━━━━━━━━━━━━━━━━━━━━

🔸 PostgreSQL      ████████████ Expert
🔸 Redis           ███████████  Advanced
🔸 MongoDB         ████████     Intermediate
🔸 InfluxDB        ██████       Intermediate
🔸 Elasticsearch   ███████      Intermediate`,

    '~/skills/tools.txt': `DevOps & Tools:
━━━━━━━━━━━━━━━━

🔧 Docker          ████████████ Expert
🔧 Kubernetes      ██████████   Advanced
🔧 AWS             ████████████ Expert
🔧 Git             ████████████ Expert
🔧 Linux           ████████████ Expert
🔧 Nginx           ███████████  Advanced
🔧 Terraform       ████████     Intermediate`,

    '~/experience/initializ.md': `# Software Development Engineer
## Initializ.ai | 2023 - Present

### Responsibilities:
- Developed scalable backend systems using Go and Elixir
- Implemented microservices architecture with Docker & Kubernetes
- Optimized database performance (PostgreSQL, Redis)
- Built RESTful APIs and GraphQL endpoints
- Managed cloud infrastructure on AWS

### Key Achievements:
- Reduced API response time by 40%
- Implemented real-time data processing pipeline
- Led migration to microservices architecture
- Mentored junior developers

### Tech Stack:
Go, Elixir, PostgreSQL, Redis, Docker, Kubernetes, AWS, Git`,

    '~/education/degree.txt': `Education Background:
━━━━━━━━━━━━━━━━━━━

🎓 Bachelor's in Computer Science
   University Name
   2018 - 2022
   
📚 Relevant Coursework:
   - Data Structures & Algorithms
   - Database Management Systems
   - Computer Networks
   - Software Engineering
   - Operating Systems`,

    '~/contact/info.txt': `Contact Information:
━━━━━━━━━━━━━━━━━━━━

📧 Email: contact@ratnesh-maurya.com
🔗 LinkedIn: https://www.linkedin.com/in/ratnesh-maurya
🐙 GitHub: https://github.com/ratnesh-maurya
🐦 Twitter: https://x.com/ratnesh_maurya_
🌐 Website: https://ratnesh-maurya.com

📍 Location: India
💼 Available for: Full-time opportunities
🕒 Response time: Within 24 hours`
  };

  useEffect(() => {
    // Initial welcome message
    setOutput([
      asciiArt,
      '',
      'Software Development Engineer | Backend Specialist',
      '',
      'Welcome to my terminal portfolio! 🚀',
      'Type "help" to see available commands.',
      ''
    ]);
  }, [asciiArt]);

  useEffect(() => {
    // Auto-focus input and scroll to bottom
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(' ');
    const arg = args.join(' ');

    setOutput(prev => [...prev, `${getPrompt()}${cmd}`]);

    switch (command.toLowerCase()) {
      case 'help':
        setOutput(prev => [...prev,
          '🚀 Terminal Portfolio - Available Commands',
          '',
          '📁 Navigation & Files:',
          '  ls      - List directory contents',
          '  cd      - Change directory',
          '  pwd     - Print working directory',
          '  cat     - Display file contents',
          '  clear   - Clear terminal screen',
          '',
          '💻 System Information:',
          '  whoami  - Display current user',
          '  uname   - System information',
          '  date    - Current date and time',
          '  ps      - Show running processes',
          '  uptime  - System uptime',
          '  free    - Memory usage',
          '  df      - Disk space usage',
          '',
          '🔧 Development Tools:',
          '  docker  - Docker commands (try: docker ps)',
          '  git     - Git commands (try: git status)',
          '  go      - Go commands (try: go version)',
          '  node    - Node.js commands (try: node -v)',
          '',
          '🎮 Fun Commands:',
          '  joke    - Random programming joke',
          '  cowsay  - ASCII cow says something',
          '  fortune - Random programming wisdom',
          '',
          '📚 Other:',
          '  history - Command history',
          '  credits - About this terminal',
          '',
          '💡 Tips:',
          '• Click on 📁 directories and 📄 files to navigate',
          '• Try: ls ~/projects, cat ~/contact/info.txt',
          '• Use arrow keys for command history',
          '• Explore: cd ~/skills, ls, cat languages.txt',
          ''
        ]);
        break;

      case 'clear':
        setOutput([]);
        break;

      case 'ls':
        const targetDir = arg || currentDir;
        const dirKey = targetDir as keyof typeof directories;
        if (directories[dirKey]) {
          const items = directories[dirKey].map(item => {
            const isDir = directories[`${targetDir}/${item}` as keyof typeof directories];
            return isDir ? `📁 ${item}/` : `📄 ${item}`;
          });
          setOutput(prev => [...prev, ...items, '']);
        } else {
          setOutput(prev => [...prev, `ls: ${targetDir}: No such directory`, '']);
        }
        break;

      case 'cd':
        if (!arg || arg === '~') {
          setCurrentDir('~');
        } else if (arg === '..') {
          const parts = currentDir.split('/');
          if (parts.length > 1) {
            parts.pop();
            setCurrentDir(parts.join('/') || '~');
          }
        } else {
          const newDir = arg.startsWith('~/') ? arg : `${currentDir}/${arg}`;
          if (directories[newDir as keyof typeof directories]) {
            setCurrentDir(newDir);
          } else {
            setOutput(prev => [...prev, `cd: ${arg}: No such directory`, '']);
          }
        }
        break;

      case 'pwd':
        setOutput(prev => [...prev, currentDir, '']);
        break;

      case 'cat':
        if (!arg) {
          setOutput(prev => [...prev, 'cat: missing file operand', '']);
        } else {
          const filePath = arg.startsWith('~/') ? arg : `${currentDir}/${arg}`;
          const fileContent = files[filePath as keyof typeof files];
          if (fileContent) {
            setOutput(prev => [...prev, fileContent, '']);
          } else {
            setOutput(prev => [...prev, `cat: ${arg}: No such file or directory`, '']);
          }
        }
        break;

      case 'whoami':
        setOutput(prev => [...prev, 'ratnesh', '']);
        break;

      case 'uname':
        setOutput(prev => [...prev, 'Linux ratn.tech 5.15.0-terminal #1 SMP Backend x86_64 GNU/Linux', '']);
        break;

      case 'date':
        setOutput(prev => [...prev, new Date().toString(), '']);
        break;

      case 'joke':
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
          "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
          "Why do Java developers wear glasses? Because they can't C#!",
          "A SQL query goes into a bar, walks up to two tables and asks: 'Can I join you?'",
          "Why did the programmer quit his job? He didn't get arrays! 📊"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setOutput(prev => [...prev, randomJoke, '']);
        break;

      case 'cowsay':
        const text = arg || 'Hello from the terminal!';
        const border = '_'.repeat(text.length + 2);
        setOutput(prev => [...prev,
        ` ${border}`,
        `< ${text} >`,
        ` ${'-'.repeat(text.length + 2)}`,
          '        \\   ^__^',
          '         \\  (oo)\\_______',
          '            (__)\\       )\\/\\',
          '                ||----w |',
          '                ||     ||',
          ''
        ]);
        break;

      case 'fortune':
        const fortunes = [
          "The best way to predict the future is to implement it.",
          "Code never lies, comments sometimes do.",
          "There are only two hard things in Computer Science: cache invalidation and naming things.",
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          "First, solve the problem. Then, write the code."
        ];
        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        setOutput(prev => [...prev, `💡 ${randomFortune}`, '']);
        break;

      case 'ps':
        setOutput(prev => [...prev,
          '  PID TTY          TIME CMD',
          ' 1337 pts/0    00:00:01 portfolio',
          ' 1338 pts/0    00:00:00 node',
          ' 1339 pts/0    00:00:00 go',
          ' 1340 pts/0    00:00:00 docker',
          ''
        ]);
        break;

      case 'docker':
        if (arg === 'ps') {
          setOutput(prev => [...prev,
            'CONTAINER ID   IMAGE          COMMAND                  STATUS',
            'a1b2c3d4e5f6   nginx:alpine   "/docker-entrypoint.…"   Up 2 hours',
            'f6e5d4c3b2a1   postgres:13    "docker-entrypoint.s…"   Up 2 hours',
            '1a2b3c4d5e6f   redis:alpine   "docker-entrypoint.s…"   Up 2 hours',
            ''
          ]);
        } else {
          setOutput(prev => [...prev,
            'Docker version 24.0.7, build afdd53b',
            'Usage: docker [OPTIONS] COMMAND',
            'Try: docker ps',
            ''
          ]);
        }
        break;

      case 'git':
        if (arg === 'status') {
          setOutput(prev => [...prev,
            'On branch main',
            'Your branch is up to date with \'origin/main\'.',
            '',
            'nothing to commit, working tree clean',
            ''
          ]);
        } else {
          setOutput(prev => [...prev,
            'git version 2.34.1',
            'Try: git status',
            ''
          ]);
        }
        break;

      case 'go':
        if (arg === 'version') {
          setOutput(prev => [...prev, 'go version go1.21.5 linux/amd64', '']);
        } else {
          setOutput(prev => [...prev,
            'Go is a tool for managing Go source code.',
            'Try: go version',
            ''
          ]);
        }
        break;

      case 'node':
        if (arg === '--version' || arg === '-v') {
          setOutput(prev => [...prev, 'v18.17.0', '']);
        } else {
          setOutput(prev => [...prev,
            'Welcome to Node.js v18.17.0.',
            'Try: node --version',
            ''
          ]);
        }
        break;

      case 'uptime':
        const now = new Date();
        const uptime = '42 days, 13:37';
        setOutput(prev => [...prev, `${now.toTimeString().split(' ')[0]} up ${uptime}, 1 user, load average: 0.15, 0.12, 0.08`, '']);
        break;

      case 'free':
        setOutput(prev => [...prev,
          '              total        used        free      shared  buff/cache   available',
          'Mem:        8388608     6291456     2097152      524288      524288     1572864',
          'Swap:       2097152      524288     1572864',
          ''
        ]);
        break;

      case 'df':
        setOutput(prev => [...prev,
          'Filesystem     1K-blocks    Used Available Use% Mounted on',
          '/dev/sda1       20971520 8388608  12582912  40% /',
          '/dev/sda2       10485760 2097152   8388608  20% /home',
          'tmpfs            4194304  524288   3670016  13% /tmp',
          ''
        ]);
        break;

      case 'history':
        setOutput(prev => [...prev,
        ...history.map((cmd, i) => `${i + 1}  ${cmd}`),
          ''
        ]);
        break;

      case 'credits':
        setOutput(prev => [...prev,
          '',
          '🚀 Terminal Portfolio Credits:',
          '',
          '• Built with React & TypeScript',
          '• Styled with Tailwind CSS',
          '• Deployed on Vercel',
          '• ASCII Art generated manually',
          '',
          'Built with ❤️ by Ratnesh Maurya',
          ''
        ]);
        break;

      default:
        if (cmd.trim()) {
          setOutput(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`, '']);
        }
    }
  };

  const getPrompt = () => `ratnesh@ratn.tech:${currentDir}$ `;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        setHistory(prev => [...prev, input]);
        executeCommand(input);
      } else {
        setOutput(prev => [...prev, getPrompt()]);
      }
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  const handleClick = (text: string) => {
    if (text.startsWith('📁')) {
      const dir = text.replace('📁 ', '').replace('/', '');
      executeCommand(`cd ${dir}`);
    } else if (text.startsWith('📄')) {
      const file = text.replace('📄 ', '');
      executeCommand(`cat ${file}`);
    }
  };

  return (
    <div className="simple-terminal" onClick={() => inputRef.current?.focus()}>
      <div ref={terminalRef} className="terminal-output">
        {output.map((line, index) => (
          <div key={index} className="terminal-line">
            {line.split(' ').map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={word.startsWith('📁') || word.startsWith('📄') ? 'clickable' : ''}
                onClick={() => handleClick(word)}
              >
                {word}{wordIndex < line.split(' ').length - 1 ? ' ' : ''}
              </span>
            ))}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="prompt">{getPrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="cursor">█</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleTerminal;
