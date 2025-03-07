let name = "jhon";
const age = 30
var isStudent = true;

console.log(name,age,isStudent)


let isStu = true;
console.log(isStu)
isStu = "RIshi"
console.log(isStu)
isStu = 10
console.log(isStu)


function  sum (a,b){
    return a+b
}

console.log(sum("a","b"))

function ageVerifier(age){
    if (age<18) {
        return "can't vote"
    }else {
        return  "canVote";
    }
}
console.log(ageVerifier(20))

function numberType(number){
    if (number%2 === 0) {
        return "Number is even"
    } else {
        return  "Number is odd"
    }
}

console.log(numberType(45))

function sumOfNumbers(n){
    let total =0;
    for (let i =1;i<=n;i++){
       total += i
    }
    return total
}

console.log(sumOfNumbers(10))


let user = {
    name: "Rishi",
    age: "23"
}
function greetUser(user) {
    return "The name of the user is "+ user.name+ " and the age is "+ user.age
}
console.log(greetUser(user))


let person = {
    name: "Nayan",
    age: 20,
    gender: "others"
}

function greetPerson(person){
    if(person.gender === "others"){
        return "Hi Others "+ person.name + " and your age is " + person.age
    }
    if(person.gender === "male"){
        return "Hi Mr. "+ person.name + " and your age is " + person.age
    }
    if(person.gender === "female"){
        return "Hi Mrs. "+ person.name + " and your age is " + person.age
    }
}

console.log(greetPerson(person))
console.log(ageVerifier(person.age))


function maleAdult(arr){
    let outArr = [];
    for (let i =0;i<arr.length; i++){
        if(arr[i].age >= 18 && arr[i].gender === "male"){
            console.log(arr[i].name)
            outArr.push(arr[i])
        }
    }
    return outArr
}

const users = [{
    name: "Harkirat",
    age: 10,
    gender: "male"
}, {
    name: "raman",
    age: 22,
    gender: "male"
}]

console.log(maleAdult(users))




