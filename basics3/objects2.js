const obj1 = {
    1:"a",
    2: "b"

}
const obj2 = {
    3:"a",
    4:"b"
}
//const obj3 = {obj1, obj2} //merging 2 objects but not preferred bcoz object k andar object aa jaega
//console.log(obj3)
let obj3 = {...obj1, ...obj2} // better way to merga 2 objects
console.log(obj3)

obj3 = Object.assign({},obj1, obj2) // another way to merge, extra braces added for empty array & this array actrs as target and other obj1, obj2 acts as source
console.log(obj3)