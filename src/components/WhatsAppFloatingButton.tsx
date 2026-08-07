import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink, getCallLink, siteConfig } from "@/data/config";

export default function WhatsAppFloatingButton() {
    return (
        <div className="fixed bottom-5 right-3 z-50 flex flex-col items-end gap-2.5 sm:right-6">
            <a
                href={getCallLink()}
                aria-label={`Call karein ${siteConfig.callDisplay}`}
                className="flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-[13px] font-semibold text-accent-contrast shadow-lg shadow-accent/25 transition-transform hover:scale-105 active:scale-95"
            >
                <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                Call Now
            </a>

            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp par contact karein ${siteConfig.whatsappDisplay}`}
                className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[13px] font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:scale-105 active:scale-95"
            >
                <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                WhatsApp
            </a>
        </div>
    );
}
