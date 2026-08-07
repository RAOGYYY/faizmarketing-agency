import { MessageCircle } from "lucide-react";
import { getWhatsAppLink, siteConfig } from "@/data/config";

export default function WhatsAppFloatingButton() {
    return (
        <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp par contact karein ${siteConfig.whatsappDisplay}`}
            className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95 sm:bottom-5 sm:right-6 sm:h-14 sm:w-14"
        >
            <MessageCircle className="h-6 w-6 shrink-0" fill="currentColor" strokeWidth={0} />
        </a>
    );
}
