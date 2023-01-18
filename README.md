

# FPDB

Hello, This Package is A Database Package That Uses The Storage ROM Or The File Storage System To Save Data, It Doesn't Have Any Dependencies Other Than The Built-In Node.JS Packages, It Can Run Totally Offline But Still Requires Internet Just For Checking If It's In The Latest Version.

 This Package Is For Beginners Of Nodejs As Well As For The Advanced.

 Note: This Package Works Well For Advanced Projects But Isn't Recommended For Them.


## Install Package

To deploy this project run

```bash
  npm install fpdb
```


## Documentation

### **Set()**
#### Function To Set A Key In A Collection Or Without Collection
#### Usage: set(key,cname,value)

#### ***Key*** : The Key For Saving Value 

#### ***Cname*** : The Name Of The Collection In Which The ***Key*** Should Be Saved

#### ***Value*** : The Data To Be Saved For the ***Key***

#### Example (Without Collection):

```javascript
const db = require("fpdb")
db.init()
db.set("MyUsername","","MyData")
```
or
```javascript
const db = require("fpdb")
db.init()
db.set("MyUsername",undefined,"MyData")
 ```
#### Example (With Collection):
```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
db.set("MyUsername","MyCollectionName","MyData")
```
#### Note :- Special Characters Except ***-*** (hyphen), Are Not Allowed In Only The ***Key*** And ***Cname***, Even Spaces Are Not Allowed. You Can Use Hyphens (-) Intead Of Blank Spaces. You Can Use Special Characters And Blank Spaces In The ***Value*** Parameter.
---
### **CreateCol()**
#### Function To Create A Collection
#### Usage : createCol(cname)

#### ***Cname*** : Name Of The Collection To Be Created

#### Example :

```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
```
___
### **Get()**
#### Function To Get Or Read A Key 
#### Usage : get(key,cname,callback)
#### ***Key*** And ***Cname*** : [Click Here](#key--the-key-for-saving-value)

#### ***Callback*** : The Callback, Returns Data In Form Of `function (err,data){}`
#### Example :
```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
db.set("MyUsername","MyCollectionName","MyData")
db.get("MyUsername","MyCollectionName",(err,data)=>{
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
})
```
Returns (Console)
```bash
 Database Directory Check Complete 
 Checking If The Package(FPDB) Has The Latest Version 
 Version Is Latest 
 Initiation Done
 MyData
```
___

### **DelKey()**
#### Function To Delete A Key [With](#example-with-collection-1) Or [Without](#example-without-collection-1) A Collection
#### Usage : delKey(key,cname)

#### ***Key*** : The Name Of The The Key You Want To Delete
#### ***Cname*** : The Collection From Which The ***Key*** Originates

#### Example (Without Collection) :
```javascript
const db = require("fpdb")
db.init()
db.set("MyUsername",undefined,"MyData")
db.delKey("MyUsername")
```
#### Example (With Collection) :
```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
db.set("MyUsername","MyCollectionName","MyData")
db.delKey("MyUsername","MyCollectionName")
```
___
### **DelAll()**
#### Function To Delete All The DB Data(DB Keys And Collections) From Database
#### Usage : delAll()
#### Example : 
```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
db.set("MyUsername","MyCollectionName","MyData")
db.delAll()
```
### **DelCol()**
#### Function To Delete A Collection
#### Usage : delCol(cname)
#### ***Cname*** : The Name Of The Collection You Want To Delete
#### Example : 
```javascript
const db = require("fpdb")
db.init()
db.createCol("MyCollectionName")
db.delCol("MyCollectionName")
```
___
# list funcs
#### Note :- Deleting A Collection Also Deletes All Of Its Keys
___
## Features

- Can Run Fully Offline
- 0 Dependencies
- Extremely Simple
- Keys Can Be Manually Edited, [Click Here To See How](#manualkey)


## FAQ

#### Question 1

Answer 1

#### Question 2

Answer 2
