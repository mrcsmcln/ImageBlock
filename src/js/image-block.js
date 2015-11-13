+function($) {
	'use strict';

	var ImageBlock = function(element, options) {
    	this.options = options
		this.$block  = $(element)
		this.$image  = this.$block.find('.image-block-bg')

		$(window).on('resize', $.proxy(this.handleResize, this))

		this.getImageDimensions()
		this.getBlockDimensions()
		this.resizeImage()
	}

	ImageBlock.VERSION = '1.0.0'

	ImageBlock.prototype.handleResize = function() {
		this.getBlockDimensions()
		this.resizeImage()
	}

	ImageBlock.prototype.getBlockDimensions = function() {
		this.blockDimensions = {
			width:  this.$block.innerWidth(),
			height: this.$block.innerHeight()
		}

		this.blockAspectRatio = this.blockDimensions.width / this.blockDimensions.height
	}

	ImageBlock.prototype.getImageDimensions = function() {
		var image = this.$image[0]
		
		this.imageDimensions = {
			width:  image.width,
			height: image.height
		}

		this.imageAspectRatio = this.imageDimensions.width / this.imageDimensions.height
	}

	ImageBlock.prototype.resizeImage = function() {
		if (this.blockAspectRatio > this.imageAspectRatio &&
		    this.currentOrientation !== 'landscape') {
			this.$image.removeClass('portrait').addClass('landscape')
		} else if (this.blockAspectRatio < this.imageAspectRatio &&
		           this.currentOrientation !== 'portrait') {
			this.$image.removeClass('landscape').addClass('portrait')
		}
	}

	function Plugin(option) {
		return this.each(function() {
			var $this   = $(this)
			var data    = $this.data('ap.image-block')
			var options = typeof option === 'object' && option

			if (!data) {
				$this.data('ap.image-block', (data = new ImageBlock(this, options)))
			}
		})
	}

	var old = $.fn.imageBlock

	$.fn.imageBlock             = Plugin
	$.fn.imageBlock.Constructor = ImageBlock

	$.fn.imageBlock.noConflict = function() {
		$.fn.imageBlock = old
		return this
	}

	$(window).on('load', function() {
		$('.image-block').imageBlock()
	})
}(jQuery);
