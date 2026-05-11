import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  ClipboardList, 
  Map, 
  Compass, 
  ShieldAlert, 
  Hammer, 
  FlaskConical, 
  CheckCircle2, 
  Wrench, 
  FileEdit, 
  UserCheck, 
  GitPullRequest,
  Quote,
  Zap,
  Terminal,
  AlertTriangle,
  Cpu,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  Info
} from "lucide-react";

interface Stage {
  id: number;
  name: string;
  role: string;
  icon: any;
  color: string;
  gate?: boolean;
  desc: string;
  output: string;
}

const STAGES: Stage[] = [
  { 
    id: 1, 
    name: "Problem Decomposer", 
    role: "WHAT", 
    icon: ClipboardList, 
    color: "bg-blue-500",
    desc: "Shreds generic 'vague vibes' into hard requirements. No more 'make it pop'.",
    output: "requirements.md"
  },
  { 
    id: 2, 
    name: "Planner", 
    role: "PLAN", 
    icon: Map, 
    color: "bg-indigo-500",
    desc: "The logistics general. Maps out the war on technical debt before it starts.",
    output: "plan.md"
  },
  { 
    id: 3, 
    name: "Design Architect", 
    role: "HOW", 
    icon: Compass, 
    color: "bg-cyan-500",
    desc: "The blueprint master. Defines schemas so the code doesn't look like spaghetti.",
    output: "design.md"
  },
  { 
    id: 4, 
    name: "Design Critic", 
    role: "CHALLENGE", 
    icon: ShieldAlert, 
    color: "bg-orange-500", 
    gate: true,
    desc: "The professional hater. Finds 10 ways your design will fail in production.",
    output: "critique.md"
  },
  { 
    id: 5, 
    name: "Builder", 
    role: "MAKE", 
    icon: Hammer, 
    color: "bg-green-600",
    desc: "The heavy lifter. Writes code that actually respects the architect for once.",
    output: "code.diff"
  },
  { 
    id: 6, 
    name: "Tester", 
    role: "PROVE", 
    icon: FlaskConical, 
    color: "bg-purple-500",
    desc: "The reality check. If it's broken, they'll find it. If it's slow, they'll mock it.",
    output: "test-results.md"
  },
  { 
    id: 7, 
    name: "Critic / Verifier", 
    role: "WHY", 
    icon: CheckCircle2, 
    color: "bg-emerald-500",
    desc: "The code snob. Evaluates DRY/SOLID like it's a fine wine.",
    output: "audit.md"
  },
  { 
    id: 8, 
    name: "Fixer", 
    role: "RESOLVE", 
    icon: Wrench, 
    color: "bg-rose-500",
    desc: "The janitor. Cleans up the mess left by the 'I'll fix it later' attitude.",
    output: "fix-report.md"
  },
  { 
    id: 9, 
    name: "Functional Design", 
    role: "DESIGN", 
    icon: FileEdit, 
    color: "bg-teal-500",
    desc: "User journey map. Translates 'working code' into 'useful features'.",
    output: "functional-spec.md"
  },
  { 
    id: 10, 
    name: "Functional Validator", 
    role: "VALIDATE", 
    icon: UserCheck, 
    color: "bg-sky-500", 
    gate: true,
    desc: "The final boss. Decides if the app is actually ready for humans.",
    output: "validation.md"
  },
  { 
    id: 11, 
    name: "PR Generator", 
    role: "SHIP", 
    icon: GitPullRequest, 
    color: "bg-gray-800",
    desc: "The diplomat. Packages the whole journey into a PR that reviewers might actually like.",
    output: "GitHub PR"
  },
];

const ROASTS = [
  { expert: "Senior 'It Depends' Arch", quote: "Your standard SDLC is just a randomized walk towards a deadline." },
  { expert: "Vibe Tech Lead", quote: "Most codebases are just technical debt with a UI. This pipeline is the first intervention." },
  { expert: "Security Cynic", quote: "I've seen screen doors on submarines with better security than your average 'Agile' sprint." },
  { expert: "The Burnout Specialist", quote: "Testing in production isn't a strategy, it's a cry for help." },
  { expert: "Refactor Rebel", quote: "If your code was a physical building, it would have been condemned three stages ago." },
];

