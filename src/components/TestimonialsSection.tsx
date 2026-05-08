import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const TestimonialsSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.testimonials.eyebrow}</span>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.testimonials.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {content.testimonials.items.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 100}>
              <div className="card-shadow rounded-xl bg-card p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, ratingIndex) => (
                    <Star key={ratingIndex} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-muted-foreground">"{testimonial.text}"</p>
                <div>
                  <div className="font-heading text-sm font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
