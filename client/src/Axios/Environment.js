//variables for prod vs dev


const dev = {
    context: "http://localhost:8080/"
   };
   
   const prod = {
    context: "Projectoneserver-env-1.ju5wxnbfhb.us-west-2.elasticbeanstalk.com"
   };
   
   export const environment = process.env.NODE_ENV === "production" ? prod : dev;