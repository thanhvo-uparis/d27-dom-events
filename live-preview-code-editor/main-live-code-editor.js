const codeInput = document.querySelector("#codeInput");
const previewFrame = document.querySelector("#previewFrame");

codeInput.addEventListener("input", function(event) {
    const code = event.target.value;
    const codePreview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    codePreview.open();
    codePreview.write(code);
    codePreview.close();
})