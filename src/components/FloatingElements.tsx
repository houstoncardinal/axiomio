// FloatingElements component - simplified for performance
// Using CSS animations instead of Framer Motion for better performance

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static geometric shapes with CSS animations */}
      <div
        className="absolute top-1/4 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      
      <div
        className="absolute top-[60%] left-[10%] w-px h-24 bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />

      {/* Static ring */}
      <div className="absolute top-[20%] right-[8%] w-48 h-48 border border-primary/10 rounded-full" />

      {/* Static dots */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${25 + i * 20}%`,
            top: `${35 + (i % 2) * 15}%`,
          }}
        />
      ))}

      {/* Corner accent - static */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20">
        <div
          style={{
            background: "conic-gradient(from 180deg at 100% 0%, transparent 0deg, hsl(var(--primary) / 0.1) 90deg, transparent 180deg)",
          }}
          className="absolute inset-0"
        />
      </div>
    </div>
  );
}
