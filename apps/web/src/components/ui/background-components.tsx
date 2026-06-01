import { cn } from "@/lib/utils";

/**
 * LabBackground
 *
 * A flat, single-color page background for the Bioclinic site.
 * No gradients, no glassmorphism, no glow/blur. One base color
 * (#FAF9F9) with an optional, very faint single-accent dot grid so
 * empty bands read as an intentional surface rather than dead space.
 *
 * Render once near the top of the page as a fixed layer behind content.
 */
export const LabBackground = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={cn("fixed inset-0 -z-10 bg-[#FAF9F9]", className)}
    >
      {/* Single-accent dot grid — flat texture, no color transition */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(16,185,129,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
};

// Keep the shadcn integration entry point (`Component`) available.
export const Component = LabBackground;

export default LabBackground;
