import { json } from '@sveltejs/kit';

const afspraken = [
	{
		id: 1,
		titel: 'Project kickoff',
		datum: '2026-09-20',
		tijd: '09:00',
		locatie: 'Teams',
		onderwerp: 'Start van het project en doelen bespreken.'
	},
	{
		id: 2,
		titel: 'Sprint review',
		datum: '2026-09-22',
		tijd: '13:30',
		locatie: 'Kantoor A1',
		onderwerp: 'Resultaten van deze sprint presenteren en feedback verzamelen.'
	},
	{
		id: 3,
		titel: 'Design review',
		datum: '2026-09-24',
		tijd: '15:00',
		locatie: 'Vergaderruimte 3',
		onderwerp: 'UI-ontwerp en flow controleren met stakeholders.'
	}
];

export const GET = async () => {
	return json(afspraken);
};
