import { useEffect, useState } from "react";

/**
 * Usage:
 *  useMediaQuery('(max-width: 600px)');
 *  useMediaQuery('(orientation: portrait)');
 */

function useMediaQuery(query, initial = false) {
  const [matches, setMatches] = useState(initial);

  useEffect(() => {
    const matcher = window.matchMedia(query);
    setMatches(matcher.matches);

    function checkIsSmall(event) {
      setMatches(event.matches);
    }

    matcher.addEventListener("change", checkIsSmall);
    return () => matcher.removeEventListener("change", checkIsSmall);
  }, [query]);

  return matches;
}

export default useMediaQuery;
