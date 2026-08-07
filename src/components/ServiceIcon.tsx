import {
    Megaphone,
    Instagram,
    Heart,
    MessageSquare,
    Film,
    Eye,
    Facebook,
    ThumbsUp,
    MessageCircle,
    Rocket,
    Youtube,
    PlayCircle,
    MapPin,
    Star,
    Plane,
    Package,
    Download,
    ShieldCheck,
    Palette,
    LayoutGrid,
    Building2,
    Smartphone,
    Sparkles,
    Globe,
    TrendingUp,
    Apple,
    Code2,
    type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Megaphone,
    Instagram,
    Heart,
    MessageSquare,
    Film,
    Eye,
    Facebook,
    ThumbsUp,
    MessageCircle,
    Rocket,
    Youtube,
    PlayCircle,
    MapPin,
    Star,
    Plane,
    Package,
    Download,
    ShieldCheck,
    Palette,
    LayoutGrid,
    Building2,
    Smartphone,
    Sparkles,
    Globe,
    TrendingUp,
    Apple,
    Code2,
};

type Props = {
    name: string;
    className?: string;
    strokeWidth?: number;
};

export default function ServiceIcon({ name, className, strokeWidth }: Props) {
    const Icon = iconMap[name] ?? Sparkles;
    return <Icon className={className} strokeWidth={strokeWidth} />;
}
