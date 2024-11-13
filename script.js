//№1
const sumArray = (...arg) =>{
    let result = 0
    for (let i = 0; i < arg.length; i++) {
        result = Number.parseInt(result + arg[i])
    }
    return console.log(result);
    
}
sumArray(100, 75, 81, 96)
sumArray(45, 63, 85, 70)
sumArray(45, 63, 85, 70)
sumArray(93, 99, 93, 96)



//№2
const multiplyByTwo = (...arg) =>{
    let result = []
    for (let i = 0; i < arg.length; i++) {
        result.push(arg[i] * 2)
    }
    return console.log(result);
    
}
multiplyByTwo(100, 75, 81, 96)



//№3
const findMax = (numbers) =>{
    let max = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max){
            max = numbers[i]
        }
    }
    return max
    
}
const numbersOne = [23,554,3,546,286,45]
console.log(findMax(numbers))



//№4
const filterEvenNumbers = (numbers) =>{
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i])
          }
    }
    return result
    
}
const numbersTwo = [1,2,3,4,5,6,7,8,9,10]
console.log(filterEvenNumbers(numbers));



//№5
const countElements = (arg) =>{
    let num = 0
    for (let i = 0; i < arg.length; i++) {
        num++
    }
    return num
    
}
const numbersThree = [1,2,3,4,5,6,7,8,9,10]
console.log(countElements(numbers));