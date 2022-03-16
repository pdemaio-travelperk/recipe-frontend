import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
const API = "recipes/"
const client = axios.create({baseURL: BASE_URL})

async function get(params) {
    let response = await client.get(API, {
        headers: {
            'Content-Type': 'application/json'
        }, params: params
    })

    return response.data;
}

function getUri(id) {
    return API + id + "/"
}

async function getById(id) {
    let response = await client.get(getUri(id), {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data;
}

async function save(data) {
    let response = await client.post(API, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data;
}

async function edit(id, data) {
    let response = await client.patch(getUri(id), data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data;
}

async function remove(id) {
    let response = await client.delete(getUri(id))
    return response.data
}

export default {get, getById, save, edit, remove}
