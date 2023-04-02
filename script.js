document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("themeSwitch");
    const inputCode = document.getElementById("inputCode");
    const outputCode = document.getElementById("outputCode");
    const beautifyBtn = document.getElementById("beautifyBtn");

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
});