import { categories } from "@/data/services";
import ServiceAccordionItem from "./ServiceAccordionItem";

export default function ServicesSection() {
    let counter = 0;

    return (
        <section id="services" className="mx-auto max-w-3xl px-3.5 pb-10 sm:px-6 sm:pb-16">
            <div className="space-y-7 sm:space-y-10">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="mb-2.5 rounded-lg bg-accent px-3 py-2.5 sm:mb-4 sm:px-4 sm:py-3">
                            <h2 className="text-[15px] font-semibold text-accent-contrast sm:text-lg">
                                {category.title}
                            </h2>
                            <p className="mt-0.5 text-[12px] text-accent-contrast/80 sm:text-sm">
                                {category.description}
                            </p>
                        </div>

                        <div className="space-y-1.5 sm:space-y-3">
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
