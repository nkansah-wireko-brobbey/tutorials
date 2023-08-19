const {readFile} = require('fs')

// readFile(path,()=>{})
const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err, data)=> {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
// getText('./content/first.txt').then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })


// Using async block
const start = async()=>{
    try{
        const first = await getText('./content/first.txt');
        console.log(first)
    }catch(e){
        console.log(e)
    }
}
start()