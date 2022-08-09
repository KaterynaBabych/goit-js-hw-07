import { galleryItems } from './gallery-items.js';
// Change code below this line

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

galleryContainer.addEventListener('click', linkOriginal);

function linkOriginal(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
    return
    }

    const urlData = event.target.dataset.source
    console.log(urlData)

    const instance = basicLightbox.create(
    `
        <img src="${urlData}" width="800" height="600">
    `
    );
    
    instance.show()
    
   
};


