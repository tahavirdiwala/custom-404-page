"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { ROUTES } from "@/lib/constant";

export default function Home() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMaintenanceMode = JSON.parse(
      process.env.NEXT_PUBLIC_MAINTENANCE_MODE || "false"
    );
    setMaintenanceMode(checkMaintenanceMode);
    if (maintenanceMode) router.replace(ROUTES.MAINTENANCE);
  }, [maintenanceMode]);

  const handleToggleMaintenanceMode = () => {
    setMaintenanceMode((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          name="c1"
          id="c1"
          checked={maintenanceMode}
          onCheckedChange={handleToggleMaintenanceMode}
        />
        <p className="cursor-pointer" onClick={handleToggleMaintenanceMode}>
          Mark this as Maintenance Mode
        </p>
      </div>
    </div>
  );
}
