while (1) {
    var time = new Date().getTime();
    var year = new Date().getFullYear();
    var month = (new Date().getMonth()) + 1;
    var data = new Date().getDate();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var day = new Date().getDay();
    var Time = year + '-' + month + '-' + data + ' ' + hours + ':' + minutes + ' ' + 'w:' + day;
    // console.log(`time is: ` + (time + 1));
    // console.log(`now is: ${now + 1}`);
    if (last_min != minutes) {
        alert('1 minute has gone,Now Time is:' + Time);
    }
    // console.log(location);
    var last_min = minutes;
}