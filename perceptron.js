'use strict'

class Perceptron {
	constructor (weights, bias) {
		this._weights = weights
		this._bias = bias
	}
	set weights (weights) {
		this._weights = weights
	}
	set bias (bias) {
		this._bias = bias
	}
	process (inputs, func) {
		let sum = this._bias
		for (let i = 0; i < inputs.length; i++) {
			sum += inputs[i] * this._weights[i];
		}
		return func(sum);
	}
	adjust (inputs, delta, learningRate) { // learningRate ~ (0, 1]
		for (let i = 0; i < inputs.length; i++) {
			this._weights[i] += learningRate * delta * inputs[i] 
		}
		this._bias += learningRate * delta
	}
}