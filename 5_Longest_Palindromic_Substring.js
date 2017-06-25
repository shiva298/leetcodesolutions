/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let maxlen = 0, maxPalenString="",temp;
    for(let idx=0;idx<s.length;idx++){
        temp = checkPalindrome(s,idx,idx, maxlen);   
        maxlen = temp[0];
        maxPalenString = temp[1];
        temp = checkPalindrome(s,idx, idx+1,maxlen);   
    }
return maxPalenString;
};

var checkPalindrome = function(s, j,k,maxlen){
    let maxPalenString = "";

    while(j>=0 && k<=s.length && s.charAt(j) === s.charAt(k)){
        j--;
        k++;
    }
    if(maxlen < k - j){
            console.log("old -  j = ", j, "k = ", k, " maxlen : ",maxlen, " maxPalenString : ", maxPalenString);
            maxlen = k - j ;

            maxPalenString = s.slice(j ,k);
            console.log("new -->  maxlen : ",maxlen, "maxPalenString : ", maxPalenString);
        }

return [maxlen , maxPalenString];
}

console.log(longestPalindrome("ccbaabad"));