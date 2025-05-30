"use client";
import { ROUTES } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * @description useMaintenance hook
 * @returns {Object} { checked: boolean, handleToggle: () => void }
 */
const useMaintenance = () => {
  const [maintenanceMode, setMaintenanceMode] = useState<boolean>(
    JSON.parse(process.env.NEXT_PUBLIC_MAINTENANCE_MODE || "false")
  );
  const router = useRouter();

  const handleToggle = (checked: boolean) => {
    if (checked) router.replace(ROUTES.MAINTENANCE);
    setMaintenanceMode((prev) => !prev);
  };

  return { checked: maintenanceMode, handleToggle };
};

export { useMaintenance };
