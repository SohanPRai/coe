import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './loading-page/components/LoadingScreen';
import { HomeScreen } from './home-page/components/HomeScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="w-screen h-screen overflow-hidden bg-black text-slate-50">
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoaded(true)} />
        ) : (
          <HomeScreen key="dashboard" />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
