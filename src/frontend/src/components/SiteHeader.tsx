import { Button } from "@/components/ui/button";
import { LogOut, Menu, User, Waves, X } from "lucide-react";
import { useState } from "react";
import type { Page } from "../App";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface SiteHeaderProps {
  onNavigate: (page: Page) => void;
  isLoggedIn: boolean;
  isSubscribed: boolean;
  onScrollTo: (section: string) => void;
}

export default function SiteHeader({
  onNavigate,
  isLoggedIn,
  isSubscribed,
  onScrollTo,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, clear, isLoggingIn } = useInternetIdentity();

  const navLinks = [
    { label: "Discover", section: "hero" },
    { label: "Hz Frequencies", section: "frequencies" },
    { label: "Meditation", section: "wellness" },
    { label: "Wellness", section: "wellness" },
    { label: "Pricing", section: "pricing" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl"
      style={{ background: "oklch(0.10 0.03 280 / 0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => onNavigate("landing")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Waves className="w-7 h-7 text-teal-500 group-hover:text-teal-400 transition-colors" />
              <div
                className="absolute inset-0 blur-md rounded-full"
                style={{ background: "oklch(0.74 0.12 192 / 0.4)" }}
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Hz</span>
              <span className="text-teal-500">Heal</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid="nav.link"
                onClick={() => onScrollTo(link.section)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            {isLoggedIn && isSubscribed && (
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => onNavigate("portal")}
                className="text-sm text-teal-500 hover:text-teal-400 font-medium transition-colors"
              >
                Member Portal
              </button>
            )}
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                {isSubscribed && (
                  <Button
                    data-ocid="nav.primary_button"
                    size="sm"
                    onClick={() => onNavigate("portal")}
                    className="bg-teal-500 hover:bg-teal-400 text-[oklch(0.10_0.03_280)] font-semibold hidden sm:flex"
                  >
                    <User className="w-4 h-4 mr-1" />
                    My Portal
                  </Button>
                )}
                <Button
                  data-ocid="nav.secondary_button"
                  size="sm"
                  variant="ghost"
                  onClick={() => clear()}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button
                data-ocid="nav.primary_button"
                size="sm"
                onClick={() => login()}
                disabled={isLoggingIn}
                className="bg-teal-500 hover:bg-teal-400 text-[oklch(0.10_0.03_280)] font-semibold"
              >
                {isLoggingIn ? "Connecting..." : "Get Started"}
              </Button>
            )}
            <button
              type="button"
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid="nav.link"
                onClick={() => {
                  onScrollTo(link.section);
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </button>
            ))}
            {isLoggedIn && isSubscribed && (
              <button
                type="button"
                data-ocid="nav.link"
                onClick={() => {
                  onNavigate("portal");
                  setMobileOpen(false);
                }}
                className="block w-full text-left text-sm text-teal-500 font-medium py-2"
              >
                Member Portal
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
