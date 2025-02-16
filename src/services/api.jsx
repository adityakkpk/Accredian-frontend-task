import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

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