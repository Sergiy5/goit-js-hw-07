import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function makeLinkGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    `;
    })
    .join("");
}

const listOfGallery = document.querySelector(".gallery");
const galleryMarkup = makeLinkGalleryItem(galleryItems);

listOfGallery.insertAdjacentHTML("beforeend", galleryMarkup);

// SimpleLightbox in work
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});





