function alarm (jamAlert){
    jamAlert = jamAlert.split(':');
    
    let date = new Date;
    let minutes = date.getMinutes();
    let hour = date.getHours();
    
    return `alarm set for ${Math.abs((jamAlert[0] % 24) - (hour % 24))} hour ${Math.abs((jamAlert[1] % 60) - (minutes % 60))} minute from now`
    
    }
    
console.log(alarm("17:05"));
    

