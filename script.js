// script.js
const book = document.getElementById('book');
const pageNumber = document.getElementById('pageNumber');
const progressFill = document.getElementById('progressFill');
const menuOverlay = document.getElementById('menuOverlay');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const images = [
    'img/P1-Front-Page.webp',
    'img/P2-Soup-Page.webp',
    'img/P3-Starters-Page.webp',
    'img/P4-Starters-Page.webp',
    'img/P5-Tandoori-Page.webp',
    'img/P6-Biryani-Page.webp',
    'img/P7-Bucket-Page.webp',
    'img/P8-Roti&Naan-Page.webp',
    'img/P9-Gravy-Page.webp',
    'img/P10-FridedRice-Page.webp',
    'img/P11-Combo-Page.webp',
    'img/P12-Back-Page.webp',
    // Add all image paths here
];
let currentPage = 0;

function renderPages() {
    book.innerHTML = '';  // Clear previous content

    // Create the current and next page
    const currentPageDiv = document.createElement('div');
    currentPageDiv.className = 'page';
    const currentImg = document.createElement('img');
    currentImg.src = images[currentPage];
    currentPageDiv.appendChild(currentImg);

    const nextPageDiv = document.createElement('div');
    nextPageDiv.className = 'page';
    const nextImg = document.createElement('img');
    nextImg.src = images[currentPage + 1] || images[currentPage];
    nextPageDiv.appendChild(nextImg);

    book.appendChild(currentPageDiv);
    book.appendChild(nextPageDiv);

    // Update page number and progress
    pageNumber.textContent = `Page ${currentPage + 1} / ${images.length}`;
    progressFill.style.width = `${((currentPage + 1) / images.length) * 100}%`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < images.length - 1) {
        currentPage++;
        book.classList.add('flipped');
        setTimeout(() => {
            renderPages();
            book.classList.remove('flipped');
        }, 800);
    }
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        book.classList.add('flipped');
        setTimeout(() => {
            renderPages();
            book.classList.remove('flipped');
        }, 800);
    }
});

// Menu functionality
openMenu.addEventListener('click', () => {
    menuOverlay.style.display = 'flex';
    setTimeout(() => {
        menuOverlay.style.opacity = '1';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menuOverlay.style.opacity = '0';
    setTimeout(() => {
        menuOverlay.style.display = 'none';
    }, 300);
});

document.querySelectorAll('.menu-content ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = parseInt(e.target.dataset.page);
        renderPages();
        menuOverlay.style.opacity = '0';
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 300);
    });
});

// Initial render
renderPages();
