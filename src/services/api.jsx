import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitReferral = async (referralData) => {
  try {
    const response = await api.post('/referrals', referralData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReferrals = async () => {
  try {
    const response = await api.get('/referrals');
    return response.data;
  } catch (error) {
    throw error;
  }
};