'use client';
import useRegisterModal from "@/app/hooks/userRegisterModal";
import Modal from "../Modal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axiso from 'axios';
import Heading from "../../heading/Heading";
import Inputs from "../../inputs/Inputs";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc'
import Button from "../../button/Button";
import { toast } from "react-hot-toast";
import { signIn } from 'next-auth/react'

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
        toast.error('Something Went Wrong 👾')
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

  const footerContent = (
      <div className='flex flex-col gap-4 mt-5'>
        <hr />
        <Button 
          outline
          label='Continue with Google'
          icon={FcGoogle}
          onClick={() => signIn('google')}
        />
        <Button 
          outline
          label='Continue with GitHub'
          icon={AiFillGithub}
          onClick={() => signIn('github')}
        />
        <div 
          className="
            text-neutral-500 
            text-center 
            mt-4 
            font-light
          "
        >
          <p>Already have an account?
            <span 
              onClick={registerModal.onClose} 
              className="
                text-neutral-800
                cursor-pointer 
                hover:underline
              "
              > Log in</span>
          </p>
        </div>
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
      footer={footerContent}
    />
  )
} 

export default RegisterModal