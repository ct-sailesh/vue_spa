import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'; // Replace with your API base URL

// GET request function
export async function getReq(endpoint) {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
}

// POST request function
export async function postReq(endpoint, data) {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
}

// Add more reusable functions as needed
