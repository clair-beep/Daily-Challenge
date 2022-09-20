const leastLarger = (a,i) => a.indexOf(Math.min(...a.filter(el => el > a[i])))

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ))// 3 ))

function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    const leastLargeVal = Math.min(...largerVals)
    
    return a.findIndex(num => num === leastLargeVal)
}