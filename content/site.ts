// DEMO CONTENT. Prices, dish count, counters and timings are sample values
// for the client preview. Replace with confirmed figures before launch.

// Placeholder: put the restaurant's real name here and it updates everywhere.
export const brandName = "[your-restaurent-name]";

export const contact = {
  phoneDisplay: "+91 82477 08238",
  phoneHref: "tel:+918247708238",
  whatsapp: "918247708238",
  email: "bolishettyrahul11@gmail.com",
  addressLines: [
    "5th Floor, Sarath City Capital Mall",
    "Gachibowli – Miyapur Rd, Kondapur",
    "Hyderabad, Telangana 500084",
  ],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Sarath+City+Capital+Mall+Kondapur+Hyderabad",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const fares = [
  {
    id: "veg",
    name: "Veg Voyage",
    diet: "veg" as const,
    price: 799,
    note: "Every vegetarian counter, every port",
    includes: ["Live chaat, dosa and wok counters", "Tandoor paneer & grills", "Full dessert island"],
  },
  {
    id: "nonveg",
    name: "Non-veg Voyage",
    diet: "nonveg" as const,
    price: 999,
    note: "The whole route, nothing held back",
    includes: ["Everything on the Veg Voyage", "Dum biryani & kebab grill", "Coastal fish & prawn counter"],
  },
];

export const kidsFare = { price: 449, ages: "4–10 years" };

export const manifest = [
  { value: "160+", label: "dishes on the route" },
  { value: "6", label: "live counters" },
];

export type Diet = "veg" | "nonveg";

export const ports = [
  {
    id: "hyderabad",
    name: "Hyderabad Harbour",
    cuisine: "Dum biryani · Deccani grills",
    line: "Where every voyage starts: sealed handis of dum biryani, mirchi ka salan and slow-cooked kebabs.",
    dishes: ["Chicken dum biryani", "Veg dum biryani", "Mirchi ka salan"],
    image: "/images/demo/biryani.webp",
    alt: "Hyderabadi chicken biryani in a copper handi with raita",
    live: false,
  },
  {
    id: "grill",
    name: "The Grill Deck",
    cuisine: "Tandoor · live kebab grill",
    line: "Skewers straight off the coals, brought to your table while they still hiss.",
    dishes: ["Tandoori chicken", "Paneer tikka", "Malai broccoli"],
    image: "/images/demo/tandoori.webp",
    alt: "Charred tandoori chicken on a sizzler plate",
    live: true,
  },
  {
    id: "chaat",
    name: "Chaat Bazaar",
    cuisine: "Street food · made to order",
    line: "Pani puri filled in front of you, papdi chaat, and ragda the way the old city makes it.",
    dishes: ["Pani puri", "Papdi chaat", "Ragda pattice"],
    image: "/images/demo/panipuri.webp",
    alt: "Pani puri with spiced water, onions and chillies",
    live: true,
  },
  {
    id: "south",
    name: "Southern Coast",
    cuisine: "Dosa · appam · coastal curries",
    line: "Crisp dosas off the tawa, and fish and prawn curries from the Andhra and Malabar coasts.",
    dishes: ["Ghee roast dosa", "Andhra fish curry", "Appam & stew"],
    image: "/images/demo/dosa.webp",
    alt: "Masala dosa with chutney and sambar",
    live: true,
  },
  {
    id: "wok",
    name: "Wok Harbour",
    cuisine: "Indo-Chinese · live wok",
    line: "Fire, noise and a wok that never cools: noodles and stir-fries tossed to your spice level.",
    dishes: ["Hakka noodles", "Chilli paneer", "Dragon chicken"],
    image: "/images/demo/wok.webp",
    alt: "Flames rising from a wok over a high flame",
    live: true,
  },
  {
    id: "riviera",
    name: "The Riviera",
    cuisine: "Pasta · Mediterranean",
    line: "Pasta tossed at the counter, mezze, and salads for the ones who want something lighter.",
    dishes: ["Live pasta station", "Hummus & pita", "Greek salad"],
    image: "/images/demo/pasta.webp",
    alt: "Fresh ribbons of tagliatelle and spaghetti",
    live: true,
  },
  {
    id: "dessert",
    name: "Dessert Island",
    cuisine: "Mithai · bakes · ice cream",
    line: "The last port, and the kids' favourite: hot jalebi, gulab jamun, kulfi and a chocolate fountain.",
    dishes: ["Hot jalebi & rabdi", "Gulab jamun", "Chocolate fountain"],
    image: "/images/demo/jalebi.webp",
    alt: "Bright orange jalebi in a white bowl",
    live: true,
  },
];

