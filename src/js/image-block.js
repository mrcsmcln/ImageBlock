+function($) {
    'use strict';

    var ImageBlock = function(element) {
        this.$block = $(element)
        this.$images = this.$block.find('.image-block-bg').filter(function() {
            return $(this).closest('.image-block').is(element)
        })

        this.getImagesDimensions()
        this.getBlockDimensions()
        this.resizeImages()
    }

    ImageBlock.VERSION = '1.0.8'

    ImageBlock.prototype.handleResize = function() {
        this.getBlockDimensions()
        this.resizeImages()
    }

    ImageBlock.prototype.getBlockDimensions = function() {
        this.blockDimensions = {
            width: this.$block.innerWidth(),
            height: this.$block.innerHeight()
        }

        this.blockAspectRatio =
            this.blockDimensions.width / this.blockDimensions.height
    }

    ImageBlock.prototype.getImagesDimensions = function() {
        this.imagesDimensions = []
        this.imagesAspectRatio = []

        this.$images.each($.proxy(function(index, element) {
            var width = element.width
            var height = element.height

            this.imagesDimensions[index] = {
                width: width,
                height: height
            }

            this.imagesAspectRatio[index] = width / height
        }, this))
    }

    ImageBlock.prototype.resizeImages = function() {
        this.$images.each($.proxy(function(index, element) {
            var $element = $(element)
            
            if (this.blockAspectRatio > this.imagesAspectRatio[index] &&
                !$element.hasClass('landscape')) {
                $element.removeClass('portrait').addClass('landscape')
            } else if (this.blockAspectRatio < this.imagesAspectRatio[index] &&
                       !$element.hasClass('portrait')) {
                $element.removeClass('landscape').addClass('portrait')
            }
        }, this))
    }

    function Plugin() {
        return this.each(function() {
            $(this).data('mjm.image-block', new ImageBlock(this))
        })
    }

    var old = $.fn.imageBlock

    $.fn.imageBlock = Plugin
    $.fn.imageBlock.Constructor = ImageBlock

    $.fn.imageBlock.noConflict = function() {
        $.fn.imageBlock = old
        return this
    }

    $(window).on('load', function() {
        $('.image-block').imageBlock()
    }).on('resize.mjm.image-block', function() {
        $('.image-block').each(function() {
            $(this).data('mjm.image-block').handleResize()
        })
    })
}(jQuery);
