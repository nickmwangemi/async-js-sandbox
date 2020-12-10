document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
// document.getElementById('button3').addEventListener('click', getAPIData)

// local text data
function getText() {
	// returns promise
	fetch('test.txt')
		.then(function (response) {
			return response.text()
		})
		.then(function (data) {
			document.getElementById('output').innerHTML = data
		})
		.catch(function (error) {
			console.log(error)
		})
}

// local json data
function getJson() {
	fetch('posts.json')
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			let output = ''
			data.forEach((post) => {
				output += `<h3> ${post.title}</h3>\n<p>${post.body}</p>`
			})

			document.getElementById('output').innerHTML = output
		})
		.catch((error) => console.log(error))
}

// API - Application Programming Interface - connect/interact systems
// frontend - React
// backend - PHP
// React, NodeJs
