export function Icon({ name, size = 18, strokeWidth = 1.8, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className,
  };

  const paths = {
    menu: <><path d="M7 9h10M7 15h10" /></>,
    close: <><path d="m7 7 10 10M17 7 7 17" /></>,
    arrow: <><path d="M7 17 17 7M8 7h9v9" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    minus: <><path d="M5 12h14" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9.2a2.4 2.4 0 1 1 3.4 2.2c-.9.4-1.2 1-1.2 1.8M12 17h.01" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-9.4 7.3L5 20l1.2-4.3A7.5 7.5 0 1 1 20 11.5Z" /><path d="M9 12h.01M12 12h.01M15 12h.01" /></>,
    phone: <><path d="M8.2 3.8 10 8.2 7.8 9.6a13.7 13.7 0 0 0 6.6 6.6l1.4-2.2 4.4 1.8v3a2 2 0 0 1-2 2A15 15 0 0 1 3.2 5.8a2 2 0 0 1 2-2Z" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 10v6M8 8v.1M12 16v-3.4a2.6 2.6 0 0 1 5.2 0V16M12 10v6" /></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    dribbble: <><circle cx="12" cy="12" r="9" /><path d="M6.2 5.2c3.7 3.1 6.1 7.3 7.3 12.6M4 10.5c5.5.1 10.3-1.3 14.2-4M6.2 18.6c2.6-3.8 7.2-5.7 13.5-5.5" /></>,
    x: <><path d="M5 4.5 19 19.5M19 4.5 5 19.5" /></>,
    pause: <><path d="M9 8v8M15 8v8" /><circle cx="12" cy="12" r="9" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
