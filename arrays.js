//  const arr=[1,2,3,4]
//  const myheros=["shaktiman","nagraj"]
//  const myarr2=new Array(1,2,3,4)
//  console.log(myarr2[1]);
//  myarr2.push(45)
//  myarr2.push(10)
//  myarr2.unshift(122)
//  console.log(myarr2);
// //  console.log(myarr2.splice(1,2,"4500"));
// console.log(myarr2.includes(45));
// console.log(myarr2.indexOf(45));
// const newarr=myarr2.join();
// console.log(myarr2);
// console.log(newarr);
// console.log(myarr2.slice(1,2));
// console.log(myarr2.splice(1,0,5));
const marvel_heros=["thor","captain ametrica","ironaman"];
const dc=["superman","flash","batman"]
// marvel_heros.push(dc);
//console.log(marvel_heros);
// marvel_heros.concat(dc);
// console.log(marvel_heros);
// const allheroes=marvel_heros.concat(dc);
// console.log(allheroes);
const allheroes=[...dc,...marvel_heros]
console.log(allheroes);

const newarr=[1,2,3,[4,5,6],[4,5,[1,2,3]]];
 const all=newarr.flat(Infinity);
 console.log(all);
 console.log(Array.isArray("hitesh"));
 console.log();
let score1=100,score2=200,score3=522;
console.log(Array.of(score1,score2,score3));
