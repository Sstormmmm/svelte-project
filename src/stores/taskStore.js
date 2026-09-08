import { writable } from 'svelte/store';

/**
 * @typedef {{ id: string, title: string, done: boolean }} Task
 */

const createTaskStore = () => {
	/** @type {Task[]} */
	const initialTasks = [];
	const { subscribe, update, set } = writable(initialTasks);

	/**
	 * @param {string} title
	 */
	const addTask = (title) => {
		const trimmedTitle = title?.trim();
		if (!trimmedTitle) return;

		update((currentTasks) => [
			...currentTasks,
			{ id: crypto.randomUUID(), title: trimmedTitle, done: false }
		]);
	};

	/**
	 * @param {string} id
	 */
	const removeTask = (id) => {
		update((currentTasks) => currentTasks.filter((task) => task.id !== id));
	};

	const clear = () => set([]);

	return {
		subscribe,
		addTask,
		removeTask,
		clear
	};
};

export const tasks = createTaskStore();
