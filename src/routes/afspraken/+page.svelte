<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let afspraken = $derived(data.afspraken ?? []);
</script>

<svelte:head>
	<title>Afspraken</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-10">
	<div class="mb-8">
		<h1 class="text-3xl font-bold text-slate-800">Afspraken</h1>
		<p class="mt-2 text-slate-600">Bekijk de planning voor de komende afspraken.</p>
	</div>

	{#if afspraken.length > 0}
		<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
			{#each afspraken as afspraak (afspraak.id)}
				<a
					href={`/afspraken/${afspraak.id}`}
					class="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<p class="text-xs font-semibold uppercase tracking-wide text-blue-600">
						{afspraak.datum}
					</p>
					<h2 class="mt-2 text-xl font-semibold text-slate-800">{afspraak.titel}</h2>
					<p class="mt-2 text-sm text-slate-600">{afspraak.locatie}</p>
					<p class="mt-4 text-sm text-slate-500">{afspraak.onderwerp}</p>
				</a>
			{/each}
		</div>
	{:else}
		<div class="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-slate-600">
			Geen afspraken gevonden.
		</div>
	{/if}
</div>
