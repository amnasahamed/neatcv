import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer-shell">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#top" className="brand-mark" aria-label="NeatCV home">
              <Image
                src="/brand/neatcv-lockup.png"
                alt=""
                width={449}
                height={156}
                className="footer-logo"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Clear, credible career documents for people ready to take their
              next step.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Explore</h2>
            <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
              {navItems.map((item) => (
                <a key={item.href} className="footer-link" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="footer-heading">Contact</h2>
            <a
              className="footer-link mt-4 inline-block"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
        <div className="footer-base">
          <p>© {new Date().getFullYear()} NeatCV. All rights reserved.</p>
          <p>Built for clear career moves.</p>
        </div>
      </Container>
    </footer>
  );
}
