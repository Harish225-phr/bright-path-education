import { useSiteContent } from "./SiteContentProvider";
import { Megaphone } from "lucide-react";

const NewsTicker = () => {
  const { content } = useSiteContent();
  const announcements = content.announcementsList ?? [];

  if (announcements.length === 0) return null;

  return (
    <div className="relative z-[60] flex h-10 w-full items-center overflow-hidden bg-primary px-4 text-primary-foreground">
      <div className="container mx-auto flex items-center">
        <div className="z-10 flex shrink-0 items-center gap-2 bg-primary pr-4 text-sm font-bold uppercase tracking-wider">
          <Megaphone className="h-4 w-4" />
          <span>Latest News:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-1">
            {announcements.map((item, idx) => (
              <span key={idx} className="mx-8 text-sm font-medium">
                • {item.title}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {announcements.map((item, idx) => (
              <span key={`dup-${idx}`} className="mx-8 text-sm font-medium">
                • {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
