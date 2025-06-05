const removeFromArray = function(array) {
    const args = Array.from(arguments);
    args.shift(); //remove array from args

    for (arg of args) {
        array = array.filter((value) => value !== arg );
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
