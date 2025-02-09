function solution(value){
    let padded='0'.repeat((5-value.toString().length))+value
    return `Value is ${padded}`
  }