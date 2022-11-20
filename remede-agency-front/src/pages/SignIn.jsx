import React from 'react'
import '../style/pages/signIn.css'
import Form from '../components/Form'

const SignIn = () => {
  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
    </div>
  )
}

export default SignIn
