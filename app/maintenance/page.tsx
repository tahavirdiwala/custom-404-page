import { Metadata } from "next";
import MaintenancePage from "@/components/pages/maintenance";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "The maintenance page of the application.",
};

export default function Maintenance() {
  return <MaintenancePage />;
}
