import * as React from "react";

const MOBILE_BREAKPOINT = 768;
/**
 * A React hook that detects whether the current viewport is mobile-sized.
 *
 * Uses a breakpoint of 768px to determine mobile vs desktop. The hook listens
 * for window resize events and updates accordingly. Initially returns `false`
 * during server-side rendering to prevent hydration mismatches.
 *
 * @returns {boolean} `true` if the viewport width is less than 768px, `false` otherwise
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? (
 *         <MobileNavigation />
 *       ) : (
 *         <DesktopNavigation />
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
