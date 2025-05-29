import { Metadata } from "next";
import Home from "@/components/pages/home";

export const metadata: Metadata = {
  title: "Home",
  description: "The home page of the application.",
};

export default function Page() {
  return <Home />;
}
