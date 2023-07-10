'use client';

import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Modal from '../Modal';
import Heading from '../../heading/Heading';
import Inputs from "../../inputs/Inputs";
import { toast } from 'react-hot-toast';
import Button from '../../button/Button';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useRouter } from 'next/navigation';

const LoginModal = (): JSX.Element => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: {
    errors
  }} = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })


  const onSubmit: SubmitHandler<FieldValues> = ( data ) => {
    setIsLoading(true)
    signIn('credentials', {
      ...data,
      redirect: false
    }).then(callback => {
      setIsLoading(false)

      if (callback?.ok) {
        toast.success('Logged in')
        router.refresh()
        loginModal.onClose()
      }

      if (callback?.error) {
        toast.error(callback.error)
      }
    })
  }

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading 
        title='Welcome back'
        subtitle='Login to your account!'
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
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
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
        onClick={() => {}}
      />
      <Button 
        outline
        label='Continue with GitHub'
        icon={AiFillGithub}
        onClick={() => {}}
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
            onClick={loginModal.onClose} 
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
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal;