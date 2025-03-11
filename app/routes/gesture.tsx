import UploadImage from "components/UploadImage";
import type { Route } from "./+types/gesture";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function basic() {
  return <UploadImage />;
}
