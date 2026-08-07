import { MessageCircle, Phone } from "lucide-react";
import { getWhatsAppLink, getCallLink, siteConfig } from "@/data/config";

export default function WhatsAppFloatingButton() {
    return (
        <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-5 sm:right-6 sm:gap-2.5">
            <a
                href={getCallLink()}
                aria-label={`Call karein ${siteConfig.callDisplay}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-contrast shadow-md shadow-accent/25 transition-transform hover:scale-105 active:scale-95 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
            >
                <Phone className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                <span className="hidden text-[13px] font-semibold sm:inline">Call Now</span>
            </a>

            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp par contact karein ${siteConfig.whatsappDisplay}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/25 transition-transform hover:scale-105 active:scale-95 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
            >
                <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" strokeWidth={0} />
                <span className="hidden text-[13px] font-semibold sm:inline">WhatsApp</span>
            </a>
        </div>
    );
}
