import { render, screen } from '@testing-library/react'
import renderer, { act } from 'react-test-renderer'
import '@testing-library/jest-dom'

import Adminis from '../Adminis.tsx'

const AdminisTitle = 'λdminis'

describe('Adminis tests', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.clearAllTimers()
  })

  it('Should scramble then render Adminis', () => {
    const spy = jest.spyOn(global, 'setInterval')
    render(<Adminis />)
    const title = screen.getByLabelText('Adminis Title')
    expect(spy).toHaveBeenCalled()
    expect(title).toBeEmptyDOMElement()
    act(() => {
      for (let i = 0; i <= AdminisTitle.length; i++) {
        jest.advanceTimersByTime(310)
      }
    })
    expect(title).toHaveTextContent(AdminisTitle)
  })

  it('Adminis renders correctly', () => {
    const tree = renderer.create(<Adminis />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
