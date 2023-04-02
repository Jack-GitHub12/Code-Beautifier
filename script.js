document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("themeSwitch");
    const inputCode = document.getElementById("inputCode");
    const outputCode = document.getElementById("outputCode");
    const beautifyBtn = document.getElementById("beautifyBtn");
    const clearBtn = document.getElementById("clearBtn");
    const pasteBtn = document.getElementById("pasteBtn");
    const copyBtn = document.getElementById("copyBtn");

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        outputCode.parentElement.classList.toggle("dark-mode");
    });

    beautifyBtn.addEventListener("click", () => {
        const code = inputCode.value;
        const beautifiedCode = js_beautify(code);
        outputCode.textContent = beautifiedCode;
        hljs.highlightBlock(outputCode);
    });

    clearBtn.addEventListener("click", () => {
        inputCode.value = "";
        outputCode.textContent = "";
    });

    pasteBtn.addEventListener("click", async () => {
        try {
            const text = await navigator.clipboard.readText();
            inputCode.value = text;
        } catch (err) {
            console.error("Failed to read clipboard contents: ", err);
        }
    });

    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(outputCode.textContent);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    });
});
