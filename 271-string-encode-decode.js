
function encode(strs) {
    const encodedStrs = [];
    if (strs.length > 0)
        for (let str of strs) {

            encodedStrs.push(`${str?.length}#${str}`);
        }
    // encode each string as below
    // cake -> "4#cake" -> (length + a separator + the actual string)
    
    return encodedStrs; //["2#we", "3#say", "1#:", "3#yes", "10#!@#$%^&*()"]
}


function decode(str) {

    const finalArr = [];

    for (let s of str) {
        let result = '';
        let j = 0;
        let num = '';

        // calculating till where is our string and length separator
        while (s[j] !== '#') {
            num = num + s[j];
            j++;
        }

        let len = num.length;

        // reading the string after the # starts till the end
        for (let i = len + 1; i < s.length; i++) {
            result = result + s[i].toString();
        }

        finalArr.push(result);
    }
    return finalArr;
}


decode(["2#we", "3#say", "1#:", "3#yes", "10#!@#$%^&*()"])