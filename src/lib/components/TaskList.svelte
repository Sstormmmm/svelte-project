<script>
	import { tasks } from '../../stores/taskStore.js';

	/** @type {{ id: string, title: string, done: boolean }[]} */
	let taskList = $state([]);

	tasks.subscribe((value) => {
		taskList = value;
	});

	$inspect(taskList);

	/**
	 * @param {string} id
	 */
	function removeTask(id) {
		tasks.removeTask(id);
	}
</script>

<section>
	<h2>Mijn taken</h2>

	{#if taskList.length > 0}
		<ul>
			{#each taskList as task (task.id)}
				<li>
					<span>{task.title}</span>
					<button type="button" onclick={() => removeTask(task.id)}>Verwijderen</button>
				</li>
			{/each}
		</ul>
	{:else}
		<p>Geen taken beschikbaar.</p>
	{/if}
</section>

<style>
	section {
		max-width: 500px;
		margin: 2rem auto;
		padding: 1rem;
		font-family: sans-serif;
	}

	h2 {
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid #ddd;
	}

	button {
		padding: 0.4rem 0.75rem;
		cursor: pointer;
	}

	p {
		color: green;
		font-weight: 600;
	}
</style>
