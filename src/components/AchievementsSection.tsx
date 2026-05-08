import ScrollReveal from "./ScrollReveal";
import { Medal, BarChart3, Trophy } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const achievementIcons = [BarChart3, Medal, Trophy];

const AchievementsSection = () => {
  const { content } = useSiteContent();

  return (
    <section className="section-padding section-light">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.achievements.eyebrow}</span>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.achievements.title}
            </h2>
          </div>
        </ScrollReveal>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {content.achievements.items.map((achievement, index) => {
            const Icon = achievementIcons[index] ?? BarChart3;

            return (
              <ScrollReveal key={achievement.title} delay={index * 100}>
                <div className="gradient-primary rounded-xl p-6 text-center text-primary-foreground">
                  <Icon className="mx-auto mb-4 h-10 w-10" />
                  <h3 className="mb-2 font-heading text-xl font-bold">{achievement.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{achievement.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
