# ImageBlock

Robot-friendly `background-size: cover;`.

## Dependencies

- jQuery

## Usage

Getting started is ridiculously easy:

0. Make sure you have jQuery.
1. Include the `dist` files, `image-block.js` and `image-blocks.css`.
2. Put an `img.image-block-bg` inside a `div.image-block`.

Note: The `.image-block` must have a width and height.

Like this:

```
<!doctype html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title>ImageBlock</title>
		<link rel="stylesheet" href="/css/image-blocks.css">
		<style>
		html, body, .image-block {
			height: 100%;
			margin: 0;
			padding: 0;
		}
		</style>
	</head>
	<body>
		<div class="image-block">
			<img class="image-block-bg" src="https://placehold.it/1600x1600" alt="placeholder">
		</div>
		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="/js/image-block.js"></script>
	</body>
</html>
```

And that's it!
