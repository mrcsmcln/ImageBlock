+function(i){"use strict";function e(){return this.each(function(){i(this).data("mjm.image-block",new t(this))})}var t=function(e){this.$block=i(e),this.$images=this.$block.find(".image-block-bg").filter(function(){return i(this).closest(".image-block").is(e)}),this.imagesDimensions=[],this.imagesAspectRatio=[],this.getBlockDimensions(),this.$images.each(i.proxy(function(e,t){i(t).on("load.mjm.image-block",i.proxy(function(){this.getImageDimensions(e,t),this.resizeImage(e,t)},this)),t.complete&&i(t).trigger("load.mjm.image-block")},this))};t.VERSION="1.0.11",t.prototype.handleResize=function(){this.getBlockDimensions(),this.resizeImages()},t.prototype.getBlockDimensions=function(){this.blockDimensions={width:this.$block.innerWidth(),height:this.$block.innerHeight()},this.blockAspectRatio=this.blockDimensions.width/this.blockDimensions.height},t.prototype.getImageDimensions=function(i,e){if(e instanceof HTMLImageElement)var t=e.naturalWidth,s=e.naturalHeight;else if(e instanceof SVGElement)var t=e.viewBox.baseVal.width,s=e.viewBox.baseVal.height;else if(e instanceof HTMLVideoElement)var t=videoWidth,s=videoHeight;this.imagesDimensions[i]={width:t,height:s},this.imagesAspectRatio[i]=t/s},t.prototype.resizeImage=function(i,e){this.blockAspectRatio>this.imagesAspectRatio[i]?this.addRemoveClass(e,"landscape","portrait"):this.blockAspectRatio<this.imagesAspectRatio[i]&&this.addRemoveClass(e,"portrait","landscape")},t.prototype.resizeImages=function(){this.$images.each(i.proxy(function(i,e){this.resizeImage(i,e)},this))},t.prototype.addRemoveClass=function(i,e,t){var s=i.getAttribute("class")+" ",o=!1;s.indexOf(e+" ")<0&&(s+=e,o=!0),s.indexOf(t+" ")>=0&&(s=s.replace(t+" ",""),o=!0),o&&i.setAttribute("class",s)};var s=i.fn.imageBlock;i.fn.imageBlock=e,i.fn.imageBlock.Constructor=t,i.fn.imageBlock.noConflict=function(){return i.fn.imageBlock=s,this},i(document).on("ready.mjm.image-block",function(){i(".image-block").imageBlock(),i(window).on("resize.mjm.image-block",function(){i(".image-block").each(function(){i(this).data("mjm.image-block").handleResize()})})})}(jQuery);