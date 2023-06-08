'use client';
import useRegisterModal from "@/app/hooks/userRegisterModal";
import Modal from "../Modal";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axiso from 'axios';

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
      Hello body...2222
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