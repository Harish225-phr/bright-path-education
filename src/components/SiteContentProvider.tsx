import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isSanityConfigured, sanityClient } from "@/lib/sanity";
import { defaultSiteContent, mergeSiteContent, siteContentQuery, type SiteContent } from "@/lib/siteContent";

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
        const data = await sanityClient.fetch<Partial<SiteContent> | null>(siteContentQuery);
        if (!cancelled) {
          setContent(mergeSiteContent(data));
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
