const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnOpenModal = $(".open-modal");
const modalOverlay = $(".modal-overlay");
const btnClose = $(".close-btn");

btnOpenModal.onclick = function() {
   document.body.style.overflow = "hidden";
   modalOverlay.classList.add("show");
}

btnClose.onclick = function(event) {
   const modal = event.target.closest(".modal-overlay")
   if (modal) {
      modal.classList.remove("show");
   }
};
