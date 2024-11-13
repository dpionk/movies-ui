import type { Movie } from '@/types/Movie';
import axios from 'axios';
;

const apiClient = axios.create({
	baseURL: `/api/Movie`,
	headers: {
		Accept: 'application/json',
        'Content-Type': 'application/json',
	}
});


export default {
    async getMovies(): Promise<Array<Movie>> {
        return await apiClient.get('/')
    },
    async deleteMovie(id: number): Promise<Array<Movie>> {
        return await apiClient.delete(`/${id}`);
    }
}
