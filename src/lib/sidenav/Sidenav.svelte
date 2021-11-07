<script lang="ts">
	import { page } from '$app/stores';
	import { leftNavTween } from './tweens/left-nav.tween';
</script>

<aside
	class="smallest:absolute tablet:static bg-gray-200"
	style="width: {$leftNavTween}px; min-width: {$leftNavTween}px"
>
	<nav class="text-xl">
		<ul class="px-6 py-8 font-bold text-[#00F] p-2">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/intro'}><a sveltekit:prefetch href="/intro">Intro</a></li>
		</ul>
	</nav>
</aside>

<style>
	aside {
		overflow-x: hidden;
		height: calc(100vh - 64px);
	}
</style>