export const spread: { course: string; items: { name: string; diet: Diet }[] }[] = [
  {
    course: "Starters",
    items: [
      { name: "Paneer tikka", diet: "veg" },
      { name: "Tandoori chicken", diet: "nonveg" },
      { name: "Crispy corn", diet: "veg" },
      { name: "Apollo fish", diet: "nonveg" },
      { name: "Hara bhara kebab", diet: "veg" },
      { name: "Chicken 65", diet: "nonveg" },
      { name: "Malai broccoli", diet: "veg" },
      { name: "Mutton seekh kebab", diet: "nonveg" },
    ],
  },
  {
    course: "Mains",
    items: [
      { name: "Chicken dum biryani", diet: "nonveg" },
      { name: "Veg dum biryani", diet: "veg" },
      { name: "Butter chicken", diet: "nonveg" },
      { name: "Paneer butter masala", diet: "veg" },
      { name: "Andhra fish curry", diet: "nonveg" },
      { name: "Dal makhani", diet: "veg" },
      { name: "Mutton rogan josh", diet: "nonveg" },
      { name: "Bagara baingan", diet: "veg" },
    ],
  },
  {
    course: "Live counters",
    items: [
      { name: "Pani puri & chaat", diet: "veg" },
      { name: "Ghee roast dosa", diet: "veg" },
      { name: "Hakka noodles, to order", diet: "veg" },
      { name: "Kebab grill", diet: "nonveg" },
      { name: "Pasta, tossed to order", diet: "veg" },
      { name: "Prawn tawa fry", diet: "nonveg" },
    ],
  },
  {
    course: "Desserts",
    items: [
      { name: "Hot jalebi & rabdi", diet: "veg" },
      { name: "Gulab jamun", diet: "veg" },
      { name: "Qubani ka meetha", diet: "veg" },
      { name: "Double ka meetha", diet: "veg" },
      { name: "Kulfi, three ways", diet: "veg" },
      { name: "Chocolate fountain", diet: "veg" },
    ],
  },
];

export const occasions = [
  { name: "Birthdays", line: "Tell us whose day it is when you book, and we'll set the table for a celebration. Ask about cakes and decorations." },
  { name: "Team lunches", line: "Straight from HITEC City and Kondapur. Long tables for the whole team, a weekday lunch that fits the break, and one bill." },
  { name: "Anniversaries", line: "Ask for a quieter table and we'll do our best to find one for the two of you." },
  { name: "Family gatherings", line: "A kids' price, plenty of mild dishes, and a dessert island the children will remember." },
];

export const timings = [
  { session: "Lunch", hours: "12:00 – 4:00 pm" },
  { session: "Dinner", hours: "7:00 – 11:00 pm" },
];

export const faqs = [
  { q: "Do I need to book?", a: "Weekends and evenings fill up fast, so we recommend booking. Send us a WhatsApp or call to reserve." },
  { q: "Is the price the same for lunch and dinner?", a: "Yes. One price, every session, all seven days. Drinks from the bar are charged separately." },
  { q: "What do children pay?", a: `Children aged ${kidsFare.ages} pay ₹${kidsFare.price}. Ask us about younger children when you book.` },
  { q: "Is there parking?", a: "Yes. Sarath City Capital Mall has multi-level parking. Take the lifts to the 5th floor; we're on the food level." },
  { q: "Are veg and non-veg kept separate?", a: "Every dish is marked with the green vegetarian or brown non-vegetarian symbol. Ask our team about how dishes are prepared." },
  { q: "Do you host large groups and corporate events?", a: "Yes. Message us with your date and headcount and we'll plan the table with you." },
];

export const photoCredits = [
  "Biryani: Chicken Hyderabadi Biryani (CC BY-SA 4.0)",
  "Tandoori chicken: Tandoori chicken Indian (CC BY-SA 2.0)",
  "Pani puri: Crispy Pani Puri (CC BY-SA 4.0)",
  "Dosa: Dosa-chutney-sambhar (CC BY 2.0)",
  "Wok: Wok Fire (CC BY 2.0)",
  "Pasta: (Pasta) by David Adam Kess (CC BY-SA 4.0)",
  "Jalebi: Jalebi in a bowl (CC BY-SA 4.0)",
  "Gulab jamun: Two Gulab Jamun in a plate (CC BY-SA 4.0)",
  "Paneer tikka: Paneer tikka 1 (CC BY-SA 4.0)",
  "Cocktail: Elegant cocktail with citrus twist (CC BY 2.0)",
];
