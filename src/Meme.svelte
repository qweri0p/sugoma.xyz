<script lang="ts">
	export let image: string;
	const alt = image.slice(7, -4);
</script>

<img src={image} {alt} id={alt} />

<style>
	img {
		margin: 15px;
		height: 500px;
		transition: all 0.1s ease-in-out;
		align-items: center;
		flex-grow: 1;
		max-width: 100%;
	}

	img:hover {
		transform: scale(1.025);
	}

	/*
	Yes, this is bad.
	No, I'dont care.
	*/
	#obamium:hover {
		content: url("/memes/obamium.jpg");
	}
	#obamium {
		content: url("/memes/obama.jpg");
	}
</style>
