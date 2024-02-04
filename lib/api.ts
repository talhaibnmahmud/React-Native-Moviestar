import { env } from "~/utils/env";

const API_BASE_URL = "https://api.themoviedb.org";
const API_VERSION = "3";
const API_URL = `${API_BASE_URL}/${API_VERSION}`;

const ACCESS_TOKEN = env.EXPO_PUBLIC_API_ACCESS_TOKEN;

export const fetchTrendingMovies = async (page: number = 1) => {
	const queryParams = new URLSearchParams({
		page: page.toString(),
		language: "en-US",
	});
	const url = `${API_URL}/trending/movie/day?${queryParams.toString()}`;
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
	});
	const data = await response.json();
	return data;
};

export const fetchMovieDetails = async (movieId: number) => {
	const response = await fetch(`${API_URL}/movie/${movieId}?language=en-US`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
	});
	const data = await response.json();
	return data;
};

export const searchMovies = async (
	query: string,
	page: number = 1,
	adult: boolean = true
) => {
	console.log("searchMovies", query, page, adult);

	const encodedQuery = encodeURIComponent(query);
	const queryParams = new URLSearchParams({
		query: encodedQuery,
		page: page.toString(),
		language: "en-US",
		include_adult: adult.toString(),
	});
	const url = `${API_URL}/search/movie?${queryParams.toString()}`;
	const response = await fetch(url, {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
	});
	const data = await response.json();
	return data;
};
