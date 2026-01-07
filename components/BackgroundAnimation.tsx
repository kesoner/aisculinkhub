import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-start md:items-center pointer-events-none z-0 select-none overflow-hidden">
        <svg
            viewBox="0 0 1000 1000"
            className="w-[180vmin] h-[180vmin] md:w-[130vmin] md:h-[130vmin] opacity-70 mt-[-45vmin] md:mt-0"
        >
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <linearGradient id="scan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="center-fade">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                </radialGradient>
            </defs>

            {/* Static Layer: Crosshair and Text HUD */}
            <g opacity="0.4">
                <line x1="0" y1="500" x2="1000" y2="500" stroke="#00f0ff" strokeWidth="0.5" />
                <line x1="500" y1="0" x2="500" y2="1000" stroke="#00f0ff" strokeWidth="0.5" />
                <circle cx="500" cy="500" r="498" fill="none" stroke="#00f0ff" strokeWidth="0.5" strokeDasharray="4 4" />
                
                {/* HUD Data */}
                <text x="820" y="490" fill="#00f0ff" fontSize="10" fontFamily="monospace" letterSpacing="2">ERR_CODE:0X9</text>
                <text x="120" y="490" fill="#00f0ff" fontSize="10" fontFamily="monospace" letterSpacing="2">SYS.READY</text>
                <text x="510" y="900" fill="#00f0ff" fontSize="10" fontFamily="monospace" letterSpacing="2" opacity="0.7">COORD: 42.11 / 11.23</text>
                <text x="400" y="100" fill="#00f0ff" fontSize="8" fontFamily="monospace" opacity="0.5">BUFFER: OK</text>
            </g>

            {/* Layer 1: Outer Scale Ring (Slow CW) */}
            <g className="animate-[spin_120s_linear_infinite]">
                 <circle cx="500" cy="500" r="480" fill="none" stroke="#00f0ff" strokeWidth="4" strokeDasharray="2 48.26" opacity="0.3" />
                 <circle cx="500" cy="500" r="475" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.1" />
            </g>

            {/* Layer 2: Thick Glowing Arcs (Medium CW - Main Feature) */}
            <g className="animate-[spin_60s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                <circle cx="500" cy="500" r="450" fill="none" stroke="#00f0ff" strokeWidth="8" strokeDasharray="200 507" opacity="0.3" filter="url(#glow)" />
                <circle cx="500" cy="500" r="435" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="100 100" opacity="0.3" />
            </g>
            
            {/* Layer 3: NEW Data Stream Ring (Medium CW - Complex dashes) */}
            <g className="animate-[spin_45s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                <circle cx="500" cy="500" r="410" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="10 20 5 30 2 10 50 20" opacity="0.25" />
            </g>

            {/* Layer 4: NEW Floating Brackets (Very Slow CW) */}
            <g className="animate-[spin_180s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                 <path d="M350 330 L330 330 L330 350" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.4" />
                 <path d="M650 330 L670 330 L670 350" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.4" />
                 <path d="M650 670 L670 670 L670 650" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.4" />
                 <path d="M350 670 L330 670 L330 650" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.4" />
            </g>

            {/* Layer 5: Radar Scan Effect (Fast Spin) */}
            <g className="animate-[spin_8s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                <path d="M500 500 L500 100 A400 400 0 0 1 900 500 Z" fill="url(#center-fade)" opacity="0.1" transform="rotate(-45 500 500)" />
            </g>

            {/* Layer 6: Counter-Rotating Mechanical Ring (Slow CCW) */}
            <g className="animate-[spin_40s_linear_infinite_reverse]" style={{ transformOrigin: '500px 500px' }}>
                <circle cx="500" cy="500" r="350" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />
                
                {/* Mechanical Ticks */}
                {[...Array(8)].map((_, i) => (
                    <rect 
                        key={`tick-${i}`} 
                        x="496" 
                        y="140" 
                        width="8" 
                        height="20" 
                        fill="#00f0ff" 
                        transform={`rotate(${i * 45} 500 500)`} 
                        opacity="0.5"
                    />
                ))}
                
                <circle cx="500" cy="500" r="320" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="10 30" opacity="0.2" />
            </g>
            
            {/* Layer 7: NEW Segmented Dashed Arc (Variable Speed) */}
            <g className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '500px 500px' }}>
                <path d="M500 180 A320 320 0 0 1 820 500" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" />
                <path d="M500 820 A320 320 0 0 1 180 500" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" />
            </g>

            {/* Layer 8: Inner Octagon & Geometry (Very Slow CW) */}
            <g className="animate-[spin_100s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                <polygon points="500,250 676,323 750,500 676,676 500,750 323,676 250,500 323,323" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.15" />
                <circle cx="500" cy="500" r="250" fill="none" stroke="#ff003c" strokeWidth="1" strokeDasharray="40 40" opacity="0.1" />
            </g>

            {/* Layer 9: Inner Fast Ring (Fast CW) */}
            <g className="animate-[spin_20s_linear_infinite]" style={{ transformOrigin: '500px 500px' }}>
                 <path d="M500 200 A300 300 0 0 1 800 500" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />
                 <path d="M500 800 A300 300 0 0 1 200 500" fill="none" stroke="#00f0ff" strokeWidth="1" opacity="0.2" />
                 
                 <circle cx="500" cy="500" r="180" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="2 10" opacity="0.4" />
            </g>

            {/* Layer 10: Orbiting Nodes (Fast CCW) */}
            <g className="animate-[spin_15s_linear_infinite_reverse]" style={{ transformOrigin: '500px 500px' }}>
                <circle cx="500" cy="120" r="4" fill="#00f0ff" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                 <circle cx="500" cy="880" r="4" fill="#00f0ff" opacity="0.6" />
                 <circle cx="120" cy="500" r="4" fill="#00f0ff" opacity="0.6" />
                 <circle cx="880" cy="500" r="4" fill="#00f0ff" opacity="0.6" />
            </g>
            
            {/* Layer 11: NEW Pulsing Core Ring */}
            <g>
                <circle cx="500" cy="500" r="80" fill="none" stroke="#00f0ff" strokeWidth="2" opacity="0.3">
                    <animate attributeName="r" values="80;85;80" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Center Target */}
            <g>
                <circle cx="500" cy="500" r="50" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.4" />
                <path d="M480 500 L520 500 M500 480 L500 520" stroke="#00f0ff" strokeWidth="1" opacity="0.6" />
                <circle cx="500" cy="500" r="2" fill="#00f0ff" opacity="0.8" />
            </g>
        </svg>
    </div>
  );
};