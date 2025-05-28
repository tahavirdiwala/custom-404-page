import MaintenancePage from "@/components/pages/maintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance",
  description: "The maintenance page of the application.",
};

export default function Maintenance() {
  return <MaintenancePage />;
}
