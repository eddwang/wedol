export const animation=function(objs){
    var objs=objs;
    return  function(callback,duration){
        var start;
        var step=function(timestamp){
            if (!start) start = timestamp;
            var progress = timestamp - start;
            callback(objs);
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step)
    }
}

