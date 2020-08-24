// Fixed code
function findSmallest(a, b, c) {
  if (a > b > c) {
    return c;
  } 
  else if (a > c > b) {
    return a;
  } 
  else {
    return b;
  }
}

findSmallest(52, 66, 2); //fixed spelling



// The line that contains the problem is line 14 - the function call is not spelled correctly.

// The debug method I used to find the bug is putting a breakpoint on the function call (line 15)

// The debugger couldn't get into the function so I understood the problem was in line 15- so I found that the problem was with the spelling, so the function call was not recognized.

