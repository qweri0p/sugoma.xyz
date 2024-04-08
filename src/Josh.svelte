<!-- all of this was written by chatgpt. idc it works so it stays -->
<!-- lmao -->

<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	const jumpscaretimer = 60e3; // 60 seconds

	let userInactive = false;
	let inactiveTimeout: number;

	// Function to reset the inactive state
	function resetInactiveState() {
		clearTimeout(inactiveTimeout);
		userInactive = false;
		// Restart the timer
		startInactiveTimer();
	}

	// Function to handle user activity
	function handleUserActivity() {
		if (userInactive) {
			resetInactiveState();
		}
	}

	// Function to set a timer for inactivity
	function startInactiveTimer() {
		inactiveTimeout = setTimeout(() => {
			userInactive = true;
			// Perform actions when the user is inactive
			console.log("User is inactive");
		}, jumpscaretimer); // Adjust this value to set the duration of inactivity
	}

	onMount(() => {
		// Set up event listeners for user activity
		window.addEventListener("mousemove", handleUserActivity);
		window.addEventListener("keypress", handleUserActivity);
		window.addEventListener("scroll", handleUserActivity);
		window.addEventListener("scrollend", handleUserActivity);
		window.addEventListener("resize", handleUserActivity);

		// Start the inactive timer initially
		startInactiveTimer();
	});

	onDestroy(() => {
		// Clean up event listeners when the component is destroyed
		window.removeEventListener("mousemove", handleUserActivity);
		window.removeEventListener("keypress", handleUserActivity);
		window.removeEventListener("scroll", handleUserActivity);
		window.removeEventListener("scrollend", handleUserActivity);
		window.removeEventListener("resize", handleUserActivity);
		clearTimeout(inactiveTimeout);
	});
</script>

{#if userInactive}
	<img src="/josh.webp" alt="JUMBO JOSH APPEARS!" />
{/if}

<style>
	img {
		width: 100%;
		height: 100%;
		z-index: 10;
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
