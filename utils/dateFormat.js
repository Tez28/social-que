const newDateSuffix = date => {
    let dateString = date.toString();

    //retrieves last character of string
    const lastChar = dateString.charAt(dateString.length - 1);

    if (lastChar === '1' && dateString !== '11') {
        dateString = `${dateString}st`;
    } else if (lastChar === '2' && dateString !== '12') {
        dateString = `${dateString}nd`;
    } else if (lastChar === '3' && dateString !== '13') {
        dateString = `${dateString}rd`;
    } else {
        dateString = `${dateString}th`;
    }
    // returns date
    return dateString;
};

// format to format and accept timestamp and option as parameter
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let months;
    if (monthLength === 'short'){
        months = {
          0: 'Jan',
          1: 'Feb',
          2: 'Mar',
          3: 'Apr',
          4: 'May',
          5: 'Jun',
          6: 'Jul',
          7: 'Aug',
          8: 'Sep',
          9: 'Oct',
          10: 'Nov',
          11: 'Dec'
        };
    } else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }

    // add date object
    const dateObj = new Date(timestamp);
    const formatMonth = months[dateObj.getMonth()];

    let dayMonth;

    if (dateSuffix) {
        dayMonth = newDateSuffix(dateObj.getDate());
    }else {
        dayMonth = dateObj.getDate();
    }
    const year = dateObj.getFullYear();

    //get time
    let hour;
    if (dateObj.getHours > 12) {
        hour = Math.floor(dateObj.getHours() /2);
    } else {
        hour = dateObj.getHours();
    }
    if (hour === 0) {
        hour =12;
    }
    const minutes = dateObj.getMinutes();

    let timeOfDay;
    if (dateObj.getHours () >= 12) {
        timeOfDay = 'pm';
    } else {
        timeOfDay = 'am';
    }
    const formatTimeStamp = `${formatMonth} ${dayMonth}, ${year}at ${hour}:${minutes} ${timeOfDay}`;
    return formatTimeStamp

};