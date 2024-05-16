import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 62px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 0;
  margin-top: 48px;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  color: #475569;
`

export const RegisterButton = styled.button`
  height: 50px;
  width: 135px;
  background-color: #3b82f6;
  border: none;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  padding: 8px 16px 8px 16px;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
`

export const MeetupImage = styled.img`
  width: 1040px;
  height: 500px;
  margin-top: 48px;
  margin-bottom: 24px;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 64px;
  font-weight: bold;
  color: #2563eb;
  margin-top: 48px;
  margin-bottom: 0;
`

export const Topic = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  color: #334155;
  margin-top: 20px;
  margin-bottom: 0px;
`
