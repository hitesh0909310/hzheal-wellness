import { Waves } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const socialLinks = [
  { icon: <SiInstagram className="w-4 h-4" />, name: "Instagram" },
  { icon: <SiX className="w-4 h-4" />, name: "X" },
  { icon: <SiYoutube className="w-4 h-4" />, name: "YouTube" },
  { icon: <SiFacebook className="w-4 h-4" />, name: "Facebook" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "hzheal.app";

  const links: Record<string, string[]> = {
    Company: ["About Us", "Our Science", "Blog", "Careers"],
    Support: ["Help Center", "Contact Us", "Community", "FAQ"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Refund Policy",
    ],
  };

  return (
    <footer className="relative border-t border-border/30 pt-16 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Waves className="w-6 h-6 text-teal-500" />
                <div
                  className="absolute inset-0 blur-sm rounded-full"
                  style={{ background: "oklch(0.74 0.12 192 / 0.4)" }}
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-foreground">Hz</span>
                <span className="text-teal-500">Heal</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Harness the healing power of sound frequencies for mind, body, and
              spirit. Science meets ancient wisdom.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href="https://hzheal.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full card-surface flex items-center justify-center text-muted-foreground hover:text-teal-400 transition-colors"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="https://hzheal.app"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} HzHeal. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
