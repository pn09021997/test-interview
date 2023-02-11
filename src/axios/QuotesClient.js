import axios from 'axios';
export const QuotesClient = axios.create({
	baseURL: 'https://reqres.in/api/',
	timeout: 8000,
	headers: {
		Accept: 'application/json',
		'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
		'x-rapidapi-key': '<your-key-here>',
	},
});