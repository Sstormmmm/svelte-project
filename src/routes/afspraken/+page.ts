import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/afspraken');

	if (!response.ok) {
		throw error(500, 'Kon afspraken niet ophalen');
	}

	const afspraken = await response.json();

	return {
		afspraken
	};
};
