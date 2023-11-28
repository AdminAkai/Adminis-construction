import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import PanelDescription from '../PanelDescription.tsx'

const testDescription: string = 'test description'

describe('PanelDescription tests', () => {
  it('Make sure PanelDescription renders children', () => {
    render(<PanelDescription>{testDescription}</PanelDescription>)

    const panelDescription = screen.getByLabelText('Project Description')

    expect(panelDescription).toBeVisible()
    expect(panelDescription).toHaveTextContent(testDescription)
  })

  it('PanelDescription snapshot renders correctly', () => {
    const tree = renderer
      .create(<PanelDescription>{testDescription}</PanelDescription>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
