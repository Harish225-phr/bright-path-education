import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useSiteContent } from "./SiteContentProvider";

const contactIcons = [MapPin, Phone, Mail, Clock];

const ContactSection = () => {
  const { content } = useSiteContent();

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{content.contact.eyebrow}</span>
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground md:text-4xl">
              {content.contact.title}
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <ScrollReveal>
            <div className="space-y-6">
              {content.contact.details.map((item, index) => {
                const Icon = contactIcons[index] ?? MapPin;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src={content.contact.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
                className="rounded-xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
