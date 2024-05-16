import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding-left: 48px;
`

export const RegisterImage = styled.img`
  width: 500px;
  height: 450px;
  margin-left: 96px;
`

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 280px;
  align-items: flex-start;
`

export const RegisterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  color: #334155;
  margin-bottom: 0;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #7b8794;
  font-weight: bold;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #64748b;
  margin-bottom: 10px;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  outline: none;
`

export const RegisterNowButton = styled.button`
  height: 40px;
  width: 150px;
  background-color: #3b82f6;
  border: none;
  border-radius: 8px;
  padding: 8px 16px 8px 16px;
  margin-top: 40px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ff0b37;
`
