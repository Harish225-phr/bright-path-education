import ScrollReveal from "./ScrollReveal";
import { BookOpen, Target, Heart } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const aboutIcons = [BookOpen, Target, Heart];

const AboutSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.about.eyebrow}</span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.about.title}
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">
              {content.about.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {content.about.highlights.map((item, index) => {
            const Icon = aboutIcons[index] ?? BookOpen;

            return (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="card-shadow rounded-xl bg-card p-6 text-center transition-all duration-300 hover:card-shadow-hover hover:-translate-y-1">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
