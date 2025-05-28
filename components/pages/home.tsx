"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Safer environment variable handling
    const checkMaintenanceMode = () => {
      try {
        return (
          process.env.NEXT_PUBLIC_MAINTENANCE_MODE?.toLowerCase() === "true"
        );
      } catch (error) {
        console.error("Error parsing maintenance mode:", error);
        return false;
      }
    };

    const initialMode = checkMaintenanceMode();
    setMaintenanceMode(initialMode);
    setIsLoading(false);

    if (initialMode) {
      router.replace("/maintenance");
    }
  }, []);

  if (isLoading) {
    return null;
  }

  if (maintenanceMode) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2">
        <Checkbox
          name="c1"
          id="c1"
          checked={maintenanceMode}
          onCheckedChange={() => setMaintenanceMode(!maintenanceMode)}
        />
        <p>Maintenance Mode</p>
      </div>
    </div>
  );
}
