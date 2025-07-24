const codeInput = document.querySelector("#editor-input");
const previewFrame = document.querySelector("#preview-frame");
const contextMenu = document.querySelector(".context-menu");

codeInput.addEventListener("input", function(event) {
    const editor = event.target.value;
    const codePreview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    codePreview.open();
    codePreview.write(editor);
    codePreview.close();
})

codeInput.oncontextmenu = (event) => {
    event.preventDefault();
    contextMenu.style.display = "block";
    Object.assign(contextMenu.style, {
        top: event.clientY + "px",
        left: event.clientX + "px"
    });
}

document.onmousedown = () => {
    contextMenu.style.display = "none";
}