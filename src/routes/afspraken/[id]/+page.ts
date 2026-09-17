import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/afspraken/${params.id}`);

	if (!response.ok) {
		throw error(404, 'Afspraak niet gevonden');
	}

	const afspraak = await response.json();

	return {
		afspraak
	};
};
