import axios from "axios";

const REST_BASE_URL = "http://localhost:8080/api";

export let createRequest = (url, data) => axios.post(REST_BASE_URL + url, data);

export let getRequest = (url) => axios.get(REST_BASE_URL + url);
