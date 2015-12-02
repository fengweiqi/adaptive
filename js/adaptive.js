 /*
name：自适应插件
date:2015-12-2
*/ 
(function(factory){
    if (typeof define === "function" && define.amd) {
        define(function() {
            return factory();
        });
    }else{
        window.Adaptive = factory();
    }
}(function(){

	function Adaptive(el){
	  		this.el = el;
	  		this.prefix = ['-webkit','-moz-','-ms-',''];
	  		this.render();
	  		var that = this;
	  		window.onresize = function(){
	  			that.render();
	  		}
 	}

	Adaptive.prototype.render = function(){

		  		var clientWidth = document.body.clientWidth;
		  		var elWidth = this.el.clientWidth;
		  		var biLi = clientWidth/elWidth;
		  		if(biLi<1){
		  		

		  				this.el.style.webkitTransform = "scale("+biLi+")";
		  				this.el.style.mozTransform = "scale("+biLi+")";
		  				this.el.style.oTransform = "scale("+biLi+")";
		  				this.el.style.msTransform = "scale("+biLi+")";
		  				this.el.style.transform = "scale("+biLi+")";
		  				this.el.style.transformOrigin = "0 0";
		  				this.el.style.webkitTransformOrigin = "0 0";
		  				this.el.style.mozTransformOrigin = "0 0";
		  				this.el.style.msTransformOrigin = "0 0";
		  				this.el.style.oTransformOrigin = "0 0";
		  				// IE9以下
		  				if(typeof document.body.addEventListener=='undefined'){
		  					this.el.style.zoom =biLi;
		  				}
		  				
		  			    
		  		}
	}

	return Adaptive;
}));


