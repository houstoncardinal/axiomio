// ParticleField component - disabled for performance
// Using CSS-only background effects instead

export function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static gradient dots using CSS for better performance */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.2) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, hsl(var(--primary) / 0.25) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 80px 80px',
        }}
      />
    </div>
  );
}
