import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  {
    path: "about",
    file: "routes/about.tsx",
  },
  {
    path: "signup",
    file: "routes/signup.tsx",
  },
  {
    path: "gesture",
    file: "routes/gesture.tsx",
  },
  {
    path: "basics",
    file: "routes/basic.tsx",
  },
  {
    path: "adavus",
    file: "routes/adavus.tsx",
  },
  {
    path: "mudras_bhedas",
    file: "routes/mudras_bhedas.tsx",
  },
] satisfies RouteConfig;
