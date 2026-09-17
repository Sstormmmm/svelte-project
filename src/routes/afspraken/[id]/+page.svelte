<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let afspraak = $derived(data.afspraak);
</script>

<svelte:head>
	<title>{afspraak?.titel ?? 'Afspraak'}</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-4 py-10">
	<a href="/afspraken" class="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline">
		← Terug naar afspraken
	</a>

	{#if afspraak}
		<article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
			<p class="text-sm font-semibold uppercase tracking-wide text-blue-600">
				{afspraak.datum} · {afspraak.tijd}
			</p>
			<h1 class="mt-3 text-3xl font-bold text-slate-800">{afspraak.titel}</h1>

			<div class="mt-6 space-y-3 text-slate-700">
				<p><strong>Locatie:</strong> {afspraak.locatie}</p>
				<p><strong>Onderwerp:</strong> {afspraak.onderwerp}</p>
			</div>
		</article>
	{:else}
		<p class="text-slate-600">Afspraak niet gevonden.</p>
	{/if}
</div>
