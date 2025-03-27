import Videos from "components/Videos";
import type { Route } from "./+types/videos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function videos() {
  return <Videos />;
}
