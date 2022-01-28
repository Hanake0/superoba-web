import { search } from './busca';

import axios from 'axios';

const api = axios.create({
	baseURL: 'https://superoba.com.br/api/',
	headers: {
		'Content-Type': 'application/json',
		'User-Agent': 'SuperOba-Api-Client',
	},
});

const consinco = { api, search };
export default consinco;
