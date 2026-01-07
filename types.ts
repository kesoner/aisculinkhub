import { LucideIcon } from 'lucide-react';

export interface SocialLink {
    url: string;
    icon: LucideIcon;
    label: string;
}

export interface MainLink {
    text: string;
    url: string;
    icon: LucideIcon;
}

export interface AppConfig {
    avatarUrl: string;
    title: string;
    subtitle?: string;
    logoUrl?: string;
    bio: string;
    email: string;
    socials: SocialLink[];
    links: MainLink[];
}