// Type assetion option 1
let channel : any = 'Cadena texto'
let channelStr = <string> channel

// Type assetion option 2
let channelStrOpTwo = channel as string

// Type assetion con Html option 1
const myCanvas = document.getElementById('main') as HTMLCanvasElement

// Type assetion con Html option 2
const myCanvasOptTwoo = <HTMLCanvasElement> document.getElementById('main')
