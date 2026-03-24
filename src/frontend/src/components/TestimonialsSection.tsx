import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "../data/frequencies";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 px-4 py-1.5 text-xs tracking-widest uppercase">
            <MessageSquare className="w-3 h-3 mr-1.5" />
            Member Stories
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Thousands of members have experienced profound healing through Hz
            frequency therapy.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-surface rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {t.name
                  .split("")
                  .slice(0, t.stars)
                  .map((_, j) => (
                    <span
                      key={`star-${t.name}-${j}`}
                      className="text-gold text-lg"
                    >
                      ★
                    </span>
                  ))}
              </div>
              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.74 0.12 192), oklch(0.65 0.18 295))",
                    color: "oklch(0.10 0.03 280)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
