import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useCreateCheckoutSession } from "../hooks/useQueries";

const FEATURES = [
  "All 8 Hz Solfeggio frequencies",
  "Full wellness article library",
  "Guided meditation sessions",
  "Sleep healing audio protocols",
  "Binaural beat programs",
  "New content added monthly",
  "Priority member support",
];

interface PricingSectionProps {
  isLoggedIn: boolean;
  isSubscribed: boolean;
}

export default function PricingSection({
  isLoggedIn,
  isSubscribed,
}: PricingSectionProps) {
  const { login, isLoggingIn } = useInternetIdentity();
  const { mutateAsync: createCheckout, isPending } = useCreateCheckoutSession();

  const handleSubscribe = async () => {
    if (!isLoggedIn) {
      login();
      return;
    }
    try {
      const successUrl = `${window.location.origin}${window.location.pathname}?status=success&session_id={CHECKOUT_SESSION_ID}`;
      const cancelUrl = `${window.location.origin}${window.location.pathname}?status=cancel`;
      const url = await createCheckout({
        items: [
          {
            productName: "HzHeal Premium Monthly",
            currency: "usd",
            quantity: BigInt(1),
            priceInCents: BigInt(1000),
            productDescription:
              "Full access to all Hz frequencies, meditation library & wellness resources",
          },
        ],
        successUrl,
        cancelUrl,
      });
      window.location.href = url;
    } catch {
      toast.error(
        "Unable to start checkout. Please ensure Stripe payment is configured.",
      );
    }
  };

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 px-4 py-1.5 text-xs tracking-widest uppercase">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Simple Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Join <span className="gradient-text">HzHeal</span> Premium
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Unlock unlimited access to the full library of healing
              frequencies, guided meditations, and science-backed wellness
              protocols. One simple monthly subscription.
            </p>
            <ul className="space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.74 0.12 192 / 0.2)" }}
                  >
                    <Check className="w-3 h-3 text-teal-400" />
                  </div>
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              data-ocid="pricing.card"
              className="relative card-surface rounded-3xl p-8 overflow-hidden"
              style={{
                borderColor: "oklch(0.74 0.12 192 / 0.3)",
                boxShadow:
                  "0 0 24px oklch(0.74 0.12 192 / 0.25), 0 0 48px oklch(0.74 0.12 192 / 0.10)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl"
                style={{
                  background: "oklch(0.74 0.12 192 / 0.08)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 text-xs mb-2">
                      Monthly Plan
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      AuraSound Premium
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-5xl font-bold text-foreground">
                      $10
                    </div>
                    <div className="text-muted-foreground text-sm">/month</div>
                  </div>
                </div>
                <div className="h-px bg-border/40 mb-6" />
                <ul className="space-y-3 mb-8">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.74 0.12 192 / 0.2)" }}
                      >
                        <Check className="w-3 h-3 text-teal-400" />
                      </div>
                      <span className="text-sm text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                {isSubscribed ? (
                  <div
                    data-ocid="pricing.success_state"
                    className="w-full py-4 rounded-xl text-center"
                    style={{
                      background: "oklch(0.74 0.12 192 / 0.1)",
                      border: "1px solid oklch(0.74 0.12 192 / 0.3)",
                    }}
                  >
                    <Check className="w-5 h-5 text-teal-400 mx-auto mb-1" />
                    <span className="text-teal-400 font-semibold">
                      Active Subscription
                    </span>
                  </div>
                ) : (
                  <Button
                    data-ocid="pricing.primary_button"
                    onClick={handleSubscribe}
                    disabled={isPending || isLoggingIn}
                    className="w-full h-12 font-bold text-base transition-all hover:scale-[1.02]"
                    style={{
                      background: "oklch(0.74 0.12 192)",
                      color: "oklch(0.10 0.03 280)",
                      boxShadow: "0 0 24px oklch(0.74 0.12 192 / 0.25)",
                    }}
                  >
                    {isPending || isLoggingIn ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : !isLoggedIn ? (
                      "Login & Subscribe — $10/mo"
                    ) : (
                      "Subscribe Now — $10/mo"
                    )}
                  </Button>
                )}
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Cancel anytime · Secure payments via Stripe · Instant access
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
