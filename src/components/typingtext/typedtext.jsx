import React, { useEffect } from 'react';

function TypedText() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialize Typed.js once the script is loaded
            let typed = new Typed('.introName', {
                strings: ["Kupendra",],
                typeSpeed: 100,
                backSpeed: 90,
                loop: true
            });
        };

        return () => {
            // Cleanup code to remove the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return <div className="introName"></div>;
}

export default TypedText;
