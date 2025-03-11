import type { Route } from "./+types/mudras_bhedas";
import Mudras from "components/Mudras_Bhedas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function mudras() {
  return <Mudras />;
}
