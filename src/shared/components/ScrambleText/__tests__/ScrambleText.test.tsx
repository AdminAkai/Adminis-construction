import { act, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ScrambleText from '../ScrambleText.tsx'

describe('ScrambleText', () => {
  it('Renders ScrambleText component.', () => {
    jest.useFakeTimers()
    const spy = jest.spyOn(global, 'setInterval')
    const exampleText = 'ScrambleText'
    render(<ScrambleText text={exampleText} />)
    expect(spy).toHaveBeenCalled()
    act(() => {
      jest.advanceTimersByTime(exampleText.length * 60)
    })
    const originalText = screen.getByText(exampleText)
    expect(originalText).toHaveTextContent(exampleText)
  })
})
