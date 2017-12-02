var train = (perceptron, epochs, learningRate, actFunc, getFunc) => {
	for (let i = 0; i < epochs; i++) {
		for (let [data, actual] of getFunc) {
			let expected = perceptron.process(data, actFunc)
			let delta = expected - actual
			perceptron.adjust(data, delta, learningRate)
		}
	}
}