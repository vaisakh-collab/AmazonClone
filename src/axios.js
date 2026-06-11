import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/e-clone-ada38/us-central1/api' //API (cloud function) URL
});

export default instance;