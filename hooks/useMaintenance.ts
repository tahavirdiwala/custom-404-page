"use client";
import { ROUTES } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * Custom hook for managing application maintenance mode state.
 *
 * This hook handles the maintenance mode toggle functionality, including:
 * - Reading initial state from environment variables
 * - Managing local maintenance mode state
 * - Handling navigation to maintenance page when enabled
 *
 * @returns {Object} An object containing maintenance mode controls
 * @returns {boolean} returns.checked - Current maintenance mode state
 * @returns {function} returns.handleToggle - Function to toggle maintenance mode
 *
 * @example
 * ```tsx
 * const { checked, handleToggle } = useMaintenance();
 *
 * return (
 *   <Switch
 *     checked={checked}
 *     onChange={handleToggle}
 *     label="Maintenance Mode"
 *   />
 * );
 * ```
 *
 * @requires NEXT_PUBLIC_MAINTENANCE_MODE - Environment variable for initial state
 * @requires ROUTES.MAINTENANCE - Route constant for maintenance page
 *
 * @sideEffect Navigates to maintenance page when maintenance mode is enabled
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
