+function(i){"use strict";function s(){return this.each(function(){i(this).data("mjm.image-block",new t(this))})}var t=function(s){this.$block=i(s),this.$images=this.$block.find(".image-block-bg").filter(function(){return i(this).closest(".image-block").is(s)}),this.getImagesDimensions(),this.getBlockDimensions(),this.resizeImages()};t.VERSION="1.0.6",t.prototype.handleResize=function(){this.getBlockDimensions(),this.resizeImages()},t.prototype.getBlockDimensions=function(){this.blockDimensions={width:this.$block.innerWidth(),height:this.$block.innerHeight()},this.blockAspectRatio=this.blockDimensions.width/this.blockDimensions.height},t.prototype.getImagesDimensions=function(){this.imagesDimensions=[],this.imagesAspectRatio=[],this.$images.each(i.proxy(function(i,s){var t=s.width,e=s.height;this.imagesDimensions[i]={width:t,height:e},this.imagesAspectRatio[i]=t/e},this))},t.prototype.resizeImages=function(){this.$images.each(i.proxy(function(s,t){var e=i(t);this.blockAspectRatio>this.imagesAspectRatio[s]&&!e.hasClass("landscape")?e.removeClass("portrait").addClass("landscape"):this.blockAspectRatio<this.imagesAspectRatio[s]&&!e.hasClass("portrait")&&e.removeClass("landscape").addClass("portrait")},this))};var e=i.fn.imageBlock;i.fn.imageBlock=s,i.fn.imageBlock.Constructor=t,i.fn.imageBlock.noConflict=function(){return i.fn.imageBlock=e,this},i(window).on("load",function(){i(".image-block").imageBlock()}).on("resize.mjm.image-block",function(){i(".image-block").data("mjm.image-block").handleResize()})}(jQuery,window);