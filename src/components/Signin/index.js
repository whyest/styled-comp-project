import React from 'react'
import {
  FormH1,
  Container,
  Icon,
  FormContent,
  Form,
  FormWrap,
  FormInput,
  FormLabel,
  Text,
  FormButton,
} from './SigninElements'

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Fancy Logo</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Sign in to your accoutn</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin
