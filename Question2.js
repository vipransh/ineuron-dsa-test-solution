// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1


const s="leetcode"


function getNonRepeatingCharacter(s) {
    for (let i = 0; i < s.length; i++) {
        if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
            return s.charAt(i)
        }
    }
    return -1;    
}

console.log(getNonRepeatingCharacter(s));
