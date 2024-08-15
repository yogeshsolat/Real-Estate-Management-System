import axios from "axios"
import config from "./config"



export async function ownerRegister(owner){

    const response = await axios.post(`${config.url}/owner`,owner)

    return response
}