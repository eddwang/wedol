export const rectangle=function(wedol){
    wedol.rect = function(canvas,x,y,width,height,color,isFill){
        name = wedol.keys({shape:'rect'});
        var obj={name,shape:'rect',x,y,width,height,color,fill:isFill};
        canvas.objs[name]=obj;
        return obj; 
    }
    return wedol;
}

