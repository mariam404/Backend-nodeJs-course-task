
/********************* TASK 1 *********************/ 

const  fs = require ("fs")

const person = {
    fname : 'ahmed',
    lname :'hossam',
    age :'20',
    city: 'alex'
}
const personJson = JSON.stringify(person)

fs.writeFileSync("data.json" , personJson)

console.log(fs.readFileSync("data.json").toString())
const personObj = JSON.parse(personJson)
personObj.fname = 'adel'
personObj.lname = 'ahmed'
personObj.age = '40'
personObj.city = 'cairo'
const person2Json = JSON.stringify(personObj)
fs.writeFileSync("data.json" , person2Json)
console.log(fs.readFileSync("data.json").toString())


/************************ TASK 2 ************************/ 

const yargs = require("yargs")
const task2 = require ("./task2")
yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
        task2.addPerson(x.id ,x.fname , x.lname , x.city , x.age)
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        task2.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        task2.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        task2.listData()
    }
 })
 
yargs.parse() 
   
  