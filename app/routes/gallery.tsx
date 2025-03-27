import Gallery from "components/Gallery";
import type { Route } from "./+types/gallery";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function gallery() {
  return <Gallery />;
}
