import { Users, Award, Clock, Trophy } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useSiteContent } from "./SiteContentProvider";

const statIcons = [Users, Award, Clock, Trophy];

const HeroSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={content.hero.backgroundImageUrl || heroBg}
        alt="Happy school students"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="container relative mx-auto px-4 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            🎓 {content.hero.badge}
          </span>
          <h1 className="animate-fade-up-delay-1 mb-6 font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
            {content.hero.title}
          </h1>
          <p className="animate-fade-up-delay-2 mb-8 text-lg text-primary-foreground/85 md:text-xl">
            {content.hero.subtitle}
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={content.hero.primaryCtaHref}
              className="rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105"
            >
              {content.hero.primaryCtaLabel}
            </a>
            <a
              href={content.hero.secondaryCtaHref}
              className="rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-transform hover:scale-105"
            >
              {content.hero.secondaryCtaLabel}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {content.hero.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? Users;

            return (
              <div
                key={stat.label}
                className="animate-fade-up rounded-xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <Icon className="mx-auto mb-2 h-7 w-7 text-secondary" />
                <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/75">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
