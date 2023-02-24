import { galleryItems } from "./gallery-items.js";

    function makeLinkGalleryItem(galleryItems) {
      return galleryItems
        .map(({ preview, original, description }) => {
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
    `;
        })
        .join("");
};

const containerOfGallery = document.querySelector(".gallery");
const galleryMarkup = makeLinkGalleryItem(galleryItems);

containerOfGallery.insertAdjacentHTML("beforeend", galleryMarkup);

containerOfGallery.addEventListener("click", onlinkClick);

function onlinkClick(evt) {
  // Заборонити стандаотні дії
    evt.preventDefault();
    
  if (evt.target.nodeName !== "IMG") {
    return;
    }
    
  // Відкриття бібліотеки basicLightbox та шлях до джерела.
    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}">`);
    
    instance.show();
    
    // Закриття бібліотеки
    containerOfGallery.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
};