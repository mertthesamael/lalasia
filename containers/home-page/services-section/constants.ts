import { Choices, Fast, Price } from "@/components/Icons/ServiceIcons";
import { ServicesType } from "@/types/Services";

export const Services: ServicesType[] = [
  {
    id: 1,
    title: "Fast and On Time",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    icon: Fast(),
  },
  {
    id: 2,
    title: "Affordable Price",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    icon: Price(),
  },
  {
    id: 3,
    title: "Many Choices",
    content:
      "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. ",
    icon: Choices(),
  },
];
