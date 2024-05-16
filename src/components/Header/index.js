import {Link} from 'react-router-dom'

import {Navbar, WebsiteLogo} from './styledComponents'

const Header = () => (
  <Navbar>
    <Link to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Navbar>
)

export default Header
