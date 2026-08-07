import { categories } from "@/data/services";
import ServiceAccordionItem from "./ServiceAccordionItem";

export default function ServicesSection() {
    let counter = 0;

    return (
        <section
            id="services"
            className="mx-auto max-w-3xl scroll-mt-20 px-4 py-12 sm:px-6 sm:py-16"
        >
            <div className="mb-10 text-center sm:mb-12">
                <h2 className="font-display text-2xl font-semibold text-foreground sm:text-4xl">
                    Hamari Services
                </h2>
                <div className="accent-rule mx-auto my-4 w-20" />
                <p className="text-[13px] text-muted sm:text-base">
                    Kisi bhi service par tap karein aur uski poori jankari dekhein.
                </p>
            </div>

            <div className="space-y-10 sm:space-y-12">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div className="mb-4 border-l-[3px] border-l-accent pl-3.5 sm:mb-5 sm:pl-4">
                            <h3 className="font-display text-lg font-semibold text-foreground sm:text-2xl">
                                {category.title}
                            </h3>
                            <p className="mt-1 text-xs text-muted sm:text-sm">
                                {category.description}
                            </p>
                        </div>

                        <div className="space-y-2.5 sm:space-y-3">
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
