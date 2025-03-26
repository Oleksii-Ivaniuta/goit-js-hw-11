import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// before creating markup, set the target directory using setter renderDiv().
class RenderSlb {
    #renderDiv
    constructor(params) {
        this.array = params;
        this.#renderDiv = null;
    }

    // setter for choose element to make new gallery
    set renderDiv(newDiv) {
        this.#renderDiv = newDiv;
    }

    // function for make markup and gallery
    createMarkup() {

        // clean list
        this.#renderDiv.innerHTML = "";

        // make new markup
        const markup = this.array.map(i => {
            return `<li class="gallery-item">
    <a href="${i.largeImageURL}"><img src="${i.webformatURL}" alt="${i.tags}" title=""/></a>
    <ul class="image-descr-list">
<li class="decr-item">Likes<span class="descr=span">${i.likes}</span></li>
<li class="decr-item">Views<span class="descr=span">${i.views}</span></li>
<li class="decr-item">Comments<span class="descr=span">${i.comments}</span></li>
<li class="decr-item">Downloads<span class="descr=span">${i.downloads}</span></li>
    </ul>
    </li>`
        }).join("");

        // add new markup to list
        this.#renderDiv.insertAdjacentHTML("beforeend", markup);

        // create gallery with simplelightbox
        let simplelightbox = new SimpleLightbox(".gallery-item a");
        simplelightbox.refresh();
    }
};

export default RenderSlb;


