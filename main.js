// // console.log(1)

// // setTimeout(function () {
// // 	console.log('Hello 1')
// // }, 5000) // min time

// // console.log(2)

// // setTimeout(function () {
// // 	console.log('Hello 2')
// // }, 3000)

// // console.log(3)

// // // single-threaded
// // // synchronous code vs asynchronous
// // // call stack - queue
// // // callback functions
// // // AJAX - asynchronous JavaScript and XML
// // //JSON

// // initialize Promise
// let promise = new Promise(function (resolve, reject) {
// 	// resolve('We did it!!!') // handling expected output
// 	reject('Rejected') // handling errors
// })

// console.log(promise)

// // consuming a promise - then() // method chaining
// promise
// 	.then(function (response) {
// 		console.log(response)
// 	})
// 	.catch(function (error) {
// 		console.log(error)
// 	})

let isWifeHappy = true

// promise initialized
const willGiveMeFavoriteDinner = new Promise(function (resolve, reject) {
	if (isWifeHappy) {
		let dinner = {
			drink: 'Horchata',
			dish: 'Veggie burrito',
		}
		resolve(dinner)
	} else {
		let reason = new Error('Wife is not happy, need to make up with a gift.')
		reject(reason)
	}
})

function askWife() {
	willGiveMeFavoriteDinner
		.then(function (fullfilled) {
			console.log(fullfilled)
		})
		.catch(function (error) {
			console.log(error)
		})
} //

askWife()
