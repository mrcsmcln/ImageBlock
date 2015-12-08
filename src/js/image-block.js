 +function($) {
    'use strict';

    var ImageBlock = function(element) {
        this.$block = $(element)
        this.$images = this.$block.find('.image-block-bg').filter(function() {
            return $(this).closest('.image-block').is(element)
        })

        this.imagesDimensions = []
        this.imagesAspectRatio = []

        this.getBlockDimensions()

        this.$images.each($.proxy(function(index, element) {
            $(element).on('load.mjm.image-block', $.proxy(function() {
                this.getImageDimensions(index, element)
                this.resizeImage(index, element)
            }, this))

            if (element.complete) {
                $(element).trigger('load.mjm.image-block')
            }
        }, this))
    }

    ImageBlock.VERSION = '1.0.11'

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

    ImageBlock.prototype.getImageDimensions = function(index, element) {
        if (element instanceof HTMLImageElement) {
            var width = element.naturalWidth
            var height = element.naturalHeight
        } else if (element instanceof SVGElement) {
            var width = element.viewBox.baseVal.width
            var height = element.viewBox.baseVal.height
        } else if (element instanceof HTMLVideoElement) {
            var width = videoWidth
            var height = videoHeight
        }

        this.imagesDimensions[index] = {
            width: width,
            height: height
        }

        this.imagesAspectRatio[index] = width / height
    }

    ImageBlock.prototype.resizeImage = function(index, element) {
        if (this.blockAspectRatio > this.imagesAspectRatio[index]) {
            this.addRemoveClass(element, 'landscape', 'portrait')
        } else if (this.blockAspectRatio < this.imagesAspectRatio[index]) {
            this.addRemoveClass(element, 'portrait', 'landscape')
        }
    }

    ImageBlock.prototype.resizeImages = function() {
        this.$images.each($.proxy(function(index, element) {
            this.resizeImage(index, element)
        }, this))
    }

    ImageBlock.prototype.addRemoveClass = function(element, add, remove) {
        var classAttribute = element.getAttribute('class') + ' '
        var changed = false

        if (classAttribute.indexOf(add + ' ') < 0) {
            classAttribute = classAttribute + add
            changed = true
        }

        if (classAttribute.indexOf(remove + ' ') >= 0) {
            classAttribute = classAttribute.replace(remove + ' ', '')
            changed = true
        }

        if (changed) {
            element.setAttribute('class', classAttribute)
        }
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

    $(document).on('ready.mjm.image-block', function() {
        $('.image-block').imageBlock()

        $(window).on('resize.mjm.image-block load.mjm.image-block', function() {
            $('.image-block').each(function() {
                $(this).data('mjm.image-block').handleResize()
            })
        })
    })
    
}(jQuery);