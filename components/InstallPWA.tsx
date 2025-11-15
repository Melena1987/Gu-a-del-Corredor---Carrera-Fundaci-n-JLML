import React, { useState, useEffect } from 'react';

// Define the event type for beforeinstallprompt as it's not a standard TS lib type
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallPWA: React.FC = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setInstallPrompt(promptEvent);

      const promptShown = localStorage.getItem('pwaInstallPromptShown');
      if (!promptShown) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      return;
    }
    // The user has clicked the install button
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User accepted the PWA installation');
    } else {
      console.log('User dismissed the PWA installation');
    }
    setInstallPrompt(null);
    setIsVisible(false);
    localStorage.setItem('pwaInstallPromptShown', 'true');
  };

  const handleDismissClick = () => {
    setIsVisible(false);
    localStorage.setItem('pwaInstallPromptShown', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
        className="fixed bottom-20 md:bottom-6 right-6 left-6 md:left-auto max-w-md bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl p-4 z-50 animate-fade-in-up"
        role="dialog"
        aria-labelledby="pwa-install-title"
        aria-describedby="pwa-install-description"
        style={{ animationDelay: '2s' }} // Delay the prompt slightly
    >
        <div className="flex items-start gap-4">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1763196923876_logo_carrera_400x400.png?alt=media&token=c50ce165-3dfc-475f-a931-57b2e8f5ce7c" 
                alt="App Logo"
                className="h-12 w-12 rounded-lg shadow-sm"
            />
            <div className="flex-1">
                <h3 id="pwa-install-title" className="font-bold text-gray-800">Instala la Guía del Corredor</h3>
                <p id="pwa-install-description" className="text-sm text-gray-600 mt-1">Accede rápido y sin conexión. ¡Añádela a tu pantalla de inicio!</p>
            </div>
             <button 
                onClick={handleDismissClick}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-2 -mr-2"
                aria-label="Cerrar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div className="mt-4 flex justify-end gap-3">
            <button 
                onClick={handleDismissClick}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
                Más tarde
            </button>
            <button 
                onClick={handleInstallClick}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
                Instalar
            </button>
        </div>
    </div>
  );
};

export default InstallPWA;