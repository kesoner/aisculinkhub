import React from 'react';

interface FooterProps {
  email: string;
}

export const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <footer className="mt-20 font-tech text-[0.85rem] text-[#556677] tracking-widest border-t border-white/5 pt-5 w-full leading-relaxed">
      <span className="block text-primary/80 font-bold mb-1 drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]">
        {email}
      </span>
      SYSTEM.ONLINE // AISCU © {new Date().getFullYear()}
    </footer>
  );
};