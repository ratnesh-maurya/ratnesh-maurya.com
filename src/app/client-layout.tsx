"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
    interface Window {
        $crisp: unknown[];
        CRISP_WEBSITE_ID: string;
    }
}

// ✅ Move Crisp Chat to a separate function
const CrispChat = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Only initialize Crisp if not mobile
        if (!isMobile) {
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "c30f5b1d-7b09-4708-8b51-fda5cfb19206";
            (function () {
                const d = document;
                const s = d.createElement("script");
                s.src = "https://client.crisp.chat/l.js";
                s.async = true;
                d.getElementsByTagName("head")[0].appendChild(s);
            })();
        }

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkMobile);
            // Remove Crisp if it exists
            if (window.$crisp) {
                window.$crisp = [];
            }
        };
    }, [isMobile]);

    return null;
};

export default function ClientLayout() {
    return (
        <>
            {/* ✅ Google AdSense */}
            <Script
                strategy="afterInteractive"
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4886849425326339"
                crossOrigin="anonymous"
            />

            {/* ✅ Google Analytics */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-T13RLYDHMR"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T13RLYDHMR');
        `}
            </Script>

            {/* ✅ Crisp Chat - Only on Desktop */}
            <CrispChat />
        </>
    );
}
