let x = 121

function isPalindromeNumber(x) {
    const strX = String(x)
    const arrX = Array.from(strX)
    const times = Math.floor(arrX.length/2)
    for (let i = 0; i <= times; i++) {
        if (arrX[i] !== arrX[arrX.length-i-1])
        return false
    }
    return true
   
}

console.log(isPalindromeNumber(x))