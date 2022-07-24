// Add imports above this line

import SimpleLightbox  from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryItems.forEach(createGalleryItem);

function createGalleryItem ({ preview, original, description }) {
  galleryRef.insertAdjacentHTML('beforeend',
    `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`); 

}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});