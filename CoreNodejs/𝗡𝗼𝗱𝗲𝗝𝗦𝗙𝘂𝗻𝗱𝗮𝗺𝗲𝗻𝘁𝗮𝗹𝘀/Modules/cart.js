calculateFunction=function(item){
    let total=0;
    item.forEach((data)=>{
        total+=data
    })
    return total
}

module.exports={calculateFunction}