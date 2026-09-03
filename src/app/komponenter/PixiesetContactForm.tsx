"use client"

import { useEffect } from "react";

export default function PixieForm() {
    useEffect(() => {
        const script = document.createElement("script");

        script.src=
        "https://fotografmonikasaele.pixieset.com/contact-form/cf_chGiGAW7KM4pes6rEUSBvDKYUChl/embed";

        script.type = "text/javascript";
        script.async = true;

        document.body.append(script);


    return () => {
        document.body.removeChild(script);

        
    };
}, []);

return <div id="pixieset-contact-form"></div>

}