(() => {
    const FILE_URL = "file:///media/fuse/drivefs-03e39e82743198ebf71d588a4f41efa1/.files-by-id/5377/Eaglercraft_1.14.4_WASM%20U1%20%5Bauto%20server%20list%5D.html";
    const DOC_URL = "https://docs.google.com/document/d/1t54DGbo2r-fcKp5vmh1ih3SAbyEUh9DVBmBj3dKMjZM/edit?usp=sharing";

    function showNotice() {
        if (!document.body) {
            document.addEventListener("DOMContentLoaded", showNotice, { once: true });
            return;
        }

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
                overflow-y: auto;
                box-sizing: border-box;
            ">
                <div style="
                    width: min(92%, 650px);
                    text-align: center;
                    color: #111;
                    padding: 35px 20px;
                    box-sizing: border-box;
                ">
                    <h1 style="
                        font-size: clamp(30px, 6vw, 50px);
                        line-height: 1.1;
                        margin: 0 0 25px;
                    ">
                        If your HTML file is blocked,<br>
                        bookmark the file URL
                    </h1>

                    <p style="
                        font-size: 18px;
                        line-height: 1.5;
                        margin: 0 0 15px;
                    ">
                        Bookmark this file URL, then double-click the bookmark
                        whenever you want to open the site.
                    </p>

                    <div style="
                        background: #f3f3f3;
                        border: 1px solid #ccc;
                        border-radius: 6px;
                        padding: 14px;
                        margin: 20px 0;
                        text-align: left;
                        word-break: break-all;
                    ">
                        <code style="
                            font-size: 14px;
                            color: #222;
                        ">${FILE_URL}</code>
                    </div>

                    <button id="copyFileUrl" style="
                        padding: 10px 18px;
                        background: #111;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 15px;
                        margin-bottom: 25px;
                    ">
                        Copy File URL
                    </button>

                    <p style="
                        font-size: 17px;
                        line-height: 1.5;
                        margin: 10px 0 20px;
                    ">
                        All news, instructions, and unblocked URLs are available
                        on this Google Doc:
                    </p>

                    <a href="${DOC_URL}" target="_blank" rel="noopener noreferrer" style="
                        display: inline-block;
                        margin-bottom: 25px;
                        padding: 11px 18px;
                        background: #eee;
                        color: #111;
                        text-decoration: none;
                        border: 1px solid #bbb;
                        border-radius: 5px;
                        font-size: 16px;
                    ">
                        Open the Google Doc
                    </a>

                    <p style="
                        font-size: 16px;
                        line-height: 1.5;
                        color: #444;
                        margin: 0 0 25px;
                    ">
                        It is recommended that you bookmark this Google Doc
                        and check it whenever something goes wrong.
                    </p>

                    <button id="continueButton" style="
                        padding: 11px 18px;
                        background: white;
                        color: #111;
                        border: 1px solid #999;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 15px;
                    ">
                        Continue Anyway
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        document.getElementById("continueButton").addEventListener("click", () => {
            overlay.remove();
            document.documentElement.style.display = "";
        });

        document.getElementById("copyFileUrl").addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(FILE_URL);
                document.getElementById("copyFileUrl").textContent = "Copied!";
                setTimeout(() => {
                    document.getElementById("copyFileUrl").textContent = "Copy File URL";
                }, 1500);
            } catch {
                alert("Copy failed. Please manually copy the file URL.");
            }
        });
    }

    document.documentElement.style.display = "none";
    showNotice();
})();
