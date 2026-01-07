import React from 'react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  socials: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ socials }) => {
  return (
    <div className="flex justify-center gap-10 md:gap-[50px] mb-6 md:mb-10 w-full">
      {socials.map((item, idx) => (
        <a 
          key={idx}
          href={item.url}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-transparent border-none text-white/60 text-[1.5rem] md:text-[2rem] no-underline transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-primary hover:drop-shadow-[0_0_10px_#00f0ff]"
          aria-label={item.label}
        >
          <item.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
        </a>
      ))}
    </div>
  );
};