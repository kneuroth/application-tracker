const xlsx = require('xlsx');
const Algorithms = require('../public/javascripts/algorithms')


function deleteRecord(id){
    const data = getDataArray()
    let index = -1
    for(let i = 0; i < data.length; i++){
        if (data[i].id == id){
            index = i
        }
    }
    if(index == -1){
        throw 'Data not found'
    }

    const file = xlsx.readFile(process.env.DATA_FILE);

    const worksheet = file.Sheets.Sheet1
    
    let sheetJson = xlsx.utils.sheet_to_json(worksheet)

    sheetJson.splice(index, 1)

    file.Sheets.Sheet1 = xlsx.utils.json_to_sheet(sheetJson)
    
    xlsx.writeFile(file, process.env.DATA_FILE)
}

function saveNewRecord(record){
    //console.log(record)
    
    const file = xlsx.readFile(process.env.DATA_FILE);

    const worksheets = {}
    for(const sheetName of file.SheetNames){
        worksheets[sheetName] = xlsx.utils.sheet_to_json(file.Sheets[sheetName])
    }
    let map = getDataMap()
    let ids = Object.keys(map)
    let id = Algorithms.getLowestAvailableInt(ids)

    let newRecord = {
        id: id,
        jobName: record.jobName,
        jobDescription: record.jobDescription,
        company: record.company,
        applyDate: new Date(Date.now('mm/dd/yy')).toISOString(),
    }
   
    worksheets.Sheet1.push(newRecord)

    xlsx.utils.sheet_add_json(file.Sheets["Sheet1"], worksheets.Sheet1)
    xlsx.writeFile(file, process.env.DATA_FILE)
    
    return newRecord
}

function getDataArray(){
    const file = xlsx.readFile(process.env.DATA_FILE);

    let data = []

    const sheets = file.SheetNames

    for(let i = 0; i < sheets.length; i++){
        const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach( (res) => {
            data.push(res)
        })
    }
    return data
}

function getDataMap(){
    const file = xlsx.readFile(process.env.DATA_FILE);

    let data = {}

    const sheets = file.SheetNames

    for(let i = 0; i < sheets.length; i++){
        const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        temp.forEach( (res) => {
            data[res.id] = res
        })
    }
    return data
    
}

function findById(id){
    let data = getDataMap()

    return data[id]
}

function find(){
    let data = getDataArray()

    return data
}

async function remove(id){
    await deleteRecord(id)

    return
}

async function post(record){
    let newRecord = await saveNewRecord(record)

    return newRecord
}

module.exports = { findById, find, post, remove }
