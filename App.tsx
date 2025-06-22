import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkersList from './components/WorkersList';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WorkersList />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;