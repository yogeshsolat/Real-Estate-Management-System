import axios from "axios";
import config from "./config";

export async function register(user){

    const response = await axios.post(`${config.url}/users/registeruser`,user)

    return response
}

export async function login (email, password){

    const body ={
        email,
        password
    }

    const response = await axios.post(`${config.url}/users/signin`, body)

    return response.data

}