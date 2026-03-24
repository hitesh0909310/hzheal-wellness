import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Lock } from "lucide-react";
import { motion } from "motion/react";
import { wellnessArticles } from "../data/frequencies";

interface WellnessSectionProps {
  isLoggedIn: boolean;
  isSubscribed: boolean;
  onSubscribeClick: () => void;
}

const catColors: Record<string, string> = {
  Breathwork: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Sleep: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Meditation: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  "Stress Relief": "bg-orange-500/10 text-orange-400 border-orange-500/30",
};

export default function WellnessSection({
  isLoggedIn,
  isSubscribed,
  onSubscribeClick,
}: WellnessSectionProps) {
  const canAccess = (isPremium: boolean) =>
    !isPremium || (isLoggedIn && isSubscribed);

  return (
    <section id="wellness" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 mb-4 px-4 py-1.5 text-xs tracking-widest uppercase">
            <BookOpen className="w-3 h-3 mr-1.5" />
            Wellness Library
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mind & Body <span className="gradient-text">Wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Science-backed protocols and ancient wisdom for complete mind-body
            healing.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {wellnessArticles.map((article, i) => (
            <motion.div
              key={article.id}
              data-ocid={`wellness.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative card-surface rounded-2xl p-6 transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge
                  className={`text-xs ${catColors[article.category] || "bg-muted text-muted-foreground"}`}
                >
                  {article.category}
                </Badge>
                <div className="flex items-center gap-2">
                  {article.isPremium && (
                    <Badge className="bg-gold/10 text-gold border-gold/30 text-xs">
                      Premium
                    </Badge>
                  )}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {article.description}
              </p>
              {article.isPremium && !canAccess(article.isPremium) && (
                <div
                  className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "oklch(0.10 0.03 280 / 0.75)",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  <Lock className="w-8 h-8 text-teal-400 mb-3" />
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Premium Content
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Subscribe to unlock full access
                  </p>
                  <button
                    type="button"
                    data-ocid={`wellness.subscribe_button.${i + 1}`}
                    onClick={onSubscribeClick}
                    className="text-xs text-teal-400 border border-teal-500/40 rounded-full px-4 py-1.5 hover:bg-teal-500/10 transition-colors"
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
