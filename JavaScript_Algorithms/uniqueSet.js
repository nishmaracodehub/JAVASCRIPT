//unique values using set Data Structure
function unique(str) {
  // Set only accepts unique values
  // Method 1
  //return new Set(str).size === str.length;

  // Method 2
  const tempStr = new Set();
  for (const value of str) {
    if (tempStr.has(value)) {
      return false;
    }
    tempStr.add(value);
  }
  return true;
}

console.log(unique("abcd"));
// true
console.log(unique("abcdad"));
// false
