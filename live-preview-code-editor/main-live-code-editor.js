const codeInput = document.querySelector("#editor-input");
const previewFrame = document.querySelector("#preview-frame");
const contextMenu = document.querySelector(".context-menu");
let clipboardValue  = "";

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

document.addEventListener("mousedown", (event) => {
    if (event.button === 0 && !contextMenu.contains(event.target)) {
        contextMenu.style.display = "none";
    }
})

function handleCopy() {
    codeInput.addEventListener("select", (event) => {
            selectedText = event.target.value.substring(codeInput.selectionStart, codeInput.selectionEnd);
    })
}

contextMenu.onclick = (event) => {
    const context = event.target.closest("li");
    if (context.classList.contains("btn-delete")) {
        codeInput.value = "";
        const codePreview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        codePreview.open();
        codePreview.write("");
    }
    else if (context.classList.contains("btn-copy")) {
        const selectedText = codeInput.value.substring(codeInput.selectionStart, codeInput.selectionEnd);
        if (selectedText) {
            clipboardValue = selectedText;
        }
    }
    else if (context.classList.contains("btn-paste")) {
        codeInput.value = codeInput.value + clipboardValue;
        const codePreview = previewFrame.contentDocument || previewFrame.contentWindow.document;
        codePreview.open();
        codePreview.write(codeInput.value);
    }
    contextMenu.style.display = "none";
}