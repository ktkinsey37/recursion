/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx == nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
  if (idx == words.length) return longestWord;
  longestWord = Math.max(words[idx].length, longestWord)
  return longest(words, idx+1, longestWord)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherOut = "", letterIndicator=true) {
  if (idx == str.length){
    return everyOtherOut;
  }
  if (letterIndicator){
    everyOtherOut += str[idx]
  }
  return everyOther(str, idx + 1, everyOtherOut, !letterIndicator )
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, leftIdx = 0, rightIdx = str.length-1) {
  if (str == "") return false;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] != str[rightIdx]) return false;
  return isPalindrome(str, leftIdx+1, rightIdx-1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx == arr.length) return -1
  if (arr[idx] == val) return idx
  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(arr, output = "", idx=arr.length-1) {
  if (idx < 0) return output
  output += arr[idx]
  return revString(arr, output, idx-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj){
  let output = []
  for (let key in obj){
    if (typeof obj[key] == "string"){
      output.push(obj[key])
    }
    if (typeof obj[key] == "object"){
      output.push(...gatherStrings(obj[key]))
    }
  }

  return output
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
