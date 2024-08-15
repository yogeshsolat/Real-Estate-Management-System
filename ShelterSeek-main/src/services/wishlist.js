import axios from "axios";
import config from "./config";

export async function addToList(uid,pid){
    try {
        const response = await axios.post(`${config.url}/api/wishlist/${uid}/add/${pid}`);
    return response.data
    } catch (error) {
        console.error('error to add in wishlist: ', error);
        throw error;
    }
}

export async function getWishList(uid){
    try {
        const response = await axios.get(`${config.url}/api/wishlist/${uid}`);
    return response.data
    } catch (error) {
        console.error('error to add in wishlist: ', error);
        throw error;
    }
}

export async function delWishlist(uid,pid){
    try{
        const response = await axios.delete(`${config.url}/api/wishlist/${uid}/${pid}`);
        return response.data
    } catch (error) {
        console.error('error to delete from wishlist: ', error);
        throw error;
    }
}
