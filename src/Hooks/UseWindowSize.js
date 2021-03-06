import { useState, useLayoutEffect } from 'react';
/*
    Custom window sizing intended for the external calculator.
*/
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        size: undefined,
    });
    console.log(windowSize.width);
    useLayoutEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: (window.innerWidth > 950) ? "100%" : "320px",
                height: window.innerHeight,
                size: (window.innerWidth > 950) ? 1 : 5,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default useWindowSize;