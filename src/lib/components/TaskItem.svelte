<script lang="ts">
	type TaskItemProps = {
		id?: string;
		title?: string;
		done?: boolean;
		onToggle?: () => void;
	};

	let { id, title = 'Taak', done = false, onToggle = () => {} } = $props();
	$inspect({ id, title, done });
</script>

<li>
	<span class:done={done}>{title}</span>
	<button
		type="button"
		onclick={() => onToggle?.()}
		aria-label={done ? 'Markeer taak als open' : 'Markeer taak als afgerond'}
	>
		{done ? 'Maak opnieuw open' : 'Markeer als afgerond'}
	</button>
</li>

<style>
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid #ddd;
	}

	.done {
		text-decoration: line-through;
		opacity: 0.7;
	}

	button {
		padding: 0.4rem 0.8rem;
		border: none;
		border-radius: 6px;
		background: #2563eb;
		color: white;
		cursor: pointer;
	}
</style>
