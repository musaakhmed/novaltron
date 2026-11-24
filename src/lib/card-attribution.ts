export const CARD_SLUG_REGEX = /^[a-z0-9][a-z0-9-]{0,38}[a-z0-9]$/;

export function isValidCardSlug(
  slug: string | null | undefined
): slug is string {
  if (typeof slug !== "string") return false;
  return CARD_SLUG_REGEX.test(slug);
}

/**
 * Parses a `?ref=card-<slug>` query parameter into a validated employee slug.
 */
export function parseCardRefParam(
  ref: string | null | undefined
): string | null {
  if (typeof ref !== "string") return null;
  const trimmed = ref.trim();
  if (!trimmed.startsWith("card-")) return null;
  const slug = trimmed.slice("card-".length);
  return isValidCardSlug(slug) ? slug : null;
}
