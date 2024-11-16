import React, { useEffect, useState } from 'react';

export function MeasurementAnimation() {
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animate = () => {
      setIsAnimating(true);
      let current = 0;
      const target = 100;
      const step = 2;
      const interval = setInterval(() => {
        current += step;
        setPosition(current);
        if (current >= target) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnimating(false);
            setTimeout(() => {
              setPosition(0);
              animate();
            }, 1000);
          }, 1000);
        }
      }, 50);
    };

    animate();
    return () => setIsAnimating(false);
  }, []);

  return (
    <div className="absolute top-20 right-0 w-[400px] rotate-[30deg] pointer-events-none select-none">
      <div className="relative">
        {/* Ana Kumpas Gövdesi */}
        <div className="h-20 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg shadow-lg relative">
          {/* Hareketli Kısım */}
          <div 
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-gray-300 to-gray-200 transition-all duration-100 ease-linear rounded-l-lg border-r border-gray-400"
            style={{ transform: `translateX(${position}%)` }}
          >
            {/* Dijital Ekran */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-3 py-1 rounded">
              <span className="font-mono text-green-500 text-lg">
                {(position / 10).toFixed(1)} mm
              </span>
            </div>
          </div>

          {/* Ölçek Çizgileri */}
          <div className="absolute top-0 left-0 w-full h-2 flex">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 border-r border-gray-400 h-full"
              />
            ))}
          </div>
        </div>

        {/* Gölge Efekti */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
}