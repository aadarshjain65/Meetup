import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  AppContainer,
  RegisterContainer,
  RegisterImage,
  RegisterForm,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterNowButton,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const onSubmitRegistration = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        const val = event.target.value
        const obj = topicsList.filter(each => each.id === val)
        const text = obj[0].displayText
        changeTopic(text)
      }

      return (
        <AppContainer>
          <Header />
          <RegisterContainer>
            <RegisterImage
              src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
              alt='website register'
            />
            <RegisterForm onSubmit={onSubmitRegistration}>
              <RegisterHeading>Let us join</RegisterHeading>
              <InputContainer>
                <Label htmlFor='nameInput'>NAME</Label>
                <Input
                  type='text'
                  id='nameInput'
                  value={name}
                  onChange={onChangeName}
                  placeholder='Your name'
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor='topicInput'>TOPICS</Label>
                <Select id='topicInput' onChange={onChangeTopic}>
                  {topicsList.map(eachTopic => (
                    <option key={eachTopic.id} value={eachTopic.id}>
                      {eachTopic.displayText}
                    </option>
                  ))}
                </Select>
              </InputContainer>
              <RegisterNowButton type='submit'>Register Now</RegisterNowButton>
              {showError === true ? (
                <ErrorMsg>Please enter your name</ErrorMsg>
              ) : (
                ''
              )}
            </RegisterForm>
          </RegisterContainer>
        </AppContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
