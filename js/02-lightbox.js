import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const galleryMurkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkup)

function createGalleryCard(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
                `
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});