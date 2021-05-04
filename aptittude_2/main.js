const fs = require('fs')
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function hitung(arr, test) {
    let compile = []
    let result = ''
    for (let i = arr[0]; i <= arr[1]; i++) {
        if (i % arr[2] === 0) {
            compile.push(i)
        }
    }
    result = `Case ${test}: ${compile.length}`

    fs.writeFile('output.txt', result+`\n`, { flag: 'a' }, (err, data) => {
        if (err) throw err;
    })

    return result
}

function main() {
    let testCase = 0
    let arr = []
    let test = 0
    rl.on('line', (input) => {
        if (testCase === 0) testCase = input
        else if (arr.length < 3) {
            arr.push(+input)
        }
        if (arr.length === 3) {
            test += 1
            console.log(hitung(arr, test))
            arr = []
        }
    });
    rl.on('close', () => {
        testCase = 0
    })

}

main()