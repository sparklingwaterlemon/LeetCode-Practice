/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
    const stack = [];
    const closer = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    }
    
    for( let x of string ){
        if( !closer[x] ){
            stack.push(x)
        }else if( stack.pop() !== closer[x] ){
            return false
        }
    }
    
    return stack.length === 0;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
