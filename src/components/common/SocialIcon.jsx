import React from "react";

/**
 * High-fidelity vector SVG for Google Scholar (mortarboard + circle).
 * Matches standard FontAwesome sizing and inherits current text color.
 */
export const GoogleScholarSvg = ({ size = "1em", className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    style={{ display: "inline-block", verticalAlign: "-0.125em" }}
    aria-hidden="true"
  >
    <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

/**
 * Universal social icon renderer that safely handles brand icons,
 * solid icons (like email envelope), and academic icons (Google Scholar).
 */
const SocialIcon = ({ icon, size = "1em" }) => {
  if (!icon) return null;

  const name = (icon.name || "").toLowerCase();
  const image = (icon.image || "").toLowerCase();
  const url = (icon.url || "").toLowerCase();

  // 1. Google Scholar detection (SVG for 100% reliable rendering)
  if (
    name.includes("scholar") ||
    image.includes("scholar") ||
    url.includes("scholar.google")
  ) {
    return <GoogleScholarSvg size={size} />;
  }

  // 2. Email / Envelope detection (requires 'fas' solid style)
  if (name.includes("email") || image.includes("envelope") || url.startsWith("mailto:")) {
    return <i className="fas fa-envelope" />;
  }

  // 3. Explicit custom class provided
  if (icon.className) {
    return <i className={icon.className} />;
  }

  // 4. Standard brand icons (GitHub, LinkedIn, Twitter/X, etc.)
  const iconClass = icon.image || "";
  const prefix = iconClass.startsWith("fa-") ? "fab" : "";
  return <i className={`${prefix} ${iconClass}`.trim()} />;
};

export default SocialIcon;
