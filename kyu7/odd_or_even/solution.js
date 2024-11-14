function oddOrEven(array) {
    return array.reduce((acc,num)=>acc+num,0)%2==0 ? "even" : "odd"
 }