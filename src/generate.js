export var keys = function(wedol){
    var key_space={'rect':0,'circle':0}
    wedol.keys = function(obj){
        key_space[obj.shape]+=1;
        return obj.shape+key_space[obj.shape];
    }
    return wedol;
}