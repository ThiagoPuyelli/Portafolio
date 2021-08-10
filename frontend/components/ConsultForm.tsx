import { useForm } from "react-hook-form"
import { useFela } from "react-fela"
import { useSelector } from "react-redux"
import React from "react"
import themeDefine from "../utils/themeDefine"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import StoreInterface from "../interfaces/StoreInterface"
import axios from 'axios'
import { env } from "../next.config"

const consultSchema = yup.object({
  matter: yup.string().required().max(70),
  description: yup.string().required().max(400),
  phone: yup.string().required().max(30),
  email: yup.string().required().max(30).email()
})

export default function ContactForm () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(consultSchema)
  })
  const { css } = useFela()
  const theme = useSelector((state: StoreInterface) => state.theme.theme)
  const color = useSelector((state: StoreInterface) => state.theme.color)
  const submitForm = async (data: any) => {
    try {
      const response = await axios.post(env.URI + '/mail', { ...data })
      if (!response || response.data.code) {
        console.log(response)
      } else {
        const form: HTMLElement|null = document.querySelector('form')
        const msgSubmit: HTMLElement|null = document.querySelector('#msgSubmit')
        if (form) form.style.display = 'none'
        if (msgSubmit) msgSubmit.style.display = 'block'
      }
    } catch (err) {
      console.log(err.message || err)
    }
  }
  
  const consultStyle = css({
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    marginBottom: '30px',
    boxShadow: 'none !important',
    '> label, input, textarea': {
      marginTop: '20px'
    },
    '> input, textarea': {
      fontSize: '16px',
      width: '300px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0px 0px 4px ' + themeDefine(theme, '#ccc', 'black'),
      border: '1px solid ' + themeDefine(theme, '#ccc', 'black')
    },
    '> textarea': {
      height: '200px'
    },
    '> label': {
      fontSize: '20px'
    },
    '> input[type="submit"]': {
      cursor: 'pointer',
      backgroundColor: 'var(--green2)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '19px',
      transition: '300ms all',
      ':hover': {
        backgroundColor: 'var(--green3)'
      }
    },
    '> .msgError': {
      color: 'red',
      marginTop: '10px',
      fontSize: '20px'
    },
  })

  const msgSubmit = css({
    display: 'none',
    fontSize: '30px',
    color,
    marginBottom: '20px',
  })
  
  return (
    <React.Fragment>
      <h1>Consulta</h1>
      <form className={consultStyle} onSubmit={handleSubmit(submitForm)}>

        <label htmlFor='matter'>Asunto</label>
        <input type="text" placeholder='Asunto' {...register('matter')} />
        {errors.matter?.type === 'required' && 
        <span className='msgError'>El asunto es requerido</span>}
        
        <label htmlFor="description">Descripción</label>
        <textarea {...register('description')} placeholder='Descripción'></textarea>
        {errors.description?.type === 'required' && 
        <span className='msgError'>La descripción es requerida</span>}
        
        <label htmlFor="phone">Teléfono</label>
        <input type="number" placeholder='Teléfono' required {...register('phone')} />
        {errors.phone?.type === 'required' && 
        <span className='msgError'>El teléfono es requerido</span>}
  
        <label htmlFor="email">Email</label>
        <input type="email" placeholder='Email' {...register('email')} />
        {errors.email?.type === 'required' && 
        <span className='msgError'>El email es requerido</span>}
        
        <input type="submit" value='Enviar' />
      </form>
      <span className={msgSubmit} id='msgSubmit'>✓ Consulta enviada!!</span>
    </React.Fragment>
  )
}