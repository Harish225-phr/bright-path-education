import { GraduationCap } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="relative mb-4">
        <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-2xl bg-primary">
          <GraduationCap className="h-12 w-12 text-primary-foreground" />
        </div>
        <div className="absolute -inset-4 animate-ping rounded-full border-2 border-primary/20" />
      </div>
      <h2 className="animate-pulse font-heading text-xl font-bold text-foreground">Bright Path Education</h2>
      <p className="mt-2 animate-pulse text-sm text-muted-foreground">Preparing for a bright future...</p>
      <div className="mt-8 h-1.5 w-48 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-full origin-left animate-[loading_1.5s_ease-in-out_infinite] bg-primary" />
      </div>
    </div>
  );
};

export default PageLoader;
