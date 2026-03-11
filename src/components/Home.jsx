import { courseData } from '../data/courseData';

export default function Home({ onStart, progress }) {
  const totalTopics = courseData.reduce((sum, s) => sum + s.topics.length, 0);
  const completedCount = Object.values(progress).filter(Boolean).length;
  const pct = Math.round((completedCount / totalTopics) * 100);

  return (
    <div className="max-w-3xl mx-auto p-8 topic-enter">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="text-7xl mb-4 animate-float inline-block">🎓</div>
        <h1 className="text-4xl font-black text-white mb-3">
          <span className="text-gradient">Parallel & Distributed</span><br/>
          Computing
        </h1>
        <p className="text-slate-400 text-lg mb-2">Complete Exam Prep — All 9 Lectures Covered</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
          ⏰ Exam Tomorrow 12:00 – 2:00 PM
        </div>
      </div>

      {/* Progress overview */}
      {completedCount > 0 && (
        <div className="glass rounded-2xl p-5 mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white font-semibold">Your Progress</p>
            <span className="text-indigo-400 font-bold">{completedCount}/{totalTopics} topics</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full progress-bar shimmer" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-slate-500 text-sm mt-2">{pct}% complete</p>
        </div>
      )}

      {/* Sections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {courseData.map((section) => {
          const done = section.topics.filter(t => progress[t.id]).length;
          const allDone = done === section.topics.length;
          return (
            <button
              key={section.id}
              onClick={() => onStart(section.id, section.topics[0].id)}
              className={`glass glass-hover rounded-2xl p-5 text-left transition-all duration-300 group
                ${allDone ? 'border border-emerald-500/30' : 'border border-white/10'}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl group-hover:scale-110 transition-transform inline-block">{section.emoji}</span>
                <div className="text-right">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${allDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-slate-400'}`}>
                    {done}/{section.topics.length}
                  </span>
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm leading-tight mb-2">{section.title}</h3>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${section.color} rounded-full progress-bar`}
                  style={{ width: `${(done / section.topics.length) * 100}%` }} />
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {section.topics.slice(0, 3).map(t => (
                  <span key={t.id} className="text-xs text-slate-500 truncate">{t.icon} {t.title}</span>
                ))}
                {section.topics.length > 3 && (
                  <span className="text-xs text-slate-600">+{section.topics.length - 3} more</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Start CTA */}
      <div className="text-center">
        <button
          onClick={() => onStart(courseData[0].id, courseData[0].topics[0].id)}
          className="px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg font-bold rounded-2xl hover:opacity-90 hover:scale-105 transition-all shadow-2xl glow"
        >
          {completedCount > 0 ? '▶ Continue Studying' : '🚀 Start Studying'}
        </button>
        <p className="text-slate-500 text-sm mt-3">{totalTopics} topics · 15 quiz questions · All lectures included</p>
      </div>
    </div>
  );
}
