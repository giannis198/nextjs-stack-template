export const spacing = {
  section: {
    mobile: "py-12 sm:py-16",
    desktop: "lg:py-24",
  },
  container: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
} as const;

export const typography = {
  heading: {
    h1: "text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight",
    h2: "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
    h3: "text-2xl sm:text-3xl font-semibold tracking-tight",
    h4: "text-xl sm:text-2xl font-semibold",
  },
  body: {
    base: "text-base sm:text-lg",
    large: "text-lg sm:text-xl",
    small: "text-sm sm:text-base",
  },
} as const;
