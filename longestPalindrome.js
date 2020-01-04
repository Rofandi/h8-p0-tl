/**
 * Carilah palindrome terpanjang dari sebuah string input.
 *
 * Demo:
 * Case 1
 * Input: 'banana'
 * Output: 'anana'
 *
 * Case 2
 * Input: 'ana'
 * Output: 'ana'
 *
 * Case3
 * Input: 'duyabbcsscbbauyd'
 * Output: 'abbcsscbba'
 *
 * @param {*} str = string input untuk dicari palindrome terpanjangnya
 */

function longestPalindrome(str) {
  for(let i=0; i<str.length/2+1; i++)
  {
    if(str[i]!==str[str.length-1-i])
    {
      if(str[i+1]===str[str.length-1-i])
      {
        str = str.substr(1);
      }
      if(str[i]===str[str.length-2-i])
      {
        str = str.substr(0,str.length-1-i);
      }
    }
  }
  console.log(str);
}

// Test Case
longestPalindrome('banana') // 'anana'
longestPalindrome('ana') // 'ana'
longestPalindrome('duyabbcsscbbauyd') // 'abbcsscbba'