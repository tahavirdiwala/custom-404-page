import Home from "@/components/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "The home page of the application.",
};

export default function Page() {
  return <Home />;
}
