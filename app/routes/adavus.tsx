import Adavus from "components/Adavus";
import type { Route } from "./+types/adavus";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function adavus() {
  return <Adavus />;
}
