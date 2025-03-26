import axios from 'axios';
// You can use this class for make requests in pixabay.com, for get or set parameters you can use getters or setters of the parameter you need.
class FetchData {
  #q;
  #key;
  #image_type;
  #orientation;
  #safesearch;
  #url;

  constructor(params) {
    this.#q = params.q;
    this.#key = params.key;
    this.#image_type = params.image_type;
    this.#orientation = params.orientation;
    this.#safesearch = params.safesearch;
      this.#url = params.url;
  }

    // function for make request from server
  getData() {
    const params = {
      key: this.#key,
      q: this.#q,
      image_type: this.#image_type,
      orientation: this.#orientation,
        safesearch: this.#safesearch,
    };
      
    return axios.get(this.#url, { params });
  }
// get and set of query
  get q() {
    return this.#q;
  }
  set q(newQ) {
    this.#q = newQ;
  }
// get and set of your personal key
  get key() {
    return this.#key;
  }
  set key(newKey) {
    this.#key = newKey;
  }
// get and set of image type
  get imageType() {
    return this.#image_type;
  }
  set imageType(newImageType) {
    this.#image_type = newImageType;
  }
//get and set of image orientation
  get orientation() {
    return this.#orientation;
  }
  set orientation(newOrientation) {
    this.#orientation = newOrientation;
  }
// get and set of safeseach
  get safesearch() {
    return this.#safesearch;
  }
  set safesearch(newSafesearch) {
    this.#safesearch = newSafesearch;
  }
    // get and set of url
    get url() {
        return this.#url;
    }
    set url(newUrl) {
        this.#url = newUrl;
    }
}

export default FetchData;