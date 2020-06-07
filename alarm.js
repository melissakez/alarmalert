function alarm (jamAlert){
    jamAlert = jamAlert.split(':');
    
    let date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();
    
    return `alarm set for ${Math.abs(jamAlert[0] - hour)} hour ${Math.abs(jamAlert[1] - minutes)} minute from now`
    
    }
    
console.log(alarm("12:50"));
    

