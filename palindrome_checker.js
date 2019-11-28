function palindrome(str) {
    // count the string from the front
    var front = 0
    // count the string from the back
    var back = str.length - 1
    
    // a while loop to check our conditions
    while(back > front){
      // check if the front string matches and 
      if(str[front].match(/[\W_]/g)){
        front++
        continue;
      }
  
      if(str[back].match(/[\W_]/g)){
        back--
        continue;
      }
  
      // check if string match
      if(str[front].toLowerCase() !== str[back].toLowerCase())
        return false;
        front++;
        back--;
    }
    return true;
  }
  
  
  
console.log(palindrome("2a3*3a2"))
  