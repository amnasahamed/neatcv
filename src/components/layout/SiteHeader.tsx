"use client";

import Image from "next/image";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="brand-mark" aria-label="NeatCV home">
          <Image
            src="/brand/neatcv-lockup.png"
            alt=""
            width={449}
            height={156}
            className="brand-logo"
            priority
          />
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a className="button button-primary button-small" href="#contact">
            Book a review
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <XIcon size={21} /> : <ListIcon size={21} />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-navigation" className="mobile-navigation lg:hidden">
          <Container className="grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="mobile-nav-link"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="button button-primary mt-3"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Book a review
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
