import { act, renderHook } from '@testing-library/react'
import useHackerScramble from '../useHackerScramble'

describe('useHackerScramble', () => {
  it('Scrambles text and returns original text on completion', () => {
    jest.useFakeTimers()
    const exampleText = 'hackerScramble'
    const { result } = renderHook(() => useHackerScramble(exampleText))
    expect(result.current).not.toEqual(exampleText)
    act(() => {
      jest.advanceTimersByTime((exampleText.length + 4) * 48)
    })
    expect(result.current).toEqual(exampleText)
  })
})
