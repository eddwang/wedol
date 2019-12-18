export const path=function(wedol){
    wedol.path = function(canvas,svgPath,color){
        
        name = wedol.keys({shape:'path'});
        var obj={name,shape:'path',svgPath,color};
        canvas.objs[name]=obj;
        return obj; 
    }
    return wedol;
}
