// Random Password Generator
 function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
   const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars=lowercaseChars.toUpperCase();
   const numberChars="0123456789";
   const symbolChars="!@#$%^&*_+?~;:";
   let allowedChars="";
   allowedChars+=includeLowercase?lowercaseChars:"";
   allowedChars+=includeUppercase?uppercaseChars:"";
   allowedChars+=includeNumbers?numberChars:"";
   allowedChars+=includeSymbols?symbolChars:"";
   let password="";
   if(passwordLength==0) return `(password length should be at least 1)`
   if(allowedChars.length>0){
     for(let i=0;i<passwordLength;i++){
        const index=Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[index];
     }
   }
   else if(allowedChars.length==0) return `(choose at least one set of characters)`;
   
   return password;
 }
 const passwordLength=12;
 const includeLowercase=true;
 const includeUppercase=true;
 const includeNumbers=true;
 const includeSymbols=true;

 const password=generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
 console.log(`Generated Password:-  ${password}`);