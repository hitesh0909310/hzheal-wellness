import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const AVATAR_COLORS = [
  "oklch(0.75 0.12 160)",
  "oklch(0.65 0.15 295)",
  "oklch(0.70 0.10 220)",
  "oklch(0.80 0.12 80)",
];

const WAVE_HEIGHTS = [8, 14, 10, 16, 8, 12, 10];

interface HeroSectionProps {
  isLoggedIn: boolean;
  onScrollTo: (section: string) => void;
  onLoginAndSubscribe: () => void;
}

export default function HeroSection({
  onScrollTo,
  onLoginAndSubscribe,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "oklch(0.45 0.18 285 / 0.12)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "oklch(0.74 0.12 192 / 0.08)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase">
                  <Sparkles className="w-3 h-3 mr-1.5" />
                  Sound Frequency Healing
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                Heal Your Mind
                <br />
                <span className="gradient-text">with Hz Frequencies</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-lg"
              >
                Harness the ancient power of Solfeggio frequencies and modern
                sound science. Reduce stress, heal at a cellular level, and
                awaken your highest potential through precisely tuned Hz audio
                therapy.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                data-ocid="hero.primary_button"
                size="lg"
                onClick={onLoginAndSubscribe}
                className="bg-teal-500 hover:bg-teal-400 text-[oklch(0.10_0.03_280)] font-bold px-8 h-12 text-base transition-all hover:scale-105"
                style={{ boxShadow: "0 0 24px oklch(0.74 0.12 192 / 0.25)" }}
              >
                Start Your Journey
                <ChevronRight className="ml-1 w-5 h-5" />
              </Button>
              <Button
                data-ocid="hero.secondary_button"
                size="lg"
                variant="outline"
                onClick={() => onScrollTo("frequencies")}
                className="border-teal-500/40 text-teal-400 hover:bg-teal-500/10 h-12 text-base px-8"
              >
                <Play className="mr-2 w-4 h-4" />
                Explore Frequencies
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6 pt-2"
            >
              <div className="flex -space-x-2">
                {AVATAR_COLORS.map((color) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border-2 border-background"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">12,000+</span>{" "}
                members healing daily
              </p>
              <div className="flex gap-0.5">
                {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                  <span key={k} className="text-gold text-sm">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "oklch(0.45 0.18 285 / 0.2)",
                  filter: "blur(40px)",
                  transform: "scale(0.9)",
                }}
              />
              <img
                src="/assets/generated/hero-meditation.dim_800x900.jpg"
                alt="Woman meditating with healing frequencies"
                className="relative rounded-3xl w-full object-cover shadow-2xl"
                style={{ maxHeight: "560px", objectPosition: "center top" }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute -left-6 top-1/4 card-surface rounded-2xl p-4"
                style={{ boxShadow: "0 4px 32px oklch(0.10 0.03 280 / 0.6)" }}
              >
                <div className="text-xs text-muted-foreground mb-1">
                  Active Session
                </div>
                <div className="text-lg font-bold text-teal-500">528 Hz</div>
                <div className="flex gap-0.5 mt-2 items-end">
                  {WAVE_HEIGHTS.map((h) => (
                    <div
                      key={h}
                      className="w-1 rounded-full"
                      style={{
                        height: `${h}px`,
                        background: "oklch(0.74 0.12 192)",
                        animation: "wave 1.2s ease-in-out infinite",
                        animationDelay: "0s",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -right-6 bottom-1/3 card-surface rounded-2xl p-4"
                style={{ boxShadow: "0 4px 32px oklch(0.10 0.03 280 / 0.6)" }}
              >
                <div className="text-xs text-muted-foreground mb-1">
                  Stress Reduced
                </div>
                <div className="text-2xl font-bold text-foreground">73%</div>
                <div className="text-xs text-teal-400 mt-1">
                  ↓ Cortisol levels
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
