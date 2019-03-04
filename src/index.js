module.exports = function check(str, bracketsConfig) {
  // your solution

    let sequence = [];

    for (let i = 0; i < str.length; i++) {

        if (sequence[sequence.length - 1] == str[i] && isSame(str[i])){
            sequence.pop();
        } else if (isOpen(str[i])) {
            sequence.push(str[i]);
        } else if (isPair(str[i])) {
            sequence.pop();
        } else {
            return false;
        }
    }

    if (sequence.length == 0) {
        return true;
    }
    return false;


    function isSame (symbol) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (symbol == bracketsConfig[i][0] && bracketsConfig[i][0] == bracketsConfig[i][1]) {
                return true;
            }
        }
    };

    function isOpen(symbol) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (symbol == bracketsConfig[i][0]) {
                return true;
            }
        }
        return false;
    };

    function isPair(symbol) {
        if (sequence.length == 0) {
            return false;
        }
        let lastSymbol = sequence[sequence.length - 1];
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (lastSymbol == bracketsConfig[i][0]) {
                if (symbol == bracketsConfig[i][1]) {
                    return true;
                }
                return false;
            }
        }
    }
}
