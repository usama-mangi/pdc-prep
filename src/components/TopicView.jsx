import { useState, useEffect } from 'react';

function MemoryTip({ tip }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setVisible(!visible)}
        className="flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 transition-colors group"
      >
        <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/30 transition-colors">💡</span>
        {visible ? 'Hide Memory Tip' : 'Show Memory Tip'}
      </button>
      {visible && (
        <div className="mt-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm font-medium animate-float">
          🧠 {tip}
        </div>
      )}
    </div>
  );
}

function KeyPoint({ text, index }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-all duration-200 hover:translate-x-1 group"
      style={{ animationDelay: `${index * 80}ms` }}>
      <span className="w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-bold shrink-0 mt-0.5 group-hover:bg-indigo-500/50 transition-colors">
        {index + 1}
      </span>
      <span className="text-slate-300 text-sm leading-relaxed">{text}</span>
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className="relative group">
      <pre className="bg-slate-900/80 border border-white/10 rounded-xl p-4 text-xs text-emerald-300 font-mono overflow-x-auto leading-relaxed">
        {code}
      </pre>
      <button onClick={copy} className="absolute top-2 right-2 px-2 py-1 text-xs glass rounded-lg text-slate-400 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
        {copied ? '✓ Copied' : 'Copy'}
      </button>
    </div>
  );
}

function ComparisonTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-white/5">
            {headers.map((h, i) => (
              <th key={i} className={`px-4 py-3 text-left font-semibold ${i === 0 ? 'text-slate-300' : 'text-indigo-300'}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="compare-row border-t border-white/5 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-3 ${ci === 0 ? 'text-slate-300 font-medium' : 'text-slate-400'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Timeline({ events }) {
  return (
    <div className="space-y-3">
      {events.map((item, i) => (
        <div key={i} className="flex gap-4 group" style={{ animationDelay: `${i * 100}ms` }}>
          <div className="flex flex-col items-center">
            <div className="w-12 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-xs font-bold text-indigo-300 group-hover:bg-indigo-500/30 transition-colors shrink-0">
              {item.year}
            </div>
            {i < events.length - 1 && <div className="w-px flex-1 bg-white/10 my-1" />}
          </div>
          <div className="pb-3 flex-1">
            <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`card-flip h-36 cursor-pointer ${flipped ? 'card-flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-flip-inner relative w-full h-full">
        <div className="card-face absolute inset-0 glass rounded-xl p-4 flex flex-col justify-center">
          <p className="text-slate-300 text-sm font-medium text-center">{front}</p>
          <p className="text-slate-500 text-xs text-center mt-2">Click to reveal →</p>
        </div>
        <div className="card-face card-back absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-xl p-4 flex items-center justify-center">
          <p className="text-indigo-200 text-sm font-semibold text-center">{back}</p>
        </div>
      </div>
    </div>
  );
}

export default function TopicView({ section, topic, onMarkDone, isDone }) {
  const [key, setKey] = useState(0);
  const c = topic.content;

  useEffect(() => { setKey(k => k + 1); }, [topic.id]);

  return (
    <div key={key} className="max-w-3xl mx-auto p-6 space-y-6 topic-enter">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{topic.icon}</span>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider">{section.title}</p>
              <h1 className="text-2xl font-bold text-white">{topic.title}</h1>
            </div>
          </div>
        </div>
        <button
          onClick={onMarkDone}
          className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
            ${isDone
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
              : 'glass text-slate-400 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-400'
            }`}
        >
          {isDone ? '✅ Studied' : '○ Mark as Studied'}
        </button>
      </div>

      {/* Definition */}
      <div className={`p-5 rounded-2xl bg-gradient-to-br ${section.color} bg-opacity-10 border border-white/10`}
        style={{ background: `linear-gradient(135deg, ${section.bgGlow}, transparent)` }}>
        <p className="text-slate-200 leading-relaxed">{c.definition}</p>
      </div>

      {/* Key Points */}
      {c.keyPoints && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Points</h3>
          <div className="space-y-2">
            {c.keyPoints.map((p, i) => <KeyPoint key={i} text={p} index={i} />)}
          </div>
        </div>
      )}

      {/* Analogy */}
      {c.analogy && (
        <div className="glass rounded-2xl p-5 border-l-4 border-purple-500">
          <h3 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">🎭 {c.analogy.label}</h3>
          <p className="text-slate-200 italic">{c.analogy.text}</p>
        </div>
      )}

      {/* Timeline */}
      {c.timeline && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">📅 Timeline</h3>
          <Timeline events={c.timeline} />
        </div>
      )}

      {/* Comparison table */}
      {c.table && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">📊 Comparison</h3>
          <ComparisonTable headers={c.table.headers} rows={c.table.rows} />
        </div>
      )}

      {/* Comparisons (cloud vs traditional) */}
      {c.comparisons && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">🔄 Comparison</h3>
          <div className="space-y-3">
            {c.comparisons.map((comp, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-white/10">
                <div className="bg-white/5 px-4 py-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider">{comp.aspect}</div>
                <div className="grid grid-cols-2 divide-x divide-white/10">
                  <div className="px-4 py-3">
                    <p className="text-xs text-slate-500 mb-1">Traditional</p>
                    <p className="text-sm text-slate-300">{comp.traditional}</p>
                  </div>
                  <div className="px-4 py-3 bg-indigo-500/5">
                    <p className="text-xs text-indigo-400 mb-1">Cloud ☁️</p>
                    <p className="text-sm text-slate-300">{comp.cloud}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* NIST Characteristics */}
      {c.characteristics && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">⭐ 5 Essential Characteristics</h3>
          <div className="space-y-3">
            {c.characteristics.map((ch, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all group hover:scale-[1.01]">
                <span className="text-2xl shrink-0">{ch.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{ch.name}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      {c.technologies && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🔧 Enabling Technologies</h3>
          <div className="space-y-3">
            {c.technologies.map((tech, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all group hover:scale-[1.01]">
                <span className="text-2xl shrink-0">{tech.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{tech.name}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Web versions */}
      {c.versions && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🕸️ Web Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {c.versions.map((v, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all hover:scale-[1.02] text-center">
                <div className="text-3xl mb-2">{v.icon}</div>
                <p className="font-bold text-white text-sm mb-2">{v.version}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Advantages */}
      {c.advantages && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">✅ Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {c.advantages.map((adv, i) => (
              <div key={i} className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{adv.icon}</span>
                  <p className="font-semibold text-emerald-300 text-sm">{adv.name}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disadvantages */}
      {c.disadvantages && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">⚠️ Disadvantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {c.disadvantages.map((dis, i) => (
              <div key={i} className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{dis.icon}</span>
                  <p className="font-semibold text-red-300 text-sm">{dis.name}</p>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{dis.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Case studies */}
      {c.casestudies && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">📰 Real-World Case Studies</h3>
          <div className="space-y-3">
            {c.casestudies.map((cs, i) => (
              <div key={i} className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 hover:border-orange-500/40 transition-all">
                <p className="font-semibold text-orange-300 text-sm mb-1">🔴 {cs.title}</p>
                <p className="text-slate-400 text-sm">{cs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tiers (for regions) */}
      {c.tiers && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🏗️ ISP Tiers</h3>
          <div className="space-y-2">
            {c.tiers.map((t, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-all">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold shrink-0">{t.tier}</span>
                <p className="text-slate-300 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Deployment models overview */}
      {c.models && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🏛️ The 4 Deployment Models</h3>
          <div className="grid grid-cols-2 gap-3">
            {c.models.map((m, i) => {
              const icons = ['🌐', '🔒', '👥', '🔀'];
              const colors = ['from-sky-500/20', 'from-violet-500/20', 'from-emerald-500/20', 'from-amber-500/20'];
              return (
                <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${colors[i]} to-transparent border border-white/10 text-center hover:scale-[1.03] transition-all`}>
                  <div className="text-2xl mb-2">{icons[i]}</div>
                  <p className="text-white font-semibold text-sm">{m}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Benefits & Limitations */}
      {c.benefits && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">✅ Benefits</h3>
            <div className="space-y-2">
              {c.benefits.map((b, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-300 items-start">
                  <span className="text-emerald-400 shrink-0">→</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
          {c.limitations && (
            <div className="glass rounded-2xl p-5">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">❌ Limitations</h3>
              <div className="space-y-2">
                {c.limitations.map((l, i) => (
                  <div key={i} className="flex gap-2 text-sm text-slate-300 items-start">
                    <span className="text-red-400 shrink-0">→</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Example */}
      {c.example && (
        <div className="glass rounded-2xl p-5 border-l-4 border-cyan-500">
          <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">💼 Example</h3>
          <p className="text-slate-300 text-sm">{c.example}</p>
        </div>
      )}

      {/* SLI/SLO/SLA definitions */}
      {c.definitions && (
        <div className="space-y-4">
          {c.definitions.map((def, i) => (
            <div key={i} className={`p-5 rounded-2xl bg-gradient-to-br ${def.color} bg-opacity-10 border border-white/10 hover:scale-[1.01] transition-all`}
              style={{ background: `linear-gradient(135deg, rgba(99,102,241,${0.1 + i*0.05}), transparent)` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-black text-white">{def.acronym}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{def.full}</p>
                  <p className="text-indigo-300 text-xs">⇒ {def.arrow}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-3 leading-relaxed">{def.desc}</p>
              <div className="space-y-1">
                {def.examples.map((ex, j) => (
                  <div key={j} className="flex gap-2 text-xs text-slate-400">
                    <span className="text-indigo-400">•</span>{ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Nines table */}
      {c.table && !c.definitions && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">📊 Reference Table</h3>
          <ComparisonTable headers={c.table.headers} rows={c.table.rows} />
        </div>
      )}

      {/* SLA reading questions */}
      {c.questions && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">❓ Key Questions When Reading an SLA</h3>
          <div className="space-y-3">
            {c.questions.map((q, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all">
                <p className="font-semibold text-white text-sm mb-1">{q.q}</p>
                <p className="text-slate-400 text-sm">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Implications */}
      {c.implications && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">🏢 For the Provider</h3>
            <div className="space-y-2">
              {c.implications.forProvider.map((p, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-300 items-start">
                  <span className="text-blue-400 shrink-0">•</span>{p}
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-3">👤 For You (Customer)</h3>
            <div className="space-y-2">
              {c.implications.forYou.map((p, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-300 items-start">
                  <span className="text-purple-400 shrink-0">•</span>{p}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Formula breakdown */}
      {c.formulaBreakdown && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">📐 Formula Breakdown</h3>
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 mb-4 text-center">
            <p className="text-indigo-200 font-mono text-base font-bold">{c.definition}</p>
          </div>
          <div className="space-y-2">
            {c.formulaBreakdown.map((f, i) => (
              <div key={i} className="flex gap-2 text-sm text-slate-300 items-start">
                <span className="text-cyan-400 shrink-0">→</span>{f}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Example problem */}
      {c.exampleProblem && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">🧮 {c.exampleProblem.title}</h3>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-4">
            <p className="text-slate-300 text-sm">{c.exampleProblem.problem}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">✅ Solution</p>
            <p className="text-slate-300 text-sm leading-relaxed">{c.exampleProblem.solution}</p>
          </div>
        </div>
      )}

      {/* SLO setting */}
      {c.exceeding && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">🎯 On Exceeding Your SLO</h3>
          <div className="space-y-2">
            {c.exceeding.map((e, i) => (
              <div key={i} className="flex gap-2 text-sm text-slate-300 items-start p-2 rounded-lg hover:bg-white/5 transition-colors">
                <span className="text-cyan-400 shrink-0">→</span>{e}
              </div>
            ))}
          </div>
        </div>
      )}
      {c.conclusion && (
        <div className="glass rounded-2xl p-5 border border-indigo-500/30">
          <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-3">📌 Conclusion</h3>
          <div className="grid grid-cols-2 gap-2">
            {c.conclusion.map((con, i) => (
              <div key={i} className="p-3 rounded-xl bg-indigo-500/10 text-indigo-200 text-xs font-medium text-center">{con}</div>
            ))}
          </div>
        </div>
      )}

      {/* SLA Types */}
      {c.types && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">📝 SLA Types</h3>
          <div className="space-y-4">
            {c.types.map((type, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all border border-white/10 hover:border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{type.icon}</span>
                  <p className="font-bold text-white text-sm">{type.name}</p>
                </div>
                <p className="text-slate-400 text-sm mb-2">{type.desc}</p>
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                  <p className="text-xs text-indigo-300">💼 Example: {type.example}</p>
                </div>
              </div>
            ))}
          </div>
          {c.analogy && (
            <div className="mt-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-1">🍵 Analogy</p>
              <p className="text-slate-300 text-sm italic">{c.analogy}</p>
            </div>
          )}
        </div>
      )}

      {/* 5 things to look for in SLA */}
      {c.items && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🔍 5 Things to Look For</h3>
          <div className="space-y-3">
            {c.items.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all hover:scale-[1.01] group">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {item.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{item.icon}</span>
                    <p className="font-semibold text-white text-sm">{item.name}</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Real world SLAs */}
      {c.realWorldSLAs && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🏢 Real-World SLA Examples</h3>
          <div className="space-y-3">
            {c.realWorldSLAs.map((sla, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-all">
                <p className="font-semibold text-white text-sm">{sla.provider}</p>
                <p className="text-slate-400 text-sm mt-1">{sla.desc}</p>
              </div>
            ))}
          </div>
          {c.contractNote && (
            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-amber-300 text-xs">⚠️ {c.contractNote}</p>
            </div>
          )}
        </div>
      )}

      {/* Advanced SLA problem */}
      {c.problem && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-4">🧮 Advanced SLA Problem</h3>
          <div className="p-4 rounded-xl bg-white/5 mb-4">
            <p className="text-slate-300 text-sm font-medium mb-3">{c.problem.setup}</p>
            <div className="space-y-1 mb-3">
              {c.problem.params.map((p, i) => (
                <div key={i} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-indigo-400 shrink-0">•</span>{p}
                </div>
              ))}
            </div>
            <div className="mb-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Service Credits</p>
              <div className="grid grid-cols-2 gap-2">
                {c.problem.credits.map((cr, i) => (
                  <div key={i} className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                    <p className="text-red-300 text-xs font-semibold">{cr.level}</p>
                    <p className="text-orange-300 text-xs">{cr.credit}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-slate-300 text-sm"><span className="text-amber-400 font-medium">Outages:</span> {c.problem.outages}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">✅ Step-by-Step Solution</p>
            <div className="space-y-2">
              {c.problem.solution.map((step, i) => (
                <div key={i} className="flex gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LAMP / RDP Steps */}
      {c.steps && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">⚙️ Step-by-Step</h3>
          <div className="space-y-4">
            {c.steps.map((step, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
                <div className="flex items-center gap-3 px-4 py-3 bg-white/5">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{step.num}</span>
                  <p className="font-semibold text-white text-sm">{step.title}</p>
                </div>
                <div className="px-4 py-3">
                  <p className="text-slate-400 text-sm mb-3">{step.desc}</p>
                  {step.cmd && <CodeBlock code={step.cmd} />}
                </div>
              </div>
            ))}
          </div>
          {c.alternative && (
            <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">🔀 {c.alternative.title}</p>
              <div className="space-y-2">
                {c.alternative.commands.map((cmd, i) => (
                  <CodeBlock key={i} code={cmd} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Service stack (IaaS/PaaS/SaaS management) */}
      {c.stack && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">🏗️ Management Responsibility Stack</h3>
          <div className="grid grid-cols-4 gap-1 text-xs">
            <div className="font-semibold text-slate-400 p-2">Layer</div>
            <div className="font-semibold text-sky-300 p-2 text-center">IaaS</div>
            <div className="font-semibold text-violet-300 p-2 text-center">PaaS</div>
            <div className="font-semibold text-emerald-300 p-2 text-center">SaaS</div>
            {c.stack.map((row, i) => {
              const getColor = (val) => val === 'Customer' ? 'bg-blue-500/20 text-blue-300' : 'bg-slate-700/50 text-slate-400';
              return (
                <>
                  <div key={`l${i}`} className={`p-2 rounded text-slate-300 font-medium ${i % 2 === 0 ? 'bg-white/3' : ''}`}>{row.layer}</div>
                  <div key={`i${i}`} className={`p-2 rounded text-center ${getColor(row.iaas)}`}>{row.iaas}</div>
                  <div key={`p${i}`} className={`p-2 rounded text-center ${getColor(row.paas)}`}>{row.paas}</div>
                  <div key={`s${i}`} className={`p-2 rounded text-center ${getColor(row.saas)}`}>{row.saas}</div>
                </>
              );
            })}
          </div>
          {c.market2023 && (
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">📈 Market Share (2023)</p>
              <div className="grid grid-cols-3 gap-3">
                {c.market2023.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 text-center hover:bg-white/8 transition-all">
                    <p className="text-white font-bold text-sm">{m.model}</p>
                    <p className="text-indigo-300 font-semibold text-xs">{m.share}</p>
                    <p className="text-slate-500 text-xs">{m.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Examples for service models */}
      {c.examples && (
        <div className="glass rounded-2xl p-5">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">💡 Real Examples</h3>
          <div className="flex flex-wrap gap-2">
            {c.examples.map((ex, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-medium hover:bg-indigo-500/25 transition-colors">
                {ex}
              </span>
            ))}
          </div>
          {c.usecase && (
            <div className="mt-3 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <p className="text-cyan-300 text-xs font-medium">{c.usecase}</p>
            </div>
          )}
          {c.scenario && (
            <div className="mt-3 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <p className="text-violet-300 text-xs font-medium">🎬 Scenario: {c.scenario}</p>
            </div>
          )}
        </div>
      )}

      {/* Memory tip */}
      {c.memoryTip && <MemoryTip tip={c.memoryTip} />}

      {/* Mark done */}
      <div className="flex justify-center pt-4 pb-8">
        <button
          onClick={onMarkDone}
          className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300
            ${isDone
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 cursor-default'
              : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 hover:scale-105 shadow-lg glow'
            }`}
        >
          {isDone ? '✅ Marked as Studied!' : '✓ Mark as Studied & Continue'}
        </button>
      </div>
    </div>
  );
}
