const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let hey = "";
    for (i = 0; i < num; i++) {
      hey += string;
    }
    return hey;
};

// Do not edit below this line
module.exports = repeatString;
