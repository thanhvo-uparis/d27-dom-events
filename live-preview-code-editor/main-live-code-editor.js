const codeInput = document.querySelector("#editor-input");
const previewFrame = document.querySelector("#preview-frame");

codeInput.addEventListener("input", function(event) {
    const editor = event.target.value;
    const codePreview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    codePreview.open();
    codePreview.write(editor);
    codePreview.close();
})