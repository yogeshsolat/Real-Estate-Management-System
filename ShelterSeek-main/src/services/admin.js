import axios from 'axios';
import config from './config';  


export async function getAllUsers() {
    try {
        const response = await axios.get(`${config.url}/admin/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


export async function getAllOwners() {
    try {
        const response = await axios.get(`${config.url}/admin/owners`);
        return response.data;
    } catch (error) {
        console.error('Error fetching owners:', error);
        throw error;
    }
}


export async function blockUser(id) {
    try {
      // Adjust the URL to match the endpoint
      await axios.patch(`${config.url}/admin/block/${id}`);
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  }

  export async function unblockUser(id) {
    try {
      await axios.patch(`${config.url}/admin/unblock/${id}`); // Ensure the URL and endpoint match
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  }