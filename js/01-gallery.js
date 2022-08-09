import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
// console.log(createGalleryCard(galleryItems))

const galleryContainer = document.querySelector('.gallery');
const galleryMurkup = createGalleryCard(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMurkup)


function createGalleryCard(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
        return `
            <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
                `
    }).join('');
    
};

