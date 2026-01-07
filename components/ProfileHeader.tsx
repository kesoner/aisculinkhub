import React from 'react';

interface ProfileHeaderProps {
  avatarUrl: string;
  title: string;
  subtitle?: string;
  bio: string;
  logoUrl?: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatarUrl, title, subtitle, bio, logoUrl }) => {
  return (
    <div className="mb-[15px] md:mb-[30px] relative flex flex-col items-center w-full">
      {/* Avatar Container - Even smaller on mobile */}
      <div className="relative w-[64px] h-[64px] md:w-[120px] md:h-[120px] mb-4 md:mb-8 flex justify-center items-center">
        {/* Outer Ring */}
        <div className="absolute -top-[4px] -left-[4px] md:-top-[10px] md:-left-[10px] w-[calc(100%+8px)] h-[calc(100%+8px)] md:w-[calc(100%+20px)] md:h-[calc(100%+20px)] rounded-full border-2 border-primary border-l-transparent border-r-transparent animate-[spin_60s_linear_infinite] shadow-[0_0_15px_#00f0ff]"></div>
        
        {/* Inner Dashed Ring */}
        <div className="absolute inset-[2px] md:inset-[5px] rounded-full border border-dashed border-secondary animate-[spin_40s_linear_infinite_reverse] opacity-80"></div>
        
        {/* Image */}
        <img 
          src={avatarUrl} 
          alt="Avatar" 
          className="w-full h-full rounded-full bg-black object-cover relative z-10 border-2 border-bg"
        />
      </div>

      {/* Glitch Title Text - Significantly smaller on mobile */}
      <div className="relative mb-0.5">
        <h1 
          className="font-body text-[2rem] md:text-[4.5rem] font-black uppercase tracking-[4px] md:tracking-[8px] text-white glitch-text leading-none select-none"
          data-text={title}
        >
          {title}
        </h1>
        {/* Decorative glitches */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
           <div className="absolute top-[20%] left-[-2px] w-[105%] h-[1px] bg-secondary animate-pulse"></div>
           <div className="absolute bottom-[30%] right-[-2px] w-[105%] h-[1px] bg-primary animate-pulse animation-delay-500"></div>
        </div>
      </div>

      {/* Subtitle Box - More compact on mobile */}
      {subtitle && (
        <div className="relative mt-1 mb-3 group">
            <div className="relative px-3 py-1 md:px-6 md:py-2 bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent border-y border-[#00f0ff]/30 backdrop-blur-sm">
                <span className="font-body text-[0.8rem] md:text-[1.1rem] font-bold text-white tracking-[2px] md:tracking-[4px] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                    {subtitle}
                </span>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-1/4 w-1 h-1 bg-primary"></div>
                <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-primary"></div>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gradient-to-b from-transparent to-primary/50"></div>
        </div>
      )}

      {/* Bio - Tighter spacing and smaller text for mobile */}
      <p 
        className="font-tech text-[0.8rem] md:text-[1rem] text-[#aaccff]/80 mt-[2px] tracking-wide md:tracking-widest leading-relaxed max-w-[95%] md:max-w-[90%]"
        dangerouslySetInnerHTML={{ __html: bio }}
      />
    </div>
  );
};