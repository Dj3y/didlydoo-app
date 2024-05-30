function remaningTime(time_togo){
    let date_now = new Date();
    time_togo= new Date(time_togo);

    let time_left = Math.ceil((time_togo.getTime()-date_now.getTime())/(1000*60*60*24)); // display days 

    return time_left;
}

export {remaningTime};