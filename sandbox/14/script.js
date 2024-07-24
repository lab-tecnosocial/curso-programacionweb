document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const close = document.querySelector(".close");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");

    let currentIndex;

    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = item.src;
            currentIndex = index;
        });
    });

    close.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
        lightboxImg.src = galleryItems[currentIndex].src;
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
        lightboxImg.src = galleryItems[currentIndex].src;
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
