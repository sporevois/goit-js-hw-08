// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', openOriginalImg);
galleryItems.forEach(createGalleryItem);

function createGalleryItem ({ preview, original, description }) {
  galleryRef.insertAdjacentHTML('beforeend',
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
    </div>`); 
}


function openOriginalImg(event) {
  event.preventDefault();
  const selectedItemUrl = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src=${selectedItemUrl} width="800" height="600">`
    , {
      onShow: () => {
        window.addEventListener('keydown', onEscBtnClick)
      },
      onClose: () => {
        window.removeEventListener('keydown', onEscBtnClick)
      }
    })
    instance.show()
  
  function onEscBtnClick(event) {
    event.code === 'Escape' && instance.close()
  }
}