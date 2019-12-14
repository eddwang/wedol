var wedol={'canvas':function(id){
    return(function(id){
        var canvas = document.getElementById(id);var ctx=canvas.getContext("2d");var width= canvas.width;var height=canvas.height;
        var margin={'top':40,'bottom':50,'left':40,'right':40};
        return {
            scaleX:function(x){
                return x*(width-margin.left-margin.right)/width+margin.left;
            },
            scaleY:function(y){
                return y*(height-margin.top-margin.bottom)/height
                +margin.top;
            },
            scaleW:function(w){
                return w*(width-margin.left-margin.right)/width
            },
            scaleH:function(h){
                return h*(height-margin.top-margin.bottom)/height
            },  
            fillRect:function(x1,y1,x2,y2,fillStyle){
                ctx.fillStyle = fillStyle;
                ctx.fillRect (this.scaleX(x1), 
                              this.scaleY(y1), 
                              this.scaleW(Math.abs(x2-x1)),
                              this.scaleH(Math.abs(y2-y1)));
            },
            strokeRect:function(x1,y1,x2,y2,strokeStyle){
                ctx.strokeStyle = strokeStyle;
 
                var rectangle = new Path2D();
                rectangle.rect(
                    this.scaleX(x1), 
                    this.scaleY(y1), 
                    this.scaleW(Math.abs(x2-x1)), 
                    this.scaleH(Math.abs(y2-y1)));
                ctx.stroke(rectangle);
            },
            clearRect:function(){
                ctx.clearRect(0,0,width,height);
            },
            line:function(x1,y1,x2,y2,strokeStyle){
                ctx.strokeStyle = strokeStyle;
                ctx.beginPath();
                ctx.moveTo(this.scaleX(x1),this.scaleY(y1));
                ctx.lineTo(this.scaleX(x2),this.scaleY(y2));
                ctx.closePath();
                ctx.stroke();
            },
            fillText:function(text,x,y,font){            
                ctx.font = font;
                ctx.fillText(text,this.scaleX(x),
                                       this.scaleY(y));
            }
        };


    })(id); 
}}

