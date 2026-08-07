import { categories } from "@/data/services";
import ServiceAccordionItem from "./ServiceAccordionItem";

export default function ServicesSection() {
    let counter = 0;

    return (
        <section id="services" className="mx-auto max-w-3xl px-3 pb-10 sm:px-6 sm:pb-16">
            <div className="space-y-8 sm:space-y-10">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="mb-3 border-l-[3px] border-l-accent pl-3 sm:mb-4 sm:pl-4">
                            <h2 className="font-display text-base font-semibold text-foreground sm:text-2xl">
                                {category.title}
                            </h2>
                            <p className="mt-0.5 text-[12px] text-muted sm:text-sm">
                                {category.description}
                            </p>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                            {category.services.map((service) => {
                                counter += 1;
                                return (
                                    <ServiceAccordionItem
                                        key={service.id}
                                        service={service}
                                        index={counter}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
