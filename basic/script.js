const fs = require('node:fs');

fs.writeFile('hey.txt', 'Hello node js ', function(err){// create and write to a file
    if(err) console.error(err);
    else console.log("done");
});

fs.rename("hey.txt","hello.txt",function(err){ // rename file name 
    if(err) console.error(err);
    else console.log("done");
})

fs.copyFile("hello.txt","./copy/copy.txt",function(err){ // copy file  
    if(err) console.error(err);
    else console.log("copy done");
})

fs.unlink("hello.txt",function(err){ // delete file
    if(err) console.error(err);
    else console.log("removed");
})

fs.rmdir("./copy",function(err){ // only delete folder when empty
    if(err) console.error(err);
     else console.log("removed");
})
fs.rmdir("./copy",{recursive:true},function(err){ // delete folder with files also
    if(err) console.error(err);
     else console.log("removed");
})
create folder 
fs.mkdir("./copy",function(err){ // create folder
    if(err) console.error(err);
     else console.log("folder created");
});

fs.readdir("./copy",function(err,files){ // tell all files in folder
    if(err) console.error(err);
     else console.log(files);   
});     

fs.readFile("hello.txt",function(err,data){ // read file
    if(err) console.error(err);
     else console.log(data.toString());
});






