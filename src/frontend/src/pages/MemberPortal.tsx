import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Crown,
  Lock,
  Play,
  Waves,
} from "lucide-react";
import { motion } from "motion/react";
import type { Page } from "../App";
import SiteFooter from "../components/SiteFooter";
import { frequencies, wellnessArticles } from "../data/frequencies";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface MemberPortalProps {
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  isSubscribed: boolean;
}

const meditationSessions = [
  {
    title: "Morning Activation",
    description:
      "Start your day with 396Hz liberation frequencies to clear negative energy and set powerful positive intentions for the day.",
    duration: "15 min",
    level: "Beginner",
  },
  {
    title: "Deep Sleep Protocol",
    description:
      "Delta wave audio (0.5\u20134Hz) layered with 432Hz nature tones to guide your brain into deep restorative sleep states.",
    duration: "45 min",
    level: "All levels",
  },
  {
    title: "Stress Dissolution",
    description:
      "Alpha binaural beats (8\u201312Hz) combined with 528Hz to dissolve tension and restore nervous system balance completely.",
    duration: "20 min",
    level: "Intermediate",
  },
  {
    title: "Heart Opening",
    description:
      "639Hz heart chakra activation with guided visualization for emotional healing, self-compassion, and unconditional love.",
    duration: "30 min",
    level: "All levels",
  },
  {
    title: "Consciousness Expansion",
    description:
      "852Hz + 963Hz dual-frequency session for deep spiritual exploration and expanded awareness states beyond ordinary mind.",
    duration: "40 min",
    level: "Advanced",
  },
  {
    title: "Chakra Alignment",
    description:
      "Journey through all 7 chakra frequencies from 174Hz to 963Hz for complete energetic alignment and full-body healing.",
    duration: "60 min",
    level: "All levels",
  },
];

