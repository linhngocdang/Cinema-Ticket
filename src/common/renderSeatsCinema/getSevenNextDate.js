const getSevenNextDate=(dateValueOf, numberNext)=>{
    let arrayDate=[]
    
    for(let i=0; i< numberNext ;i++ ){
        const dateObj=new Date(dateValueOf + 86400000*i).valueOf()
        arrayDate=[...arrayDate, dateObj]       
    }
    // console.log(arrayDate);
    return arrayDate
    
}

export default getSevenNextDate