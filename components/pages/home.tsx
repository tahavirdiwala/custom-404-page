"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useMaintenance } from "@/hooks";

export default function Home() {
  const maintenance = useMaintenance();

  return (
    <div className="flex items-center justify-center gap-2 h-screen">
      <Checkbox
        id="maintenanceMode"
        name="maintenanceMode"
        checked={maintenance.checked}
        onCheckedChange={maintenance.handleToggle}
      />
      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
    </div>
  );
}