export default function MemberPortal({
  onNavigate,
  isLoggedIn,
  isSubscribed,
}: MemberPortalProps) {
  const { identity, login } = useInternetIdentity();
  const principal = identity?.getPrincipal().toString();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div
          className="card-surface rounded-3xl p-10 max-w-md w-full"
          style={{ boxShadow: "0 0 24px oklch(0.74 0.12 192 / 0.25)" }}
        >
          <Lock className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Members Only</h2>
          <p className="text-muted-foreground mb-6">
            Please log in to access the member portal.
          </p>
          <Button
            data-ocid="portal.primary_button"
            onClick={() => login()}
            className="w-full font-bold"
            style={{
              background: "oklch(0.74 0.12 192)",
              color: "oklch(0.10 0.03 280)",
            }}
          >
            Log In
          </Button>
          <Button
            data-ocid="portal.back_button"
            variant="ghost"
            onClick={() => onNavigate("landing")}
            className="w-full mt-3 text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  if (!isSubscribed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div
          className="card-surface rounded-3xl p-10 max-w-md w-full"
          style={{ boxShadow: "0 0 24px oklch(0.74 0.12 192 / 0.25)" }}
        >
          <Crown className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Upgrade to Premium</h2>
          <p className="text-muted-foreground mb-2">
            You're logged in but don't have an active subscription.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Subscribe for $10/month to unlock the full member portal.
          </p>
          <Button
            data-ocid="portal.subscribe_button"
            onClick={() => onNavigate("landing")}
            className="w-full font-bold"
            style={{
              background: "oklch(0.74 0.12 192)",
              color: "oklch(0.10 0.03 280)",
            }}
          >
            Subscribe Now — $10/mo
          </Button>
          <Button
            data-ocid="portal.back_button"
            variant="ghost"
            onClick={() => onNavigate("landing")}
            className="w-full mt-3 text-muted-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header
        className="border-b border-border/40 sticky top-0 z-50 backdrop-blur-xl"
        style={{ background: "oklch(0.10 0.03 280 / 0.9)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="portal.back_button"
              onClick={() => onNavigate("landing")}
              className="text-muted-foreground hover:text-foreground transition-colors mr-2"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="relative">
              <Waves className="w-6 h-6 text-teal-500" />
              <div
                className="absolute inset-0 blur-sm rounded-full"
                style={{ background: "oklch(0.74 0.12 192 / 0.4)" }}
              />
            </div>
            <span className="text-lg font-bold">
              <span className="text-foreground">Hz</span>
              <span className="text-teal-500">Heal</span>
              <span className="text-xs text-gold font-normal ml-2">
                Premium
              </span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-teal-500/10 text-teal-400 border-teal-500/30 hidden sm:flex">
              <Crown className="w-3 h-3 mr-1.5" />
              Premium Member
            </Badge>
            {principal && (
              <span className="text-xs text-muted-foreground hidden md:block">
                {principal.slice(0, 8)}...{principal.slice(-4)}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden mb-10"
          style={{ minHeight: 220 }}
        >
          <img
            src="/assets/generated/member-portal-bg.dim_1200x600.jpg"
            alt="Member portal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.10 0.03 280 / 0.92) 0%, oklch(0.10 0.03 280 / 0.55) 60%, transparent 100%)",
            }}
          />
          <div className="relative p-8 sm:p-12">
            <Badge className="bg-gold/20 text-gold border-gold/40 mb-4">
              <Crown className="w-3 h-3 mr-1.5" />
              Premium Access
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Welcome to Your Healing Space
            </h1>
            <p className="text-muted-foreground max-w-lg">
              All 8 Hz frequencies, guided meditations, and wellness resources
              are unlocked. Your journey to complete mind-body harmony begins
              here.
            </p>
          </div>
        </motion.div>

        <Tabs defaultValue="frequencies" data-ocid="portal.tab">
          <TabsList className="mb-8 bg-card border border-border/50">
            <TabsTrigger
              data-ocid="portal.frequencies_tab"
              value="frequencies"
              className="data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400"
            >
              <Waves className="w-4 h-4 mr-2" />
              Hz Frequencies
            </TabsTrigger>
            <TabsTrigger
              data-ocid="portal.wellness_tab"
              value="wellness"
              className="data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Wellness Library
            </TabsTrigger>
            <TabsTrigger
              data-ocid="portal.meditation_tab"
              value="meditation"
              className="data-[state=active]:bg-teal-500/20 data-[state=active]:text-teal-400"
            >
              <Crown className="w-4 h-4 mr-2" />
              Meditation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frequencies">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {frequencies.map((freq, i) => (
                <motion.div
                  key={freq.id}
                  data-ocid={`portal.frequencies.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="card-surface rounded-2xl p-5 hover:shadow-glow transition-all cursor-pointer"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${freq.color} mb-4`}
                  >
                    <span className="text-foreground font-bold text-sm">
                      {freq.hz} Hz
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {freq.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    {freq.subtitle}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {freq.benefits.map((b) => (
                      <li
                        key={b}
                        className="text-xs text-muted-foreground flex items-center gap-1.5"
                      >
                        <span
                          className="w-1 h-1 rounded-full"
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
                    <button
                      type="button"
                      data-ocid={`portal.play_button.${i + 1}`}
                      className="w-9 h-9 rounded-full flex items-center justify-center border transition-all"
                      style={{
                        background: "oklch(0.74 0.12 192 / 0.2)",
                        borderColor: "oklch(0.74 0.12 192 / 0.3)",
                      }}
                    >
                      <Play className="w-3.5 h-3.5 text-teal-400 ml-0.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wellness">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {wellnessArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  data-ocid={`portal.wellness.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-surface rounded-2xl p-6 hover:shadow-card transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="text-xs bg-teal-500/10 text-teal-400 border-teal-500/30">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                  <button
                    type="button"
                    data-ocid={`portal.read_button.${i + 1}`}
                    className="mt-4 text-xs text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    Read Full Article →
                  </button>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="meditation">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meditationSessions.map((session, i) => (
                <motion.div
                  key={session.title}
                  data-ocid={`portal.meditation.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="card-surface rounded-2xl p-6 hover:shadow-glow transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/30 text-xs">
                      {session.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {session.duration}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">
                    {session.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                    {session.description}
                  </p>
                  <button
                    type="button"
                    data-ocid={`portal.play_meditation.${i + 1}`}
                    className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center border transition-all"
                      style={{
                        background: "oklch(0.74 0.12 192 / 0.2)",
                        borderColor: "oklch(0.74 0.12 192 / 0.3)",
                      }}
                    >
                      <Play className="w-3 h-3 ml-0.5" />
                    </div>
                    Begin Session
                  </button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <SiteFooter />
    </div>
  );
}
