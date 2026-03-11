import { useState } from 'react';
import { courseData } from '../data/courseData';

export default function Sidebar({ activeSection, activeTopic, onSelectTopic, progress }) {
  const [expandedSection, setExpandedSection] = useState(activeSection);
  const totalTopics = courseData.reduce((sum, s) => sum + s.topics.length, 0);
  const completedCount = Object.values(progress).filter(Boolean).length;
  const pct = Math.round((completedCount / totalTopics) * 100);

  return (
    <aside className="w-72 min-h-screen flex flex-col glass border-r border-white/10 sticky top-0 h-screen overflow-y-auto">
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">🎓</span>
          <h1 className="font-bold text-white text-sm leading-tight">Parallel & Distributed<br/>Computing</h1>
        </div>
        <p className="text-xs text-slate-400 mt-1">Exam Prep — All Topics</p>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-400 mb-1">
            <span>{completedCount}/{totalTopics} topics read</span>
            <span className="text-indigo-400 font-medium">{pct}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full progress-bar" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {courseData.map((section) => {
          const isExpanded = expandedSection === section.id;
          const sectionDone = section.topics.filter(t => progress[t.id]).length;
          return (
            <div key={section.id}>
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all duration-200
                  ${isExpanded ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="text-base">{section.emoji}</span>
                <span className="flex-1 text-xs font-medium leading-tight">{section.title}</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs text-slate-500">{sectionDone}/{section.topics.length}</span>
                  <svg className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {isExpanded && (
                <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                  {section.topics.map((topic) => {
                    const isActive = activeTopic === topic.id;
                    const isDone = progress[topic.id];
                    return (
                      <button
                        key={topic.id}
                        onClick={() => onSelectTopic(section.id, topic.id)}
                        className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-xs transition-all duration-150
                          ${isActive
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                          }`}
                      >
                        <span className="text-sm">{topic.icon}</span>
                        <span className="flex-1 leading-tight">{topic.title}</span>
                        {isDone && <span className="text-emerald-400">✓</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          onClick={() => onSelectTopic('quiz', 'quiz')}
          className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200
            ${activeTopic === 'quiz'
              ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
              : 'glass text-amber-400 hover:bg-amber-500/10 border border-amber-500/30'
            }`}
        >
          🧠 Take Quiz
        </button>
      </div>
    </aside>
  );
}
