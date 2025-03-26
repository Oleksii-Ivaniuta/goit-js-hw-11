import FetchData from './js/pixabay-api';
import RenderSlb from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//find elements set all relations to elements
const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
const input = form.elements[0];
const btn = form.elements[1];
const loader = document.querySelector(".loader");
loader.style.display = "none";

// new instance of the class FetchData from paxabay api
const fetchPhoto = new FetchData({});

// set standart params for pixabay-api described in homework
fetchPhoto.key = "49512194-f753c2f34a7e7dbbd609db53f";
fetchPhoto.q = "";
fetchPhoto.imageType = "photo";
fetchPhoto.orientation = "horizontal";
fetchPhoto.safesearch = true;
fetchPhoto.url = "https://pixabay.com/api/";

// create new instance for rendering pictures on our page
const renderPhoto = new RenderSlb([]);

// making gallery using input value
btn.addEventListener("click", makeGallery);

function makeGallery(event) {
    event.preventDefault();
    renderPhoto.renderDiv = gallery;
    loader.style.display = "flex";
    fetchPhoto.q = input.value;
    input.value = "";
    // check for empty query
    if (fetchPhoto.q === "") {
        iziToast.warning({
            message: 'Write your something you want to see',
            position: 'topRight',
        });
        loader.style.display = "none";
        return;
    };
    // make request from server
    fetchPhoto.getData()
        .then(data => {
        // check for pictures avalible
        if (data.data.hits.length === 0) {
            loader.style.display = "none";
            iziToast.warning({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            });
            input.value = "";
            fetchPhoto.q = "";
            return;
        }
        renderPhoto.array = data.data.hits;
        renderPhoto.createMarkup(renderPhoto.array);
            loader.style.display = "none";
            input.value = "";
            fetchPhoto.q = "";
            return;
        })
        .catch(error => {
        iziToast.error({
            message: "Bad request",
            position: "topRight",
            }); 
            loader.style.display = "none";
            input.value = "";
            fetchPhoto.q = "";
        return;
    });
    
}


