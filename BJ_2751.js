/**
 * 백준2751 - 수 정렬하기2 (실버5)
 */
const input = require('fs').readFileSync('input_2751.txt').toString().split('\n')
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const N = parseInt(input[0]);
let arr = input.slice(1,N+1).map(Number)
arr.sort((a,b)=> a-b)
console.log(arr.join('\n'))