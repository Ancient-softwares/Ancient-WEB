const btns = document.querySelectorAll("[data-target]");

const closeBtns = document.querySelectorAll(".modal-btn");

const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        overlay.classList.add('active');
    });
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove('active');
    });
});


