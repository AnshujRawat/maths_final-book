import { useEffect } from 'react';

export const useKeyNavigation = (
  onNext: () => void,
  onPrevious: () => void,
  onHome: () => void,
  onEnd: () => void
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onPrevious();
          break;
        case 'Home':
          event.preventDefault();
          onHome();
          break;
        case 'End':
          event.preventDefault();
          onEnd();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious, onHome, onEnd]);
};