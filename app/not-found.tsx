import NotFoundPage from "@/components/pages/not-found";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found (404)",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
