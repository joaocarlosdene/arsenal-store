import React, { useState, useEffect } from 'react'
import Styles from './login.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaSignInAlt } from 'react-icons/fa'
import Header from '../components/header/header';
import { useSelector, useDispatch } from 'react-redux'
import background from '../images/background.png'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner'
import { reset } from '../redux/features/authentication/authSlice';
import { postLogin } from '../API/API';

function BasicExample() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { user, loading, isSuccess, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/')
    }
    
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (loading) {
    return <LoadingSpinner />
  }
  const { email, password } = formData

  const OnchangeForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(postLogin(userData))
  }


  return (
    <div className='text-center'>
      <img className={Styles.img_background} src={background}></img>
      <Header />
      <h1 className={Styles.titulo}>
        <FaSignInAlt /> Login
      </h1>
      <Form className={Styles.formulario}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={OnchangeForm} name='email' value={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={onSubmit} className={Styles.btn}>
          Entrar
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;    