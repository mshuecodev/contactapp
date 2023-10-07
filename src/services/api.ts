import axios from 'axios';

// ===> api create
const api = axios.create({
  baseURL: 'http://192.168.110.59:100/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // json: true
});

// endpoints
const getContacts = () => api.get(`/contact`, data);
const getDetail = (id: String) => api.get(`/contact/` + id);
const createContact = (data: any) => api.post(`/contact`, data);
const updateContact = (id: String, data: any) =>
  api.put(`/contact/` + id, data);
const deleteContact = (id: String) => api.delete(`/contact/` + id);

export const apis = {
  getContacts,
  getDetail,
  createContact,
  updateContact,
  deleteContact,
};

export default apis;
