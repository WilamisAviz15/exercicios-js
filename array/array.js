console.log(typeof Array, typeof new Array, typeof [])

let AP = new Array('Bia', 'Carlos', 'Ana')
console.log(AP)

AP = ['Bia', 'Carlos', 'Ana']
console.log(AP[0])
console.log(AP[1])
console.log(AP[2])

AP[3] = 'Paulo'
AP.push('Abia')

console.log(AP.length)
AP.sort()
console.log(AP)

delete AP[1]
console.log(AP[2])

AP = ['Bia', 'Carlos', 'Ana']
AP.splice(1, 1)
console.log(AP)