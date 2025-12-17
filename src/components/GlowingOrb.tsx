// GlowingOrb component - simplified for performance
// Using CSS instead of Framer Motion for better performance

interface GlowingOrbProps {
  size?: number;
  color?: "primary" | "secondary" | "accent";
  className?: string;
  delay?: number;
}

export function GlowingOrb({ 
  size = 600, 
  color = "primary", 
  className = "",
}: GlowingOrbProps) {
  const colorClasses = {
    primary: "bg-primary/15",
    secondary: "bg-secondary/10",
    accent: "bg-accent/10",
  };

  return (
    <div
      className={`absolute rounded-full blur-[120px] ${colorClasses[color]} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
