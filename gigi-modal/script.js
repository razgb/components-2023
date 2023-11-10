const btnOpenModal = document.querySelector(".btn-gigi");
const btnCloseModal = document.querySelector(".modal__icon");
const modalOverlay = document.querySelector(".overlay");

const toggleModal = () => {
  const modal = document.querySelector(".modal");
  btnOpenModal.classList.toggle("hidden");
  modal.classList.toggle("hidden");
  modalOverlay.classList.toggle("hidden");
};

btnOpenModal.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);
