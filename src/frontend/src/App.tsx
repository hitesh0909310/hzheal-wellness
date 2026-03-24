import { Toaster } from "@/components/ui/sonner";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import LandingPage from "./pages/LandingPage";
import MemberPortal from "./pages/MemberPortal";

export type Page = "landing" | "portal";

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [checkingSession, setCheckingSession] = useState(false);
  const { identity, loginStatus } = useInternetIdentity();
  const { actor, isFetching } = useActor();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sid = params.get("session_id");
    const status = params.get("status");
    if (sid) {
      setSessionId(sid);
      setCheckingSession(true);
    }
    if (status === "cancel") {
      toast.error("Subscription cancelled. You can try again anytime.");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const { data: stripeStatus } = useQuery({
    queryKey: ["stripeSession", sessionId],
    queryFn: async () => {
      if (!actor || !sessionId) return null;
      return actor.getStripeSessionStatus(sessionId);
    },
    enabled: !!actor && !isFetching && !!sessionId && checkingSession,
    refetchInterval: (query) => {
      const data = query.state.data;
      if (data && (data.__kind__ === "completed" || data.__kind__ === "failed"))
        return false;
      return 2000;
    },
  });

  useEffect(() => {
    if (!stripeStatus) return;
    if (stripeStatus.__kind__ === "completed") {
      setIsSubscribed(true);
      setCheckingSession(false);
      toast.success("Welcome to HzHeal Premium! 🎵");
      setPage("portal");
      window.history.replaceState({}, "", window.location.pathname);
    } else if (stripeStatus.__kind__ === "failed") {
      setCheckingSession(false);
      toast.error("Payment failed. Please try again.");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [stripeStatus]);

  const isLoggedIn = loginStatus === "success" && !!identity;

  if (page === "portal") {
    return (
      <>
        <MemberPortal
          onNavigate={setPage}
          isLoggedIn={isLoggedIn}
          isSubscribed={isSubscribed}
        />
        <Toaster position="top-right" />
      </>
    );
  }

  return (
    <>
      <LandingPage
        onNavigate={setPage}
        isLoggedIn={isLoggedIn}
        isSubscribed={isSubscribed}
      />
      <Toaster position="top-right" />
    </>
  );
}
