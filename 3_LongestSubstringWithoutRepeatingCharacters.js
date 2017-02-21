'use strict';
/**
 * Given a string, find the length of the longest substring without repeating characters.
Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    if (s === null) {
        return null;
    }
    var i, substringList = [], maxString = "", maxlength = 0, location;

    for (i = 0; i < s.length; i++) {
        location = substringList.indexOf(s[i]);
        if (location === -1) {
            substringList.push(s[i]);
            if (maxlength <= substringList.length) {
                maxString = substringList.toString();
                maxlength = substringList.length;
                console.log("intermediate string : ", substringList, " !! new char !! ", "    current cursor : ", s[i]);
            }
        } else {
            substringList.push(s[i]);
            substringList = substringList.slice(location + 1);
            console.log("intermediate string : ", substringList, " !! sliced at ", location, "!! ", "    current cursor : ", s[i]);
            if (maxlength <= substringList.length) {
                maxString = substringList.toString();
                maxlength = substringList.length;
                console.log("intermediate string : ", substringList, " !! sliced at 0 !! ", "    current cursor : ", s[i]);
            }
        }
    }

    console.log(maxString);
    return maxlength;

};
var inputs = ["ohvhjdml"];
inputs.forEach(function (input) {
    console.log("input : ", input);
    console.log(" - output : ", lengthOfLongestSubstring(input));
});

