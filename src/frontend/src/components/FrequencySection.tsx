import { Badge } from "@/components/ui/badge";
import { Clock, Lock, Play, Zap } from "lucide-react";
import { motion } from "motion/react";
import { frequencies } from "../data/frequencies";

interface FrequencySectionProps {
  isLoggedIn: boolean;
  isSubscribed: boolean;
  onSubscribeClick: () => void;
}

export default function FrequencySection({
  isLoggedIn,
  isSubscribed,
  onSubscribeClick,
}: FrequencySectionProps) {
  const canPlay = (isPremium: boolean) =>
    !isPremium || (isLoggedIn && isSubscribed);

  return (
    <section id="frequencies" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 mb-4 px-4 py-1.5 text-xs tracking-widest uppercase">
            <Zap className="w-3 h-3 mr-1.5" />
            Audio Therapy
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Hz Frequency <span className="gradient-text">Healing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each frequency is precisely tuned to resonate with your body's
            natural healing mechanisms. From pain relief to spiritual awakening
            — find your frequency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {frequencies.map((freq, i) => (
            <motion.div
              key={freq.id}
              data-ocid={`frequencies.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group relative card-surface rounded-2xl p-5 transition-all duration-300 hover:shadow-glow cursor-pointer"
              style={{ borderColor: "oklch(0.29 0.10 280 / 0.6)" }}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${freq.color} mb-4`}
              >
                <span className="text-foreground font-bold text-sm">
                  {freq.hz} Hz
                </span>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-foreground text-base">
                    {freq.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {freq.subtitle}
                  </p>
                </div>
                {freq.isPremium && (
                  <Badge className="bg-gold/10 text-gold border-gold/30 text-xs">
                    Premium
                  </Badge>
                )}
              </div>
              <ul className="space-y-1 mb-4">
                {freq.benefits.map((b) => (
                  <li
                    key={b}
                    className="text-xs text-muted-foreground flex items-center gap-1.5"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "oklch(0.74 0.12 192 / 0.6)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {freq.duration}
                </div>
                {canPlay(freq.isPremium) ? (
                  <button
                    type="button"
                    data-ocid={`frequencies.play_button.${i + 1}`}
                    className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
                    style={{
                      background: "oklch(0.74 0.12 192 / 0.2)",
                      borderColor: "oklch(0.74 0.12 192 / 0.3)",
                    }}
                  >
                    <Play className="w-3.5 h-3.5 text-teal-400 ml-0.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    data-ocid={`frequencies.lock_button.${i + 1}`}
                    onClick={onSubscribeClick}
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-border/50 transition-all hover:border-teal-500/40"
                  >
                    <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                )}
              </div>
              {freq.isPremium && !canPlay(freq.isPremium) && (
                <div
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "oklch(0.10 0.03 280 / 0.75)",
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <Lock className="w-6 h-6 text-teal-400 mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    Premium Content
                  </p>
                  <button
                    type="button"
                    data-ocid={`frequencies.subscribe_button.${i + 1}`}
                    onClick={onSubscribeClick}
                    className="mt-3 text-xs text-teal-400 border border-teal-500/40 rounded-full px-3 py-1 hover:bg-teal-500/10 transition-colors"
                  >
                    Subscribe to Access
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
