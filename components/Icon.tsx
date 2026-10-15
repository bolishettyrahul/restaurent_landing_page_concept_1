// Authored line icons: 24px grid, 1.75 stroke, round caps.
const paths = {
  phone:
    "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  whatsapp:
    "M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z M9 8.5c0 3 2.5 5.8 5.5 6.5l1.3-1.3-2-1-1 .8c-1-.5-1.8-1.3-2.3-2.3l.8-1-1-2L9 8.5Z",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 2",
  car: "M5 16v3h3v-2h8v2h3v-3l-1.5-6.5A2 2 0 0 0 15.6 8H8.4a2 2 0 0 0-1.9 1.5L5 16Z M5 16h14 M8 13.5h.01 M16 13.5h.01",
  arrow: "M5 12h14 M13 6l6 6-6 6",
  plus: "M12 5v14 M5 12h14",
  minus: "M5 12h14",
  compass:
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M15.5 8.5l-2 5-5 2 2-5 5-2Z",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
};

export type IconName = keyof typeof paths;

export function Icon({ name, title }: { name: IconName; title?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={paths[name]} />
    </svg>
  );
}
