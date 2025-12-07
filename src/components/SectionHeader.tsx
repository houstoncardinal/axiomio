import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ label, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      {label && (
        <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
