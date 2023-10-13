// immediately invoked function expressions (IIFE)
(function chai(){
        console.log("db connected");
})();

// this ()() global scope ke pollution ko haatanae ko ke liye hame IIFE use karte hai
( (name) => {
                console.log(`db connect ${name}`);
} ) ('hitesh')