import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import store from 'src/shared/redux/store.ts'

import Navbar from '../Navbar.tsx'
import theme from 'src/shared/lib/theme.ts'

describe('Navbar tests', () => {
  it('Make sure all Navbar Options are available', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    )
    const AboutOption = screen.getByText('About')
    const AdminisTitle = screen.getByText('λdminis')
    expect(AboutOption).toBeInTheDocument()
    expect(AdminisTitle).toBeInTheDocument()
  })

  it('Make sure navbar light/dark mode toggle functions', async () => {
    const user = userEvent.setup()

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    )

    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.darkTheme.nav})`
    )

    expect(screen.getByLabelText('Moon Icon')).toBeVisible()
    const IconButton = screen.getByLabelText('Icon Button')

    await user.click(IconButton)

    expect(screen.getByLabelText('Sun Icon')).toBeVisible()
    expect(container.firstChild).toHaveStyle(
      `background-color: ${theme.lightTheme.nav})`
    )
  })

  it('Navbar snapshot renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
