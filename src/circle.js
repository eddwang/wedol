export const circle=function(wedol){
    wedol.circle = function(canvas,x,y,radius){
        name = wedol.keys({shape:'circle'});
        var obj={name,shape:'circle',x,y,radius};
        canvas.objs[name]=obj;
        return obj;
    }
    return wedol;
}

