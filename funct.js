//

//arrays

//find value;
function find(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] == value){
            return true;
        }
    }

    return false;
}

//delete value(s) from array
function arrdelv(array, values){
    let dummy = [];
    for (let i = 0; i < array.length; i++){
        if (find(values,array[i]) == false){
            dummy.push(array[i]);
        }
    }

    array = dummy
    return array;
}

// va = [0,0,0,0,0,0,1];
// console.log(arrdelv(va,[0,1]));

