export function formatDate(
  date: Date,
  options: {
    year?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    day?: "numeric" | "2-digit";
  } = {},
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const formatOptions = { ...defaultOptions, ...options };

  return new Intl.DateTimeFormat("en-CA", formatOptions).format(date);
}
