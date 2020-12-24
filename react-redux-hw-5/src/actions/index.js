import {GET_PHOTOS, LOGIN, LOGOUT } from '../actionTypes'
import InstagramService from '../services/InstagramService';

const client = new InstagramService();

export const login = async (username, password) => {
  let data = await client.login(username, password);
  return { type: LOGIN, payload: data }
};

export const logout = () => ({ type: LOGOUT });

export const getPhotos = async (username) => {
  let data = await client.getPhotos(username);
  return { type: GET_PHOTOS, payload: data }
};