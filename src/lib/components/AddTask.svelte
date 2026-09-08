<script>
	import { tasks } from '../../stores/taskStore.js';

	let text = $state('');
	let error = $state('');

	function validateAndAdd() {
		const trimmedText = text.trim();

		if (!trimmedText) {
			error = 'Voer een taak in.';
			return;
		}

		tasks.addTask(trimmedText);
		text = '';
		error = '';
	}
</script>

<form onsubmit={(event) => {
	event.preventDefault();
	validateAndAdd();
}}>
	<input bind:value={text} type="text" placeholder="Nieuwe taak..." />
	<button type="submit">Toevoegen</button>
</form>

{#if error}
	<p>{error}</p>
{/if}

<style>
	form {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	input {
		flex: 1;
		padding: 0.6rem 0.8rem;
	}

	button {
		padding: 0.6rem 1rem;
		cursor: pointer;
	}

	p {
		color: red;
		margin-top: 0.5rem;
	}
</style>
