import type { CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/services";
import ServiceAccordionItem from "./ServiceAccordionItem";
import ServiceIcon from "./ServiceIcon";

export default function ServicesSection() {
    let counter = 0;

    return (
        <section id="services" className="mx-auto max-w-3xl px-3.5 pb-10 sm:px-6 sm:pb-16">
            <div className="space-y-4 sm:space-y-6">
                {categories.map((category, categoryIndex) => {
                    // Only the first category starts expanded; the rest are
                    // collapsed and open when their header is tapped.
                    const startOpen = categoryIndex === 0;
                    const startIndex = counter;
                    counter += category.services.length;

                    const headerVars = {
                        "--cat": category.color[0],
                        "--cat-2": category.color[1],
                    } as CSSProperties;

                    return (
                        <details key={category.id} className="group" open={startOpen}>
                            <summary
                                className="cat-header flex cursor-pointer list-none items-center gap-3 rounded-lg px-3 py-2.5 shadow-sm [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-4 sm:py-3.5"
                                style={headerVars}
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white sm:h-11 sm:w-11">
                                    <ServiceIcon
                                        name={category.icon}
                                        className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                                        strokeWidth={2.2}
                                    />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <h2 className="text-[15px] font-semibold text-white sm:text-lg">
                                        {category.title}
                                    </h2>
                                    <p className="mt-0.5 text-[12px] text-white/85 sm:text-sm">
                                        {category.description}
                                    </p>
                                </span>

                                <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-open:rotate-180" />
                            </summary>

                            <div className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-3">
                                {category.services.map((service, serviceIndex) => (
                                    <ServiceAccordionItem
                                        key={service.id}
                                        service={service}
                                        index={startIndex + serviceIndex + 1}
                                    />
                                ))}
                            </div>
                        </details>
                    );
                })}
            </div>
        </section>
    );
}
