import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import github from './GitHubCard'

test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('renders a snapshot', () => {
  const tree = renderer.create(<github/>).toJSON()
  expect(tree).toMatchSnapshot()
})
