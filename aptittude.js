

function neme(x, a, b, i, j) {
    let k = j
    let ct = 0
    while (k > i - 1) {
        // console.log("ini K ",k)
        if (x[k] <= b && x[k] <= a) {
            ct = ct + 1
            // console.log("ini CT ", ct, x[k])
        }
        k = k - 1
    }
    return ct
}

let x = [11,10,10,5,10,15,20,10,7,11] 

console.log(neme(x,8,18,3,6))
console.log(neme(x,10,20,0,9))
console.log(neme(x,8,18,6,3))
console.log(neme(x,20,10,0,9))
console.log(neme(x,6,7,8,8))


function g(str) {
    let i = 0
    let new_str = ''
    while (i< str.length -1 ){
        new_str = new_str + str[i+1]
        i = i + 1
    }
    return new_str
}

function f(str) {
    if(str.length === 0 ) {
        return ""
    }
    else if ( str.length === 1) {
        return str
    }
    else {
        return f(g(str)) + str[0]
    }
}

function h(n,str) {
    while( n != 1) {
        if(n % 2 == 0) {
            n = n/2
        }
        else {
            n = 3*n + 1
        }
        str = f(str)
    }
    return str
}

function pow(x , y) {
    if(y == 0){
        return 1
    }
    else {
        return x * pow(x, y-1)
    }

}

console.log( h(1, "fruits"))
console.log( h(2, "fruits"))
console.log( h(3, "fruits"))
console.log( h(2, "fruits"))
console.log( h(pow(2,1000000000000000), "fruits"))
console.log( h(pow(2,9831050005000007), "fruits"))




/*-----------------------------------------------------------------------------------------*/

let input = [2,1,10,3,8,20,4]
function abkt(a) {
    if(a.length % 3 === 1) {
        for(let i = 0 ; i < a[0] ; i++) {
            
        }
    }
}