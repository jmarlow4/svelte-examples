<script lang="ts">
	import Sidenav from '$lib/sidenav/Sidenav.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Header from '$lib/header/Header.svelte';
</script>

<div class="flex flex-grow h-screen bg-green-300">
	<div class="flex-1 flex flex-col">
		<Header />
		<div class="flex w-full h-full">
			<Sidenav />
			<main
				class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto"
				style="height: calc(100vh - 64px);"
			>
				<div class="flex flex-grow h-full">
					<slot />
				</div>
				<Footer />
			</main>
			<nav class="flex w-72 bg-yellow-400" style="height: calc(100vh - 64px);">
				<div class=" flex mx-auto px-6 py-8">
					<div
						class=" h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed"
					>
						Rightbar
					</div>
				</div>
			</nav>
		</div>
	</div>
</div>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
