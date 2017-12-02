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
}