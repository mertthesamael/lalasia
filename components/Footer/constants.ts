import { FooterNav } from "@/types/FooterNav";

export const FooterNavs: FooterNav[] = [
  {
    id: 1,
    category: "Product",
    navs: [
      {
        id: 1,
        value: "New Arrivals",
        href: "/",
      },
      {
        id: 2,
        value: "Best Selling",
        href: "/",
      },
      {
        id: 3,
        value: "Home Decor",
        href: "/",
      },
      {
        id: 4,
        value: "Kitchen Set",
        href: "/",
      },
    ],
  },
  {
    id: 2,
    category: "Services",
    navs: [
      {
        id: 1,
        value: "Catalog",
        href: "/",
      },
      {
        id: 2,
        value: "Blog",
        href: "/",
      },
      {
        id: 3,
        value: "FaQ",
        href: "/",
      },
      {
        id: 4,
        value: "Pricing",
        href: "/",
      },
    ],
  },
  {
    id: 3,
    category: "Follow Us",
    navs: [
      {
        id: 1,
        value: "Facebook",
        href: "/",
      },
      {
        id: 2,
        value: "Instagram",
        href: "/",
      },
      {
        id: 3,
        value: "Twitter",
        href: "/",
      },
    ],
  },
];
