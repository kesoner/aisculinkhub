import { AppConfig } from './types';
import { Instagram, Facebook, Mail, UserCog, Users, Globe } from 'lucide-react';

export const CONFIG: AppConfig = {
    avatarUrl: "/asc_logo.png",
    title: "AISCU",
    subtitle: "人工智慧應用社",
    bio: "我們是東吳大學人工智慧應用社⚡<br/>社團內會舉辦工作坊、知識課程、競賽活動<br/>無論您是否有程式基礎都期待您的加入唷~🎉",
    email: "ai.scu.club@gmail.com",
    logoUrl: "/asc_logo.png",
    socials: [
        { label: "Instagram", url: "https://www.instagram.com/ai.scu.club?igsh=d3BjbXZkOXV4aDVv", icon: Instagram },
        { label: "Facebook", url: "https://facebook.com", icon: Facebook },
        { label: "Email", url: "mailto:ai.scu.club@gmail.com", icon: Mail },
    ],
    links: [
        { text: "幹部招新報名", url: "https://docs.google.com/forms/d/e/1FAIpQLSfnkHfvOLFiH-3pyjaS1v2Qnjvl2ZqBic2Dv77aILmh6T-Pcg/viewform?usp=publish-editor", icon: UserCog },
        { text: "社員招募中", url: "https://docs.google.com/forms/d/1ay2Fw2vN8Kc3o4FLRilh-_wHl3siAidyi8yPz-qLw8I/edit", icon: Users },
        { text: "官方網站", url: "https://aiscu.zeabur.app/", icon: Globe },
        { text: "聯絡我們", url: "mailto:ai.scu.club@gmail.com", icon: Mail }
    ]
};