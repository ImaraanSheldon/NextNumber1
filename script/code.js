const arr = [1,2,3,4]

const recursor = (count, limit) => {
    if(count < limit){
        console.log(arr[count]);
        recursor(++count, limit);
        return count;   
    } 
    else{
        console.log("Array Length Reached");
    }
}
    recursor(0, arr.length);