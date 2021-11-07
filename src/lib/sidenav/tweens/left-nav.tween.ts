import { tweened } from 'svelte/motion';
import { quintInOut } from 'svelte/easing';

export const LEFT_NAV_WIDTH = 300;
export const leftNavTween = tweened<number>(0, {
	duration: 300,
	easing: quintInOut
});
