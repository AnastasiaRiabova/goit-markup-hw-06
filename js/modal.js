const { openModalBtn, backdrop, closeModalBtn, modal } = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
};

const toggleModal = () => modal.classList.toggle('is-hidden');


const handleBackdropClick = (event) => {
    if (event.target === backdrop) {
        toggleModal();
    }
}

const handleKeyDown = (event) => {
    if (event.code === 'Escape' && !modal.classList.contains('is-hidden')) {
        toggleModal();
    }
}


openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
backdrop.addEventListener('click', handleBackdropClick);
window.addEventListener('keydown', handleKeyDown);