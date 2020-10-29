import React, { useState } from "react";

// from https://joshwcomeau.com/react/the-perils-of-rehydration/

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export default useHasMounted;
