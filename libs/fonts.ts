import localFont from "@next/font/local";

export const eudox = localFont({
  src: [
    {
      path: "../public/fonts/Eudoxus/EudoxusSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Eudoxus/EudoxusSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Eudoxus/EudoxusSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Eudoxus/EudoxusSans-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Eudoxus/EudoxusSans-Bold.ttf",
      weight: "600",
    },
  ],
  variable: "--eudox",
});
