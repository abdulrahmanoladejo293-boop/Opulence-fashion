import React, { useState, useEffect } from 'react';
import './app.css';

// 🧱 Import layout frame components from your actual assets folder path
import Nav from './assets/components/nav';
import Foot from './assets/components/foot';

// 📄 Import page components directly from your components folder
import Home from './assets/components/home';
import Story from './assets/components/story';
import Work from './assets/components/work';
import Cloth from './assets/components/cloth';
import Rate from './assets/components/rate';
import Book from './assets/components/book';


export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.host === window.location.host) {
        const path = target.pathname;
        if (['/', '/story', '/work', '/cloth', '/rate', '/book', '/contact'].includes(path)) {
          e.preventDefault();
          window.history.pushState(null, '', path);
          setCurrentPath(path);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/story':
        return <Story />;
      case '/work':
        return <Work />;
      case '/cloth':
        return <Cloth />;
      case '/rate':
        return <Rate />;
      case '/book':
        return <Book />;
      case '/contact':
        return <Book />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-root-canvas">
      <Nav />
      <div className="main-content-wrapper">
        {renderPage()}
      </div>
      <Foot />
    </div>
  );
}
