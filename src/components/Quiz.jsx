import { useState } from 'react';
import { quizData } from '../data/courseData';

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const q = quizData[current];

  function handleSelect(idx) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.answer) setScore(s => s + 1);
    setAnswers(a => [...a, { correct: idx === q.answer, selected: idx, answer: q.answer }]);
    setShowResult(true);
  }

  function handleNext() {
    if (current + 1 >= quizData.length) setFinished(true);
    else { setCurrent(c => c + 1); setSelected(null); setShowResult(false); }
  }

  function handleRestart() {
    setCurrent(0); setSelected(null); setShowResult(false); setScore(0); setAnswers([]); setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / quizData.length) * 100);
    const grade = pct >= 90 ? '🏆 Excellent!' : pct >= 70 ? '✅ Good Job!' : pct >= 50 ? '📖 Keep Studying' : '💪 More Practice Needed';
    return (
      <div className="max-w-2xl mx-auto p-6 topic-enter">
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{pct >= 70 ? '🎉' : '📚'}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{grade}</h2>
          <p className="text-slate-400 mb-6">You scored <span className="text-white font-bold">{score}</span> out of <span className="text-white font-bold">{quizData.length}</span></p>
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10"/>
              <circle cx="60" cy="60" r="50" fill="none"
                stroke={pct >= 70 ? '#22c55e' : pct >= 50 ? '#f59e0b' : '#ef4444'}
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - pct/100)}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{pct}%</span>
            </div>
          </div>
          <div className="space-y-2 mb-6 text-left max-h-80 overflow-y-auto">
            {quizData.map((q, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg text-sm ${answers[i]?.correct ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                <span className="mt-0.5 shrink-0">{answers[i]?.correct ? '✅' : '❌'}</span>
                <div>
                  <p className="text-slate-300 font-medium">{q.q}</p>
                  {!answers[i]?.correct && <p className="text-emerald-400 text-xs mt-1">✓ {q.options[q.answer]}</p>}
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleRestart} className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
            Retry Quiz 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 topic-enter">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">🧠 Quiz Time</h2>
          <p className="text-slate-400 text-sm">{quizData.length} questions covering all lectures</p>
        </div>
        <div className="glass px-4 py-2 rounded-xl">
          <span className="text-indigo-400 font-bold">{current + 1}</span>
          <span className="text-slate-500"> / {quizData.length}</span>
        </div>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full progress-bar" style={{ width: `${(current / quizData.length) * 100}%` }} />
      </div>
      <div className="glass rounded-2xl p-6 mb-4">
        <p className="text-lg font-semibold text-white leading-relaxed">{q.q}</p>
      </div>
      <div className="space-y-3 mb-4">
        {q.options.map((opt, idx) => {
          let base = 'quiz-option w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm transition-all ';
          if (selected !== null) {
            if (idx === q.answer) base += 'quiz-correct text-emerald-300 border-emerald-500/50 ';
            else if (idx === selected) base += 'quiz-wrong text-red-300 border-red-500/50 ';
            else base += 'glass text-slate-500 border-white/10 ';
          } else {
            base += 'glass text-slate-300 border-white/10 hover:border-indigo-400/50 hover:text-white ';
          }
          return (
            <button key={idx} className={base} onClick={() => handleSelect(idx)}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0
                ${selected !== null && idx === q.answer ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300' :
                  selected === idx && idx !== q.answer ? 'border-red-400 bg-red-400/20 text-red-300' :
                  'border-white/20 text-slate-500'}`}>
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {showResult && (
        <>
          <div className={`rounded-xl p-4 mb-4 text-sm border ${selected === q.answer ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
            <p className={`font-semibold mb-1 ${selected === q.answer ? 'text-emerald-400' : 'text-amber-400'}`}>{selected === q.answer ? '✅ Correct!' : '❌ Incorrect — here\'s why:'}</p>
            <p className="text-slate-300">{q.explanation}</p>
          </div>
          <button onClick={handleNext} className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
            {current + 1 >= quizData.length ? 'See Results 🎉' : 'Next Question →'}
          </button>
        </>
      )}
    </div>
  );
}
