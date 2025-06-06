import { useState, useEffect, useRef } from 'react';
import './App.css';
import SideNavbar from './components/SideNavbar';

function TypingIntro({ text, onComplete }) {
  const [typedText, setTypedText] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + text[i]);
        setI(i + 1);
      }, 18);
      return () => clearTimeout(timeout);
    } else {
      onComplete && onComplete();
    }
  }, [i, text, onComplete]);

  return (
    <p className="typing">
      {typedText}
      <span className="cursor">|</span>
    </p>
  );
}

export default function App() {
  const [typingDone, setTypingDone] = useState(false);
  const projectsRef = useRef(null);
  
  const introText = "✋ I'm a Computer Science student at Reichman University, currently working as a Data Engineer. While my professional experience centers on building data pipelines and processing large-scale datasets, I've also developed a passion for software development through academic projects.\n\nI've built full-stack apps, real-time computer vision systems, and automation tools as part of university assignments and personal explorations. I'm proud to be on the Dean's List and maintain a high GPA, but what truly drives me is learning by doing — this portfolio highlights some of the things I've built, explored, and enjoyed.";
  
  // Scroll to projects section after intro is done
  useEffect(() => {
    if (typingDone && projectsRef.current) {
      const scrollTimer = setTimeout(() => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 5000);
      
      return () => clearTimeout(scrollTimer);
    }
  }, [typingDone]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto', width: '100%', boxSizing: 'border-box'}}>
      <SideNavbar />
      <h1>Itay Wagner</h1>
      <h2>Data Engineer & Aspiring Software Developer</h2>
      <div style={{ minHeight: '23em' }}>
        <TypingIntro 
          text={introText} 
          onComplete={() => setTypingDone(true)} 
        />
      </div>

      <h2 ref={projectsRef}>🚀 Featured Projects</h2>
      <ul>
        <li style={{ marginTop: '1rem' }}>
          <strong>The Chase - Multiplayer Trivia Game</strong><br />
          Fast paced multiplayer trivia game, featuring "Hamirdaf" trivia tv show theme with fun new features<br />
          <a href="https://drive.google.com/file/d/1sKo6n6TN_5iztUsYgKn0YBAwoz2V8z64/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
          <a href="https://github.com/ItaiWagner/HW3_EX2" target="_blank" rel="noopener noreferrer">📖 GitHub</a>

        </li>
        <li>
          <strong>Table Tennis Analyzer</strong><br />
          Computer vision tool using YOLO and EasyOCR to extract and visualize player positions and scores.<br />
          <a href="https://drive.google.com/file/d/17yKUu1Oa0rCwlK_Ml8Srobn43-qRjKnC/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
          <a href="https://github.com/ItaiWagner/HW2_EX1" target="_blank" rel="noopener noreferrer">📖 GitHub</a>
        </li>

        <li style={{ marginTop: '1rem' }}>
          <strong>Military Base Intelligence Interface</strong><br />
          Streamlit app enhanced with AI (Gemini + Dolphin) to analyze satellite images and generate reports.<br />
          <a href="https://drive.google.com/file/d/15zlez6y6afmIhhOXH0n-1Qi2ou-2kJjY/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
          <a href="https://github.com/ItaiWagner/HW2_EX2" target="_blank" rel="noopener noreferrer">📖 GitHub</a>
        </li>

        <li style={{ marginTop: '1rem' }}>
          <strong>Icy Legends (Platformer Game)</strong><br />
          A fast-paced vertical platformer inspired by Icy Tower. Fully playable in browser.<br />
          <a href="https://drive.google.com/file/d/1IoYqpzNIdvnY-Wjo1QrMAVwTrHDDyZbd/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>  
          <a href="https://icylegends.netlify.app/" target="_blank" rel="noopener noreferrer">  🕹️ Play Game</a>
          <a href="https://github.com/ItaiWagner/HW1_EX2" target="_blank" rel="noopener noreferrer">📖 GitHub</a>
        </li>

        <li style={{ marginTop: '1rem' }}>
          <strong>Vinyl Verse – Album Tagging App</strong><br />
          A swipe-based UI to tag albums with vibes and moods. Built in Lovable with live stats tracking.<br />
          <a href="https://drive.google.com/file/d/1tW1fXlXQmPxarRDtcokdgGpQek6Bptps/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
          <a href="https://rhythm-match-vinyl-verse.lovable.app/" target="_blank" rel="noopener noreferrer">  📀 Try App</a>
        </li>

        <li style={{ marginTop: '1rem' }}>
          <strong>Telegram Face Recognition Bot</strong><br />
          Python bot for adding, recognizing, and blending faces via Telegram. Includes tsne-based face similarity mapping.<br />
          <a href="https://github.com/ItaiWagner/HW1_EX1" target="_blank" rel="noopener noreferrer">📖 GitHub</a>
        </li>

        <li style={{ marginTop: '1rem' }}>
          <strong>Morties Attack (Nand2Tetris Game in Jack)</strong><br />
          A 2D arcade-style shooter built from scratch in Jack as part of the Nand2Tetris course.<br />
          <a href="https://drive.google.com/file/d/1ibLYZkLMujx1OomtBW9V2oHTkLGJoMiN/view?usp=sharing" target="_blank" rel="noopener noreferrer">🎥 Watch Demo</a>
          <a href="https://github.com/ItaiWagner/MortiesAttack" target="_blank" rel="noopener noreferrer">📖 GitHub</a>
        </li>
      </ul>
    </div>
  );
}