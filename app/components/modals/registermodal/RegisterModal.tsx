'use client';
import useRegisterModal from "@/app/hooks/userRegisterModal";
import Modal from "../Modal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axiso from 'axios';
import Heading from "../../heading/Heading";
import Inputs from "../../inputs/Inputs";

const RegisterModal: React.FC = (): JSX.Element => {
  const registerModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)


  const { register, handleSubmit, formState: {
    errors
  }} = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    axiso.post('/api/register', data)
      .then(() => {
        registerModal.onClose()
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading 
       title='Welcome to Airbnb'
       subtitle='Create an account!'
      />
      <Inputs 
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs 
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Inputs 
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )
  return (
    <Modal 
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
} 

export default RegisterModal