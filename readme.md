# ImageBlock

ImageBlock is a dead-simple way to use an `<img>` element like you would `background-size: cover;`.

## Why Use ImageBlock?

There are numerous reasons to use ImageBlock:

1. You want responsive background images
2. You want to use an `alt` attribute with a background image
3. You want to use the `transform` property with a background image

## Dependencies

- jQuery

## Quick Start

Getting started is ridiculously easy:

0. Make sure you have jQuery.
1. Include the `dist` files, `image-block.js` and `image-blocks.css`.
2. Put an `img.image-block-bg` inside a `div.image-block`.
3. Put a `.image-block-content` after the `img.image-block-bg` (optional).

Note: to render properly, `.image-block` must either:

- Have a defined width or height  
- Contain an `.image-block-content` with inner content.

For example:

```html
<!doctype html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<title>ImageBlock</title>
		<link rel="stylesheet" href="/css/image-block.css">
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
			<div class="image-block-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>
		</div>
		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="/js/image-block.js"></script>
	</body>
</html>
```

### Advanced Configuration

If you'd like to go a bit further, follow these steps to reduce the total number of HTTP requests and improve your workflow.

First, install ImageBlock via NPM:

```sh
npm install image-block --save
```

From there, you can import the `src` files in JavaScript and Sass:

```javascript
window.jQuery = require('jquery')
require('image-block')
```

```sass
@import "node_modules/image-block/src/sass/image-blocks"
```

And that's it!
