export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 011-1h3z"
        />
      </svg>
    ),
    hoverClass: "hover:text-blue-400",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23 7s-.2-1.5-.8-2.2c-.6-.7-1.3-.8-1.6-.9C18.5 3.5 12 3.5 12 3.5s-6.5 0-8.6.4c-.3.1-1 .2-1.6.9C1.2 5.5 1 7 1 7s-.2 1.7-.2 3.5v1c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.2c.6.7 1.3.8 1.6.9 2.1.4 8.6.4 8.6.4s6.5 0 8.6-.4c.3-.1 1-.2 1.6-.9.6-.7.8-2.2.8-2.2s.2-1.7.2-3.5v-1c0-1.8-.2-3.5-.2-3.5z"
        />
        <polygon
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          points="9.75 15.02 15.5 12 9.75 8.98"
        />
      </svg>
    ),
    hoverClass: "hover:text-red-500",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 2a9 9 0 01-2.86 1.1A4.5 4.5 0 0016 2a4.5 4.5 0 00-4.47 5.1A12.9 12.9 0 013 4s-4 9 5 13a13 13 0 01-8 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
        />
      </svg>
    ),
    hoverClass: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          ry="5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
    hoverClass: "hover:text-pink-500",
  },
];

export const ICONS = {
  prev: (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  ),
  next: (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  ),
  chevronRight: (props?: { size?: number; strokeWidth?: number; color?: string; className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props?.color || "currentColor"}
      strokeWidth={props?.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-${props?.size || 4} h-${props?.size || 4} ${props?.className || ""}`}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
};
export const FOOTER = [
  {
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
      </svg>
    ),
    label: "info@bluazur.com",
    href: "mailto:info@bluazur.com",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
      </svg>
    ),
    label: "+1 555 555-5555",
    href: "tel:+15555555555",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"></path>
      </svg>
    ),
    label: "@ BLU Azur",
    href: "#",
  },
];