export default function PDLCVisualizer() {
  const [isMonolith, setIsMonolith] = useState(false);
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  const toggleStage = (id: number) => {
    setExpandedStage(expandedStage === id ? null : id);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isMonolith ? 'bg-[#000]' : 'bg-[#0a0a0a]'} text-white py-12 px-4 sm:px-6 lg:px-8 font-mono`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Main Pipeline Section */}
        <div className="lg:w-2/3">
          <header className="mb-12 relative">
            <div className="flex justify-between items-start">
              <div>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className={`h-1 mb-6 origin-left bg-gradient-to-r ${isMonolith ? 'from-amber-400 via-orange-500 to-red-600' : 'from-blue-500 via-purple-500 to-rose-500'}`}
                />
                <h1 className="text-6xl font-black tracking-tighter mb-2 uppercase italic">
                  Agentic <span className={`text-transparent bg-clip-text ${isMonolith ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-blue-400 to-cyan-300'}`}>
                    {isMonolith ? 'MONOLITH' : 'PDLC'}
                  </span>
                </h1>
                <p className="text-gray-400 font-sans text-xl leading-relaxed">
                  {isMonolith 
                    ? "Single-agent end-to-end orchestration. Pausing only for mandatory gates." 
                    : "Industrial-grade autonomy for the modern stack. 11 stages of cold, calculated precision."}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-black">
                  <span className="w-8 h-px bg-gray-800" />
                  Architect: Balaji Duddukuri
                </div>
              </div>

              {/* Monolith Toggle */}
              <button 
                onClick={() => setIsMonolith(!isMonolith)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all group ${isMonolith ? 'bg-amber-500 border-amber-400 text-black font-black' : 'bg-transparent border-gray-800 text-gray-400 hover:border-gray-600'}`}
              >
                <Cpu size={20} className={isMonolith ? 'animate-spin-slow' : ''} />
                <span className="text-sm uppercase tracking-widest">{isMonolith ? 'GOD MODE ON' : 'ENABLE MONOLITH'}</span>
              </button>
            </div>
          </header>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {STAGES.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group flex gap-4 items-start ${isMonolith && !stage.gate && stage.id !== 11 ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'}`}
                >
                  {/* Number & Icon */}
                  <div className="flex flex-col items-center gap-2 mt-1">
                    <div className={`w-10 h-10 rounded-none border-2 flex items-center justify-center text-sm font-bold transition-all
                      ${isMonolith && (stage.gate || stage.id === 11) ? 'bg-amber-500 border-amber-400 text-black scale-110 shadow-[0_0_15px_rgba(245,158,11,0.5)]' : 'border-white text-white group-hover:bg-white group-hover:text-black'}
                    `}>
                      {String(stage.id).padStart(2, '0')}
                    </div>
                    {index < STAGES.length - 1 && (
                      <div className={`w-px h-16 transition-colors ${isMonolith ? 'bg-amber-900/50' : 'bg-gray-800 group-hover:bg-gray-500'}`} />
                    )}
                  </div>

                  {/* Content Card */}
                  <div 
                    onClick={() => toggleStage(stage.id)}
                    className={`flex-grow p-4 border transition-all cursor-pointer ${isMonolith && (stage.gate || stage.id === 11) ? 'border-amber-500/50 bg-amber-950/10' : 'border-gray-800 bg-[#111]'} hover:bg-[#161616] hover:border-gray-600 ${expandedStage === stage.id ? 'ring-2 ring-emerald-500/20' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded bg-gray-900 border border-gray-800`}>
                          <stage.icon size={18} className={isMonolith && (stage.gate || stage.id === 11) ? 'text-amber-400' : 'text-gray-300'} />
                        </div>
                        <h3 className="font-bold text-lg uppercase tracking-tight">{stage.name}</h3>
                        <span className={`text-[10px] px-2 py-0.5 font-black uppercase ${isMonolith && (stage.gate || stage.id === 11) ? 'bg-amber-500 text-black' : 'bg-white text-black'}`}>
                          {stage.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {stage.gate ? (
                          <div className="flex items-center gap-1.5 text-xs text-rose-500 uppercase font-black animate-pulse">
                            <AlertTriangle size={14} />
                            Human Gate
                          </div>
                        ) : isMonolith && (
                          <div className="flex items-center gap-1 text-[10px] text-amber-600 font-bold uppercase italic">
                            <ArrowRight size={10} />
                            Auto-Pass
                          </div>
                        )}
                        {expandedStage === stage.id ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
                      </div>
                    </div>
                    <p className="text-gray-500 text-xs font-sans mb-3 lowercase italic border-l-2 border-gray-800 pl-3">
                      {stage.desc}
                    </p>

                    <AnimatePresence>
                      {expandedStage === stage.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <h4 className="text-[10px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-2">
                                <Info size={12} /> Execution Logic
                              </h4>
                              <div className="text-[11px] text-gray-300 leading-relaxed font-sans bg-black/30 p-2 border border-gray-800/50">
                                This stage utilizes an internal agent specialized in {stage.role}. 
                                It strictly adheres to Stage-{stage.id} SKILL.md protocols.
                              </div>
                            </div>
                            <div className="space-y-2">
                              <h4 className="text-[10px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-2">
                                <Zap size={12} /> Technical Handoff
                              </h4>
                              <div className="text-[11px] text-emerald-400/80 leading-relaxed font-mono bg-black/30 p-2 border border-emerald-900/20">
                                <div>TARGET: {stage.output}</div>
                                <div className="text-[9px] mt-1 opacity-60 italic">Signature: SHA-256 Verified</div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!expandedStage && (
                      <div className={`flex items-center gap-2 text-[10px] uppercase font-bold ${isMonolith && (stage.gate || stage.id === 11) ? 'text-amber-400' : 'text-emerald-500'}`}>
                        <Zap size={10} />
                        Artifact: {stage.output}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Roast / Expert Circle Section */}
        <div className="lg:w-1/3 space-y-8">
          <div className="sticky top-12">
            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
              <Terminal size={24} className="text-rose-500" />
              {isMonolith ? 'Monolith Diagnostics' : 'The Vibe Experts Circle'}
            </h2>
            
            <div className="space-y-4">
              {(isMonolith 
                ? [
                    { expert: "Monolith Core", quote: "Context windows are full. Processing 11 stages in parallel silence." },
                    { expert: "Efficiency Engine", quote: "Human latency detected. Reducing interactive prompts to 2 parity check-points." }
                  ]
                : ROASTS
              ).map((roast, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.2) }}
                  key={`${isMonolith}-${i}`}
                  className={`p-6 border-l-4 relative overflow-hidden transition-colors ${isMonolith ? 'bg-amber-950/10 border-amber-600' : 'bg-[#111] border-rose-600'}`}
                >
                  <Quote className={`absolute -right-4 -top-4 size-16 rotate-12 transition-colors ${isMonolith ? 'text-amber-900/20' : 'text-gray-800'}`} />
                  <p className="text-sm italic text-gray-300 relative z-10 mb-3">
                    &ldquo;{roast.quote}&rdquo;
                  </p>
                  <div className={`text-[10px] font-black uppercase tracking-widest ${isMonolith ? 'text-amber-500' : 'text-rose-500'}`}>
                    — {roast.expert}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={`mt-12 p-8 transition-all duration-500 border rounded-2xl ${isMonolith ? 'bg-amber-950/20 border-amber-500/30' : 'bg-gradient-to-br from-blue-900/10 to-purple-900/10 border-white/10'}`}>
              <h4 className={`text-xs font-black uppercase mb-4 ${isMonolith ? 'text-amber-400' : 'text-blue-400'}`}>System Status</h4>
              <div className="grid grid-cols-2 gap-6 text-[10px]">
                <div>
                  <div className="text-gray-500 uppercase mb-1">Architecture</div>
                  <div className={isMonolith ? 'text-amber-400' : 'text-white'}>{isMonolith ? 'MONOLITHIC-ORCHESTRA' : 'MICRO-STAGED-PIPELINE'}</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase mb-1">Human Gaps</div>
                  <div className={isMonolith ? 'text-amber-400' : 'text-white'}>{isMonolith ? 'MINIMIZED (2)' : 'STRICT (11)'}</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase mb-1">Vibe Fidelity</div>
                  <div className={isMonolith ? 'text-amber-400' : 'text-white'}>MAXIMAL</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase mb-1">Technical Debt</div>
                  <div className={isMonolith ? 'text-amber-400' : 'text-white'}>SYSTEMATICALLY PURGED</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
