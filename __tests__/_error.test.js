import React from 'react';
import ErrorPage from '../src/pages/_error';
import renderer from 'react-test-renderer';

describe('ErrorPage should show', () => {
	test('server error if statusCode exists', () => {
		const component = renderer.create(<ErrorPage statusCode={500} />)
		let tree = component.toTree()

		expect(tree).toMatchSnapshot()
		expect(tree.rendered.type).toBe('p')
		expect(tree.props.statusCode).toEqual(500)
		expect(tree.rendered.props.children).toBe('An error 500 occurred on server')
	})

	test('client error if statusCode undefined', () => {
		const component = renderer.create(<ErrorPage />)
		let tree = component.toTree()

		expect(tree).toMatchSnapshot()
		expect(tree.rendered.type).toBe('p')
		expect(tree.props.statusCode).toEqual(undefined)
		expect(tree.rendered.props.children).toBe('An error occurred on client')
	})
})
