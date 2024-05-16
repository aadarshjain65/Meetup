import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  AppContainer,
  HomeContainer,
  Heading,
  Description,
  RegisterButton,
  MeetupImage,
  Name,
  Topic,
} from './styledComponents'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value
        return (
          <AppContainer>
            <Header />
            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the topic</Description>
                <Link to="/register">
                  <RegisterButton type="button" onClick={onRegister}>
                    Register
                  </RegisterButton>
                </Link>
                <MeetupImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </AppContainer>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
