import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center px-5 text-center">
      <div>
        <p className="eyebrow">Page not found</p>
        <h1 className="m-0 text-5xl font-bold tracking-[-0.06em]">
          This page has moved.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          Return to NeatCV to explore our CV writing and LinkedIn profile
          services.
        </p>
        <Link className="button button-primary mt-8" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
