"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ROUTES } from "@/lib/constant";
import { useRouter } from "next/navigation";

export default function Home() {
  const [maintenanceMode, setMaintenanceMode] = useState<boolean>(
    JSON.parse(process.env.NEXT_PUBLIC_MAINTENANCE_MODE || "false")
  );
  const router = useRouter();

  const handleToggleMaintenanceMode = (checked: boolean) => {
    if (checked) {
      router.replace(ROUTES.MAINTENANCE);
    }
    setMaintenanceMode((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          id="maintenanceMode"
          name="maintenanceMode"
          checked={maintenanceMode}
          onCheckedChange={handleToggleMaintenanceMode}
        />
        <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
      </div>
    </div>
  );
}
