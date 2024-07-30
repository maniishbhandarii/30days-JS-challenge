function recur(fn, number){
    while(number!=0){
        fn();
        number--;
    }
    return 0;
}

function printName(){
    console.log("Manish")
}
recur(printName, 5)