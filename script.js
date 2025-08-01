// Iterative
function fibs(n) {
  if (n <= 0) {
    console.log("Enter a number superior to 0. ");
    return;
  } else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
  }
}

/*
function fibsrec(n)
if (n <= 0) {
    console.log("Enter a number superior to 0. ");
    return;
    } else if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        return arr.push(fibsrec(n-1)[n-2] + fibsrec(n-2)[n-3]) 
    }
  */

// Recursive
function fibsRec(n) {
  console.log("iteration");
  if (n <= 0) {
    console.log("Enter a number superior to 0. ");
    return;
  } else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  else {
    prev = fibsRec(n - 1);
    return [...prev, prev[n - 2] + prev[n - 3]];
  }
}
