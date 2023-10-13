// //const tinderuser=new Object();

// const tinderuser={}
// tinderuser.id="123abc";
// tinderuser.name="rajat";
// tinderuser.logged=true

// const regularuser={
//         email:"sone@gmail.com",
//         fullname:{
//             userfullname:{
//                 firstname:"hitesh",
//                 lastname:"choudary"
//             }
//         }
// }
// //console.log (regularuser.fullname.userfullname.firstname);
// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// // const obj3=Object.assign(obj1,obj2);
// const obj3={...obj1,...obj2};
// //console.log(obj3);
// const users=[
//          {},
//         {},
// ]
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course={
        coursename:"js in hindi",
        price:"999",
        courseinstructor:"hitesh"
}
const {courseinstructor}=course
console.log(courseinstructor);
// {
//         "name":"hitesh",
//         "coursername" : "js in hindi",
//         price:"free"
// }