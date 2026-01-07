import React from 'react';

export const FeatureOverlay: React.FC = () => {
  return (
    <div className="fixed top-5 left-5 md:top-10 md:left-10 z-0 text-left pointer-events-none select-none leading-[0.85] font-body font-black tracking-widest">
      <div className="text-[2rem] md:text-[4rem] text-white/10 block">
        FUTURE
      </div>
      <div 
        className="text-[2rem] md:text-[4rem] text-transparent block"
        style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)' }}
      >
        INTERFACE
      </div>
    </div>
  );
};