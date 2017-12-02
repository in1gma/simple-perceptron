'use strict'

let test = () => {
	try {
		let items = {
			"\
			00011000\
			00011000\
			11111111\
			00011000\
			00011000\
			" : 1,
			"\
			11111111\
			11000011\
			11000011\
			11000011\
			11111111\
			" : 0
		}

		// init
		let rnd = () =>  Math.random() * 2 - 1
		let weightsCount = 58;
		let perceptron = new Perceptron(Array.from({ length: weightsCount }, rnd), rnd())

		// train
		train(perceptron, 1000, 0.01, heaviside, items)

		// test
		for (var data in items) {
			let result = perceptron.process(data, heaviside)
			console.log(`result: ${result}, real: ${items[data]}`)
		}

		// show self
		console.info(perceptron)
	} catch (e) {
		console.error(e)
	}
}

test()