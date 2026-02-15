import { useEffect, useRef } from "react";

const BizeKatil = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Listen for resize messages from the form iframe
        const handleMessage = (event) => {
            if (iframeRef.current && event.data) {
                // Handle various auto-resize message formats
                if (event.data.type === "resize" && event.data.height) {
                    iframeRef.current.style.height = event.data.height + "px";
                } else if (typeof event.data === "string") {
                    try {
                        const parsed = JSON.parse(event.data);
                        if (parsed.height) {
                            iframeRef.current.style.height = parsed.height + "px";
                        }
                    } catch {
                        // not a JSON message, ignore
                    }
                }
            }
        };

        window.addEventListener("message", handleMessage);

        // Load the auto-resize script from the form provider's domain
        const script = document.createElement("script");
        script.src = "https://form.gazisiber.org/widgets/iframe.min.js";
        script.type = "text/javascript";
        script.onload = () => {
            if (window.initEmbed) {
                window.initEmbed("alim-formu", { autoResize: true });
            }
        };
        document.body.appendChild(script);

        return () => {
            window.removeEventListener("message", handleMessage);
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-16">
            <div className="container my-16">
                <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
                    Bize Katıl
                </h3>

                <div className="w-full max-w-4xl mx-auto mt-16">
                    <iframe
                        ref={iframeRef}
                        style={{
                            border: "none",
                            width: "100%",
                            height: "4000px",
                            colorScheme: "normal",
                        }}
                        id="alim-formu"
                        src="https://form.gazisiber.org/forms/alim-formu"
                        title="Alım Formu"
                    />
                </div>
            </div>
        </section>
    );
};

export default BizeKatil;
