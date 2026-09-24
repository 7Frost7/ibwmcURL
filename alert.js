(function () {
    function showNotice() {
        if (!document.body) {
            setTimeout(showNotice, 10);
            return;
        }

        document.documentElement.style.display = "";

        var overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.background = "white";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "999999";
        overlay.style.fontFamily = "Arial, sans-serif";

        var box = document.createElement("div");

        box.style.width = "min(90%, 500px)";
        box.style.textAlign = "center";
        box.style.color = "black";

        box.innerHTML =
            '<h2>MAKE SURE THIS SITE IS USING HTTP:// NOT HTTPS://</h2>' +
            '<p>Make sure the address at the top of your browser starts with <strong>http://</strong> and not <strong>https://</strong>.</p>' +
            '<p>The game uses a <strong>ws://</strong> WebSocket connection, so it needs to be opened from an HTTP page.</p>' +
            '<p>To download the HTML file, click the button below.<br>' +
            '<strong>If your HTML file is blocked, bookmark the file URL, then double-click the bookmark. The site should then open normally. Refer to the Google Doc for more info.</strong></p>' +
            '<a href="https://tinyurl.com/ibwmcsmp" download style="display:inline-block;margin:8px;padding:10px 18px;background:black;color:white;text-decoration:none;border-radius:4px;">Get the HTML file</a>' +
            '<p>All news, instructions, and unblocked URLs are available on this Google Doc:</p>' +
            '<a href="https://docs.google.com/document/d/1t54DGbo2r-fcKp5vmh1ih3SAbyEUh9DVBmBj3dKMjZM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:8px;padding:10px 18px;background:black;color:white;text-decoration:none;border-radius:4px;">Open Google Doc</a>' +
            '<br>' +
            '<button id="continueButton" type="button" style="margin-top:8px;padding:9px 16px;background:white;color:black;border:1px solid #999;border-radius:4px;cursor:pointer;">Continue Anyway</button>';

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        document.getElementById("continueButton").onclick = function () {
            overlay.remove();
        };
    }

    document.documentElement.style.display = "none";

    showNotice();
})();
