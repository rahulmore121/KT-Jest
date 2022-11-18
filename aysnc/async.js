function asyncDemo(){
    return new Promise((res,rej)=>{
        res("Resolved")
    })
}

module.exports=asyncDemo;