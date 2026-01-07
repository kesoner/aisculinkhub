import { AppConfig } from './types';
import { Instagram, Facebook, Mail, UserCog, Users, Globe } from 'lucide-react';

export const CONFIG: AppConfig = {
    avatarUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop",
    title: "AISCU",
    subtitle: "人工智慧應用社",
    bio: "我們是東吳大學人工智慧應用社⚡<br/>社團內會舉辦工作坊、知識課程、競賽活動<br/>無論您是否有程式基礎都期待您的加入唷~🎉",
    email: "ai.scu.club@gmail.com",
    socials: [
        { label: "Instagram", url: "https://www.instagram.com/ai.scu.club?igsh=d3BjbXZkOXV4aDVv", icon: Instagram },
        { label: "Facebook", url: "https://facebook.com", icon: Facebook },
        { label: "Email", url: "mailto:ai.scu.club@gmail.com", icon: Mail },
    ],
    links: [
        { text: "幹部招新報名", url: "#", icon: UserCog },
        { text: "社員招募中", url: "#", icon: Users },
        { text: "官方網站", url: "#", icon: Globe },
        { text: "聯絡我們", url: "mailto:ai.scu.club@gmail.com", icon: Mail }
    ]
};