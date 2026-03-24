import { useCallback } from "react";
import type { Page } from "../App";
import FrequencySection from "../components/FrequencySection";
import HeroSection from "../components/HeroSection";
import PricingSection from "../components/PricingSection";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import TestimonialsSection from "../components/TestimonialsSection";
import WellnessSection from "../components/WellnessSection";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface LandingPageProps {
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  isSubscribed: boolean;
}

export default function LandingPage({
  onNavigate,
  isLoggedIn,
  isSubscribed,
}: LandingPageProps) {
  const { login } = useInternetIdentity();

  const scrollTo = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleLoginAndSubscribe = () => {
    if (!isLoggedIn) login();
    setTimeout(() => scrollTo("pricing"), 400);
  };

  return (
    <div className="min-h-screen">
      <SiteHeader
        onNavigate={onNavigate}
        isLoggedIn={isLoggedIn}
        isSubscribed={isSubscribed}
        onScrollTo={scrollTo}
      />
      <main>
        <HeroSection
          isLoggedIn={isLoggedIn}
          onScrollTo={scrollTo}
          onLoginAndSubscribe={handleLoginAndSubscribe}
        />
        <FrequencySection
          isLoggedIn={isLoggedIn}
          isSubscribed={isSubscribed}
          onSubscribeClick={() => scrollTo("pricing")}
        />
        <WellnessSection
          isLoggedIn={isLoggedIn}
          isSubscribed={isSubscribed}
          onSubscribeClick={() => scrollTo("pricing")}
        />
        <TestimonialsSection />
        <PricingSection isLoggedIn={isLoggedIn} isSubscribed={isSubscribed} />
      </main>
      <SiteFooter />
    </div>
  );
}
