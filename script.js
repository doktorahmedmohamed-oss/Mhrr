const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const output = document.getElementById("output");

function runCode() {

    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    output.srcdoc = `
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}

            <div id="console" style="margin-top:20px;color:red;"></div>

            <script>
                console.log = function(msg){
                    document.getElementById("console").innerHTML += msg + "<br>";
                }

                try {
                    ${js}
                } catch(e){
                    console.log("Error: " + e);
                }
            <\/script>
        </body>
        </html>
    `;
}

htmlCode.addEventListener("input", runCode);
cssCode.addEventListener("input", runCode);
jsCode.addEventListener("input", runCode);

runCode();