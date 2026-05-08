import ScrollReveal from "./ScrollReveal";
import { Baby, BookOpen, Layers, GraduationCap } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const programIcons = [Baby, BookOpen, Layers, GraduationCap];
const programColors = ["bg-secondary/20 text-secondary-foreground", "bg-primary/10 text-primary", "bg-accent/10 text-accent", "bg-destructive/10 text-destructive"];

const ProgramsSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="programs" className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.programs.eyebrow}</span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.programs.title}
            </h2>
            <p className="text-muted-foreground">{content.programs.description}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.programs.items.map((prog, index) => {
            const Icon = programIcons[index] ?? BookOpen;

            return (
              <ScrollReveal key={prog.title} delay={index * 100}>
                <div className="group card-shadow rounded-xl bg-card p-6 transition-all duration-300 hover:card-shadow-hover hover:-translate-y-2">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${programColors[index] ?? programColors[0]}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{prog.title}</h3>
                  <p className="text-sm text-muted-foreground">{prog.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
