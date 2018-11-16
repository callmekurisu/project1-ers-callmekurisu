//variables for prod vs dev


const dev = {
    context: "http://localhost:8080/"
   };
   
   const prod = {
    context: ""
   };
   
   export const environment = process.env.NODE_ENV === "production" ? prod : dev;