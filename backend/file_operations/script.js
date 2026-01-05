 const fs=require('fs')
 fs.writeFile("hi.txt","Hello",function(err){
    if(err) console.error(err);
    else console.log("done");
 })

 fs.appendFile("hi.txt",",My name is Pratham",function(err){
    if(err) console.error(err);
    else console.log("done");
 })

  fs.rename("hi.txt","hello.txt",function(err){
     if(err) console.error(err);
    else console.log("done");
  })