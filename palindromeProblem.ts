const isPalindrome = (num: number): boolean => {
    if(num < 0 ){
        console.info('the number that you entered is less than 0!');
        return false;
    }
    const originalStr = num.toString();
    const reversedStr = originalStr.split('').reverse().join('');
    return originalStr === reversedStr;
}

console.log(isPalindrome(121)); //output: true
