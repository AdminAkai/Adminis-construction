import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

import store from 'src/shared/redux/store.ts'

import NavbarOption from '../NavbarOption.tsx'

const label: string = 'About'
const route: string = '/about'

describe('Navbar Option tests', () => {
  it('Make sure Navbar Option renders label and route', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavbarOption label={label} route={route} ariaLabel='About' />
        </BrowserRouter>
      </Provider>
    )

    const navOption = screen.getByRole('link', { name: 'About' })
    expect(navOption).toBeInTheDocument()
    expect(navOption).toHaveTextContent('About')
    expect(navOption).toHaveAttribute('href', '/about')
  })
})
