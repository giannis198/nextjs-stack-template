import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastDemoButton } from "@/components/demo-toast-button";
import { siteConfig } from "@/config/site";
import { spacing, typography } from "@/config/design-tokens";

export const metadata = {
  title: "Welcome",
  description: "Demo welcome page for the Next.js stack template.",
};

const features = [
  {
    title: "Next.js 16 App Router",
    description: "Server Components, Turbopack, and cacheComponents enabled.",
  },
  {
    title: "Tailwind CSS v4",
    description: "CSS-first theming with design tokens and dark mode variables.",
  },
  {
    title: "shadcn/ui",
    description: "Full component set built on @base-ui/react primitives.",
  },
  {
    title: "GSAP + ScrollTrigger",
    description: "Ready-to-use motion setup with reduced-motion support.",
  },
  {
    title: "Forms & Validation",
    description: "React Hook Form with Zod resolvers and a contact API.",
  },
  {
    title: "State & Toasts",
    description: "Zustand for client state and react-hot-toast for feedback.",
  },
];

export default function HomePage() {
  return (
    <main className={`${spacing.container} ${spacing.section.mobile} ${spacing.section.desktop} space-y-16`}>
      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Template</Badge>
        <h1 className={typography.heading.h1}>{siteConfig.name}</h1>
        <p className={`${typography.body.large} max-w-2xl text-muted-foreground`}>
          {siteConfig.description}. A production-ready starting point with the
          full stack already wired up.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Browse components
          </Button>
          <ToastDemoButton />
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </section>

      <section className="rounded-xl border bg-card p-8">
        <h2 className={typography.heading.h3}>Quick start</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5">cp .env.example .env.local</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5">npm install</code>
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5">npm run dev</code>
          </li>
        </ol>
      </section>
    </main>
  );
}