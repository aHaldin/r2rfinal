// ---------------------------------------------------------------------------
// Trust content. Sections render ONLY when these arrays have real entries —
// add genuine testimonials, logos and a founder photo here and they appear.
// Nothing is invented, and nothing renders empty or half-finished.
// ---------------------------------------------------------------------------

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

// Add real client quotes here (e.g. Paul Edwards once he provides one).
export const testimonials: Testimonial[] = [];

export type ClientLogo = { name: string; src: string };

// Add logo files to /public/images/clients/ and reference them here.
export const clientLogos: ClientLogo[] = [];

export type Screenshot = { src: string; alt: string; caption: string };

// Real dashboard / automation screenshots (blur client data before adding).
export const screenshots: Screenshot[] = [];

export const founder = {
  // Set to a path such as "/images/founder.jpg" once you have a photo.
  photo: null as string | null,
  name: null as string | null,
  role: null as string | null,
};
