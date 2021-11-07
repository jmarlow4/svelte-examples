<script lang="ts">
	import { leftNavUserPref } from '$lib/sidenav/stores/left-nav.store';

	let leftNavIsOpen: boolean = true;
	leftNavUserPref.subscribe((leftNavUserPrefState) => {
		leftNavIsOpen = leftNavUserPrefState;
	});

	function toggleLeftNav() {
		if (leftNavIsOpen) {
			leftNavUserPref.set(false);
		} else {
			leftNavUserPref.set(true);
		}
	}
</script>

<header class="flex justify-between items-center bg-blue-300 p-4">
	<button class="flex bg-white px-4 py-1 rounded" on:click={toggleLeftNav}>Left</button>
	<button class="flex bg-white px-4 py-1 rounded">Right</button>
</header>
