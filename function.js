// function print(){
//         console.log("hello my nMw is");
// }
// function addtwo(a,b){
//         return a+b;
// }
// // console.log(addtwo(5,2));
// const add=(a,b)=>{
//         return a*b;
// }
// // console.log(add(5,4));
// //print();
// function loginuser(username="sna")
// {
//         if(!username){
//                 console.log("enter usert name");
//                 return;
//         }
//         return `${username} just login in`;
// }
// console.log(loginuser());
// ... this is rest or spread operator
function calculatecartprice(...num1){
        let sum=0;
        for(i=0;i<num1.length;i++){
                sum+=num1[i];
        }
        return sum;
}
//console.log(calculatecartprice(50,500,100));
const user={
        username:"hitesh",
        price:199
}
function handleobject(anyobject){
        // console.log(`username is ${anyobject.username} and price is ${username.price}` );
}
//handleobject(user)
const arr=[200,400,500]
function second(arr=[]){
 return arr[1];        
}
console.log(second(arr));