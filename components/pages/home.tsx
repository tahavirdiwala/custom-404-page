"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMaintenanceMode = JSON.parse(
      process.env.NEXT_PUBLIC_MAINTENANCE_MODE || "false"
    );
    setMaintenanceMode(checkMaintenanceMode);
    if (maintenanceMode) {
      router.replace("/maintenance");
    }
  }, [maintenanceMode]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          name="c1"
          id="c1"
          checked={maintenanceMode}
          onCheckedChange={() => setMaintenanceMode((prev) => !prev)}
        />
        <p>Maintenance Mode</p>
      </div>
    </div>
  );
}
