// components/ui/GlassCard.tsx
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {/* Frosted glass base */}
      <div className="absolute inset-0  " />
      {/* Top light shimmer — gives the glassy rim */}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent" />
      {/* Border */}
      <div className="absolute inset-0 rounded-xl border border-white/25" />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}