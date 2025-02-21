import { render, screen } from '@testing-library/react'
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
})
