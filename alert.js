(() => {
    function showNotice() {
        if (!document.body) {
            setTimeout(showNotice, 10);
            return;
        }

        document.documentElement.style.display = "";

        const overlay = document.createElement("div");

        overlay.innerHTML = `
            <div style="
                position: fixed;
                inset: 0;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999999;
                font-family: Arial, sans-serif;
            ">
                <div style="
                    width: min(90%, 500px);
                    text-align: center;
                    color: black;
                ">
                    <h2>MAKE SURE THIS SITE IS USING HTTP:// NOT HTTPS://</h2>

                    <p>
                        Make sure the address at the top of your browser starts with
                        <strong>http://</strong> and not <strong>https://</strong>.
                    </p>

                    <p>
                        The game uses a <strong>ws://</strong> WebSocket connection,
                        so it needs to be opened from an HTTP page.
                    </p>

                    <p>
                        To download the HTML file, click the button below.
                        Depending on your browser or network, opening the downloaded
                        file may require a workaround.
                    </p>

                    <p>
                        <strong>
                            If your HTML file is blocked, bookmark the file URL,
                            then double-click the bookmark. The site should then
                            open normally. Refer to the Google Doc for more info.
                        </strong>
                    </p>

                    <a
                        href="https://tinyurl.com/ibwmcsmp"
                        download
                        style="
                            display: inline-block;
                            margin: 8px;
                            padding: 10px 18px;
                            background: black;
                            color: white;
                            text-decoration: none;
                            border-radius: 4px;
                        "
                    >
                        Get the HTML file
                    </a>

                    <p>
                        All news, instructions, and unblocked URLs are available on
                        this Google Doc:
                    </p>

                    <a
                        href="https://docs.google.com/document/d/1t54DGbo2r-fcKp5vmh1ih3SAbyEUh9DVBmBj3dKMjZM/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display: inline-block;
                            margin: 8px;
                            padding: 10px 18px;
                            background: black;
                            color: white;
                            text-decoration: none;
                            border-radius: 4px;
                        "
                    >
                        Open Google Doc
                    </a>

                    <p>
                        Check the Google Doc if something goes wrong or you need
                        another unblocked URL.
                    </p>

                    <br>

                    <button
                        id="continueButton"
                        type="button"
                        style="
                            margin-top: 8px;
                            padding: 9px 16px;
                            background: white;
                            color: black;
                            border: 1px solid #999;
                            border-radius: 4px;
                            cursor: pointer;
                        "
                    >
                        Continue Anyway
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("continueButton").addEventListener("click", () => {
            overlay.remove();
        });
    }

    document.documentElement.style.display = "none";

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showNotice, { once: true });
    } else {
        showNotice();
    }
})();
