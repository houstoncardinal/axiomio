import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that automatically scrolls to the top of the page
 * when the route changes. This ensures a consistent UX across page navigations.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior for modern browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use instant for route changes to avoid jarring delay
    });
  }, [pathname]);

  return null;
}
