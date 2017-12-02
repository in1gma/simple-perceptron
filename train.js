var train = (perceptron, epochs, learningRate, actFunc, items) => {
	for (let i = 0; i < epochs; i++) {
		for (let [data, actual] of Object.entries(items)) {
			let expected = perceptron.process(data, actFunc)
			let delta = expected - actual
			perceptron.adjust(data, delta, learningRate)
			console.log(delta)
		}
	}
}