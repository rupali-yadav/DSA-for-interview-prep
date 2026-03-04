var isPalindrome = function (s) {

    let l = 0;
    let r = s.length - 1;

    const isAlphaNumeric = (char) => {
        const code = char.charCodeAt(0);
        // A-Z: if can't memorize; remember start code and add 25 as we have total 26 letters;
        if (code >= 65 && code <= 90) return true;
        // a-z 
        if (code >= 97 && code <= 122) return true;
        // 0-9
        if (code >= 48 && code <= 57) return true;

        return false;
    }

    while (l < r) {
        // for every iteration create a window from l to r 
        // till they reach mirroring indexes avoiding the nonAlphanumeric chars
        while (l < r && !isAlphaNumeric(s[l])) l++;
        while (l < r && !isAlphaNumeric(s[r])) r--;

        //compare letters
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        // move l and r to chnage the window size
        l++;
        r--;

    }

    return true;

}


console.log(isPalindrome("A man, a plan, a canal: Panama"));