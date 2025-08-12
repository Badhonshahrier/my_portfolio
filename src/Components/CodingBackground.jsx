import React from "react";

export default function CodingBackground() {
  const floatingElements = [
    "{ }", "[ ]", "( )", "< />", "=>", "===",
    "&&", "||", "const", "let", "function",
    "return", "if", "else", "async", "await",
    "true", "false", "null", "++", "--",
  ];

  const codeBlocks = [
    {
      code: `import React from 'react';\nconst App = () => {\n  return <div>Hello World</div>;\n};`,
      position: "top-20 left-20",
      size: "text-xs",
    },
    {
      code: `const data = await fetch('/api');\nconst result = data.json();`,
      position: "top-40 right-20",
      size: "text-xs",
    },
    {
      code: `// Clean code is not written by following\n// a set of rules. Clean code is written\n// by clean coders.`,
      position: "bottom-40 left-20",
      size: "text-xs",
    },
    {
      code: `export default function() {\n  const [state, setState] = useState();\n  return <Component />;\n}`,
      position: "bottom-20 right-40",
      size: "text-xs",
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-purple-950/20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          filter: "drop-shadow(0 0 1px rgba(148, 163, 184, 0.3))",
        }}
      />

      {/* Floating symbols */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute text-slate-400 font-mono select-none pointer-events-none ${
              index % 3 === 0
                ? "animate-bounce"
                : index % 3 === 1
                ? "animate-pulse"
                : "animate-ping"
            }`}
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              fontSize: `${Math.random() * 12 + 10}px`,
              opacity: Math.random() * 0.4 + 0.1,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              textShadow: `0 0 10px rgba(148, 163, 184, ${
                Math.random() * 0.3 + 0.1
              })`,
              transform: `rotate(${Math.random() * 20 - 10}deg) scale(${
                Math.random() * 0.5 + 0.8
              })`,
            }}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Floating code blocks */}
      {codeBlocks.map((block, index) => (
        <div
          key={index}
          className={`absolute ${block.position} opacity-15 font-mono ${block.size} text-slate-300 select-none max-w-xs`}
          style={{
            animationDelay: `${index * 2}s`,
            textShadow: "0 0 20px rgba(148, 163, 184, 0.2)",
            filter: "blur(0.5px)",
          }}
        >
          <div className="bg-slate-800/30 p-3 rounded-lg border border-slate-700/30 backdrop-blur-sm">
            {block.code.split("\n").map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="animate-pulse"
                style={{ animationDelay: `${lineIndex * 0.5}s` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Developer object */}
      <div className="absolute top-10 left-10 opacity-25 font-mono text-sm text-slate-300 select-none">
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-600/30 backdrop-blur-sm shadow-2xl">
          <div className="text-emerald-400 animate-pulse">
            const developer = &#123;
          </div>
          <div
            className="text-blue-400 ml-2 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            skills: ['React', 'TypeScript'],
          </div>
          <div
            className="text-purple-400 ml-2 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            passion: 'Clean Code',
          </div>
          <div
            className="text-yellow-400 ml-2 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            status: 'Building Amazing Things'
          </div>
          <div
            className="text-emerald-400 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            &#125;;
          </div>
        </div>
      </div>

      {/* Extra code snippet */}
      <div className="absolute bottom-20 right-10 opacity-25 font-mono text-sm text-slate-300 select-none">
        <div className="bg-slate-800/40 p-4 rounded-lg border border-slate-600/30 backdrop-blur-sm shadow-2xl">
          <div className="text-gray-500 animate-pulse">
            // Building the future, one line at a time
          </div>
          <div
            className="text-cyan-400 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            function create() &#123;
          </div>
          <div
            className="text-pink-400 ml-2 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            return 'awesome things';
          </div>
          <div
            className="text-cyan-400 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            &#125;
          </div>
        </div>
      </div>

      {/* Random small dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-slate-400 rounded-full animate-ping opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Faint overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-800/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />
    </div>
  );
}
