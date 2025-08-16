function sayMyName(){
    console.log("S")
    console.log("H")
}
sayMyName // reference to function
//sayMyName() // execution of functiokn

//function addTwoNumbers(num1, num2){
//console.log(num1 + num2)
//}
//addTwoNumbers(3,"4")
function loginUserMessag(username){
  if(username===undefined){
    //console.log("please enter a username")
    return// return ke baad koi bhi statement execute nhi hoga
  }
    return `${username} just logged in`
}
const str = loginUserMessag()
//console.log(str)
function calculateCartPrice(...num1 ){
return num1
}
console.log(calculateCartPrice(200,400,500))

const user = {
    username: "hitesh",
    price: 199

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is  ${anyobject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,400,600,800]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue([100,200,300,400]))