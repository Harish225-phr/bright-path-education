import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { defaultSiteContent, mergeSiteContent, siteContentQuery, programsListQuery, testimonialsListQuery, galleryImagesQuery, teachersListQuery, eventsListQuery, type SiteContent } from "@/lib/siteContent";

type SiteContentContextValue = {
  content: SiteContent;
  isLoading: boolean;
  isSanityConfigured: boolean;
  error: string | null;
};

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export const SiteContentProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState(defaultSiteContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      return;
    }

    let cancelled = false;

    const loadContent = async () => {
      setIsLoading(true);

      try {
        const [siteData, programs, testimonials, gallery, teachers, events] = await Promise.all([
          sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery),
          sanityClient.fetch<any[]>(programsListQuery),
          sanityClient.fetch<any[]>(testimonialsListQuery),
          sanityClient.fetch<any[]>(galleryImagesQuery),
          sanityClient.fetch<any[]>(teachersListQuery),
          sanityClient.fetch<any[]>(eventsListQuery),
        ]);

        if (!cancelled) {
          const merged = mergeSiteContent(siteData);
          // attach lists if present
          const final = {
            ...merged,
            programsList: programs && programs.length > 0 ? programs : merged.programsList,
            testimonialsList: testimonials && testimonials.length > 0 ? testimonials : merged.testimonialsList,
            galleryImages: gallery && gallery.length > 0 ? gallery : merged.galleryImages,
            teachersList: teachers && teachers.length > 0 ? teachers : merged.teachersList,
            eventsList: events && events.length > 0 ? events : merged.eventsList,
          } as SiteContent;

          setContent(final);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load Sanity content");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    void loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  return <SiteContentContext.Provider value={{ content, isLoading, isSanityConfigured, error }}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);

  if (!context) {
    throw new Error("useSiteContent must be used inside SiteContentProvider");
  }

  return context;
};
