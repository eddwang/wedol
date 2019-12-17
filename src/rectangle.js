export const rectangle=function(wedol){
    wedol.rect = function(canvas,x,y,width,height){
        var obj={name,shape:'rect',x,y,width,height};
        name = wedol.keys({shape:'rect'});
        canvas.objs[name]=obj;
        return obj; 
    }
    return wedol;
}

