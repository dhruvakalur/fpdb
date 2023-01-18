const { ifError } = require("assert");
const fs = require("fs")
var path = require("path")
var format = /[ `!@#$%^&*(_+\)=\[\]{};':"\\|,.<>\/?~]/;
var v = "1.0.0"
// error line finder
function elf() {
  const e = new Error();
  const regex = /\((.*):(\d+):(\d+)\)$/
  const match = regex.exec(e.stack.split("\n")[2]);
  return {
    filepath: match[1],
    line: match[2],
    column: match[3]
  };
}


//db file creator and checker
try {
  if(fs.existsSync("./fpdb/db/")){
    console.log("\x1b[32m Database Directory Check Complete \x1b[0m")
  } else {
    qwerty()
    console.log("\x1b[32m Database Directory Check Complete \x1b[0m")
  }
} catch (error) {
  console.log(`\x1b[31m Error In FPDB While Running Database Directory Check : \n ${error} \x1b[0m`)
}
try {
  fs.readFileSync("./package.json")
} catch (error) {
  console.log("y")
}


// version checker
const http = require("https");
function vcheck(){
const options = {
  "method": "POST",
  "hostname": "chatroom.dhruvakalur.repl.co",
  "port": null,
  "path": "/fpdb/",
  "headers": {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    if(body.toString()!=v){
        console.log("\u001b[33m Warning: Your FPDB Version Is Outdated, Please Install The New Version via npm i fpdb@latest \u001b[0m")
    } else{
      console.log(`\x1b[32m Version Is Latest \x1b[0m`)
    };
  });
});

req.end()
}
function checkInternet(cb) {
  console.log("\x1b[32m Checking If The Package(FPDB) Has The Latest Version \x1b[0m")
  require('dns').lookup('google.com',function(err) {
      if (err && err.code == "ENOTFOUND") {
          cb(false);
      } else {
          cb(true);
      }
  })
}

checkInternet(function(isConnected) {
  if (isConnected) {
      vcheck()
  } else {
      console.log(" \u001b[33m Warning: Couldn't Check For Latest Version Of FPDB Due To Lack Of \n Internet, Nothing To Worry. \u001b[0m")
  }
});


// functions 

//initiation function
exports.init = function(){
  if(qwerty()==undefined){
    console.log("Initiation Done")
  } else {
    console.log("Initiation Not Complete")
  }
}

// Set() Function
exports.set=function(key,cname,value){

    key = ""+key+"";value=""+value+""
    if(format.test(key+cname) == false){
        if(cname){
          if(fs.existsSync("./fpdb/db/"+cname+"/")==true){
    fs.writeFile("./fpdb/db/"+cname+"/"+key+'.txt', value, function(err) {
        if (err) {
         qwerty()
         console.log("\x1b[31m Couldn't Create Key: "  + key + ", Please Run Initiation Function \n If This Is Your First Time Using This Package, This Is Normal But If Problem Persists Please Send An E-Mail To dhruvakalur9@gmail.com \x1b[0m")
        }})
      } else {
        console.log(`\x1b[31m The Collection: "${cname}" Doesn't Exist \x1b[0m`)
      }
      }else{
        fs.writeFile("./fpdb/db/"+key+'.txt', value, function(err) {
          if (err) {
           qwerty()
           console.log("\x1b[31m Couldn't Create Key: "  + key + ", Please Run Initiation Function \n If This Is Your First Time Using This Package, This Is Normal But If Problem Persists Please Send An E-Mail To dhruvakalur9@gmail.com \x1b[0m")
          }}) 
      }
    } else {
        console.log('\x1b[31m Error: You Cant Use Special Characters In The "key" Parameter \x1b[0m')
    }
    }
    function qwerty(){
    fs.mkdir('./fpdb/db/',function(err){
        if(err){
        if (err.message.startsWith("EEXIST:") != true) {
            
        return console.log("Error Occurred In FileDB : \n\n" +err);
        }}
    }, )
}



//CreateCollection() Function
exports.createCol = function(cname){
  cname = ""+cname+""
  try {
    fs.mkdirSync('./fpdb/db/'+cname+"/")
  } catch (error) {
    console.log("\x1b[31m Error: Couldn't Create Collection '"+cname+"', Error : \n" + error)
  }
 

} 




    // helper for initiation function
    function qwerty(){

    fs.mkdir('./fpdb/',function(err){
        if(err){
        if (err.message.startsWith("EEXIST:") != true) {
            
        return `${console.log("Error Occurred In Initiation : \n\n" +err)}`
        }
        fs.mkdir('./fpdb/db/',function(err){
          if(err){
          if (err.message.startsWith("EEXIST:") != true) {
              
          return `${console.log("Error Occurred In Initiation : \n\n" +err)}`
          }
        }})
      }
    
    }, )
}

// get() function
exports.get = (key,cname,callback)=>{
  setTimeout(()=>{
  if(format.test(key)!=true){
    if(cname){
      if(fs.existsSync('./fpdb/db/'+cname+"/")==true){
    fs.readFile('./fpdb/db/'+cname+"/"+key+".txt", (err, data) => {
      if (err){
        if(`${err}`.startsWith("Error: ENOENT: ")){callback(` Error: The Key : "${key}" Doesn't Exist`,undefined)}else{callback("\x1b[31m Error Occurred While Accessing Key :'"+key+"', Error:\n"+err)}
      } else {
      callback(undefined,data.toLocaleString());
      }
    });
  }else{
    console.log(`\x1b[31m The Collection: "${cname}" Doesn't Exist \x1b[0m`)
  }
  }else{
    fs.readFile('./fpdb/db/'+key+".txt", (err, data) => {
      if (err){
        if(`${err}`.startsWith("Error: ENOENT: ")){callback(` Error: The Key : "${key}" Doesn't Exist`,undefined)}else{callback("\x1b[31m Error Occurred While Accessing Key :'"+key+"', Error:\n"+err)}
      } else {
      callback(undefined,data.toLocaleString());
      }
    });
  }
  } else {
    console.log("\x1b[31m The Key Cannot Contain Special Characters : "+key+"\x1b[0m")
  }
},10)
}

//deleteall() function
exports.delAll=()=>{
  if(fs.existsSync("./fpdb/db/")){
  fs.rm('./fpdb/db/', { recursive:true }, (err) => {
    if(err){
        // File deletion failed
        console.error(err.message);
        return;
    }
    qwerty();
})
} else {
  console.log(`\x1b[31m Error: You Have Not Run The Initialisation Function, Visit The README.MD(Docs) Here https://www.npmjs.com/package/fpdb`)
}
}


//DeleteKey() Function
exports.delKey=async function(key){
if(fs.existsSync('./fpdb/db/'+key+".txt")) {
try {
  await fs.unlink('./fpdb/db/'+key+".txt");
} catch (error) {
  console.error('\x1b[31m Error Occurred In FPDB While Deleting Key: '+key+' \n', error.message + "\x1b[0m");
}
} else {
  console.log(`\x1b[31m Error: This Key Does Not Exist, Visit The README.MD(Docs) Here https://www.npmjs.com/package/fpdb`)
}
}

//deletecollection() Function
exports.delCol = (cname)=>{
if(fs.existsSync('./fpdb/db/'+cname+"/")){
  fs.rm('./fpdb/db/'+cname+"/", { recursive:true }, (err) => {
    if(err){
        // File deletion failed
        console.error(err.message);
    }
})
} else {
  console.log(`\x1b[31m Error: This Collection Does Not Exist, Visit The README.MD(Docs) Here https://www.npmjs.com/package/fpdb`)
}
}

//listkeys() function
exports.listKeys=(callback)=>{
  fs.readdir("./fpdb/db/", (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (path.extname(file) == ".txt")
          callback(file.replace(".txt",""))
      })
    }
  })
}

//listcollections helper
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

//listcollections() function
exports.listCol=()=>{
return getDirectories("./fpdb/db/").toLocaleString().replace(",","\n")
}