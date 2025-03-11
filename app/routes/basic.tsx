import type { Route } from "./+types/basic";
import Basics from "components/Basics";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function basic() {
  return <Basics />;
}
