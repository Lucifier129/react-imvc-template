import fetch from 'node-fetch'
import expect from 'expect'

describe('react-imvc test', () => {
	it('should not throw error', async () => {
		let result = await 1 + 1
		expect(result).toBe(2)
	})
})