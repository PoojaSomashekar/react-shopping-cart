import axios from "axios";

const url = 'https://fakestoreapi.com/';

export const getMensClothing = () => {
  const uri = 'men\'s clothing'
  return axios.get(`https://fakestoreapi.com/products/category/${uri}`).then(cloths => cloths);
};

export const getWomensClothing = () => {
  const uri = 'women\'s clothing';
  return axios.get(`https://fakestoreapi.com/products/category/${uri}`).then(cloths => cloths);;
};

export const getJewelery = () => {
  return axios.get('https://fakestoreapi.com/products/category/jewelery').then(cloths => cloths);
};

export const getElectronics = () => {
  return axios.get('https://fakestoreapi.com/products/category/electronics').then(cloths => cloths);
};
