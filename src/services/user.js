// import { stringify } from 'qs';
import axios from '../utils/axios';
// import axios from 'axios';

export async function list(params) {
  return axios('/user/list', {
    method: 'POST ',
    data: {
      ...params,
    },
  });
}
export async function query(params) {
  return axios(`/user/${params.id}`, { method: 'GET' });
}
export async function add(params) {
  return axios('/user', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
export async function edit(params) {
  return axios(`/user/${params.key}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}
export async function remove(params) {
  return request(`/user/${params.key}`, {
    method: 'DELETE',
  });
}
