export var _init=function(animation){
    return (function(id){
        var canvas = document.getElementById(id);var ctx=canvas.getContext("2d");var width= canvas.width;var height=canvas.height;
        var margin={'top':1,'bottom':1,'left':1,'right':1};
        var objs ={};

        var scaleX=function(x){
            return x*(width-margin.left-margin.right)/width+margin.left;
        }
        var scaleY=function(y){
            return y*(height-margin.top-margin.bottom)/height
            +margin.top;
        }
        var scaleW=function(w){
            return w*(width-margin.left-margin.right)/width
        }
        var scaleH=function(h){
            return h*(height-margin.top-margin.bottom)/height
        }
        var strokeArc=function(x,y,radius){
            if(!strokeStyle)strokeStyle="rgb(0,0,0)"
            ctx.strokeStyle = strokeStyle;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
        var strokeRect = function(x,y,width,height,strokeStyle){
            if(!strokeStyle)strokeStyle="rgb(0,0,0)"
            ctx.strokeStyle = strokeStyle;
            var rectangle = new Path2D();
            rectangle.rect(
                scaleX(x), 
                scaleY(y), 
                scaleW(Math.abs(width)), 
                scaleH(Math.abs(height)));
            ctx.stroke(rectangle);

 
        }
        var strokePath=function(obj){
            if(!obj.strokeStyle)obj.strokeStyle="rgb(0,0,0)"
            ctx.strokeStyle = obj.color;
            var p = new Path2D(obj.svgPath);
            ctx.stroke(p);
        }
        var fillRect=function(x,y,width,height,fillStyle){
            ctx.fillStyle = fillStyle;
            ctx.fillRect (scaleX(x), 
                          scaleY(y), 
                          scaleW(Math.abs(width)),
                          scaleH(Math.abs(height)));
          
        };

        return {
            objs:objs,
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
            },
            draw:function(){
                Object.keys(objs).forEach(function(k){
                    var obj = objs[k];
                    switch(obj.shape){
                        case 'circle':
                            if(obj.fill){

                            }else{
                                strokeArc(obj.x, obj.y, obj.radius,obj.color);
                            }
                        break;
                        case 'rect':
                            if(obj.fill){
                                fillRect(obj.x,obj.y,obj.width,obj.height,obj.color);
                            }else{
                                strokeRect(obj.x,obj.y,obj.width,obj.height,obj.color)
                            }
                        break;
                        case 'path':
                            strokePath(obj);
                        break;
                    }
                });
            },
            animation:animation(objs),
        };


    });
}