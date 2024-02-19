// import RegisterForm from "./RegisterForm/RegisterForm";
// // import zeroBounceTest from "@zerobounce/zero-bounce-sdk/tests/zero-bounce.test";

// import App from "../App";
// // import { ZeroBounceSDK } from "@zerobounce/zero-bounce-sdk";

// async function emailVerification() {
//     const ZeroBounceSDK = require('@zerobounce/zero-bounce-sdk')
//     const zeroBounce = new ZeroBounceSDK();
//     zeroBounce.init("9a2629c2e27e4af59f08e4a2ca959991");


//     const url = 'https://zerobounce1.p.rapidapi.com/v2/validate?api_key=9a2629c2e27e4af59f08e4a2ca959991&email=valid@example.com';
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': 'f7ab9bb08dmshf4527523b880573p1ae9c0jsn4e297706f4e0',
//             'X-RapidAPI-Host': 'zerobounce1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await zeroBounce.getCredits();
//         console.log(response);
//         // console.log(zeroBounceTest.expectedresults);
//       } catch (error) {
//         console.error(error);
//       }


//     //   const email = "<EMAIL_ADDRESS>"; // The email address you want to validate
//     //   const ip_address = "127.0.0.1"; // The IP Address the email signed up from (Optional)
      
//     //   try {
//     //     const response = await zeroBounce.validateEmail(email, ip_address);
//     //         console.log(response);
//     //   } catch (error) {
//     //     console.error(error);
//     //   }


//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         // put the whole json object into this "data" array
//         // const data = RegisterForm().setContainer(data);
//         console.log(result);
//         console.log(result.account);
//         console.log(result.status);

//     } catch (error) {
//         console.error(error);
//     }
//     const eResponse = await fetch(url, options);
//     const eResult = await eResponse.json();
//         // put the whole json object into this "data" array
//         // const data = RegisterForm().setContainer(data);
//     console.log(eResult);
//     console.log(eResult.account);
//     console.log(eResult.status);
   
//     return eResult;
// }

// export default emailVerification;