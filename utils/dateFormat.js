const {format} = require('date-fns');

//define date format
const dateFormat = (date) => {
    return format(date, 'MM/dd/yyyy');
};

module.exports = {dateFormat};

