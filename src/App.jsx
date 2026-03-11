import { useState, useEffect } from 'react';
import { courseData } from './data/courseData';
import Sidebar from './components/Sidebar';
import TopicView from './components/TopicView';
import Home from './components/Home';
import Quiz from './components/Quiz';

const PROGRESS_KEY = 'pdc_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  function handleSelectTopic(sectionId, topicId) {
    setActiveSection(sectionId);
    setActiveTopic(topicId);
  }

  function handleMarkDone() {
    if (activeTopic && activeTopic !== 'quiz') {
      setProgress(p => ({ ...p, [activeTopic]: true }));
      // Auto advance to next topic
      const section = courseData.find(s => s.id === activeSection);
      if (section) {
        const idx = section.topics.findIndex(t => t.id === activeTopic);
        if (idx < section.topics.length - 1) {
          handleSelectTopic(activeSection, section.topics[idx + 1].id);
        } else {
          // Go to next section
          const sectionIdx = courseData.findIndex(s => s.id === activeSection);
          if (sectionIdx < courseData.length - 1) {
            const nextSection = courseData[sectionIdx + 1];
            handleSelectTopic(nextSection.id, nextSection.topics[0].id);
          }
        }
      }
    }
  }

  const currentSection = courseData.find(s => s.id === activeSection);
  const currentTopic = currentSection?.topics.find(t => t.id === activeTopic);

  // Background particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 1}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 10 + 8}s`,
  }));

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <Sidebar
        activeSection={activeSection}
        activeTopic={activeTopic}
        onSelectTopic={handleSelectTopic}
        progress={progress}
      />

      <main className="flex-1 overflow-y-auto">
        {activeTopic === null ? (
          <Home onStart={handleSelectTopic} progress={progress} />
        ) : activeTopic === 'quiz' ? (
          <Quiz />
        ) : currentSection && currentTopic ? (
          <TopicView
            section={currentSection}
            topic={currentTopic}
            onMarkDone={handleMarkDone}
            isDone={!!progress[activeTopic]}
          />
        ) : null}
      </main>
    </div>
  );
}
