export const circle=function(wedol){
    wedol.circle = function(canvas,x,y,radius){
        var obj={name,shape:'circle',x,y,radius};
        name = wedol.keys({shape:'circle'});
        canvas.objs[name]=obj;
        return obj;
    }
    return wedol;
}

