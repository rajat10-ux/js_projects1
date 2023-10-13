// singleton=>object constructor se banta hai tuh ise singleton kehta hai
// aur jab literals se banate hai tuh ise without singleton kehte hai
 // object literals
 const mysum=Symbol("key 1");
 const JsUser={
        name:"rajat",
        "fullname":"rajagt kumar",
        [mysum]:"key1",
        age:15,
        salary:150000,
        adress:"7 race course",
        lastloggedin:["monday","saturday"]
 };
console.table([JsUser.name,JsUser.age,JsUser.adress,JsUser.salary]);
console.log(JsUser["name"])
console.log(JsUser["age"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mysum]);
JsUser.name="shobit"
//Object.freeze(JsUser);
console.log(JsUser);
JsUser.greeting=function(){
        console.log("hello js user");
}
JsUser.greet=function(){
        console.log(`${this.name} hello `);
}
console.log(JsUser.greeting);
console.log(JsUser.greet());