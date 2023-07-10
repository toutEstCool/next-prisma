'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../../avatar/Avatar';
import React from 'react';
import MenuItem from '../menuitem/MenuItem';
import useRegisterModal from '@/app/hooks/userRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface IPropsUserMenu {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<IPropsUserMenu> = ({ currentUser }): JSX.Element => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = React.useCallback(() => {
    setIsOpen(value => !value)
  }, [])
  
  return (
    <div className="relative">
    <div className="flex flex-row items-center gap-3">
      <div
        className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" 
        >Airbnb your home</div>
      <div onClick={toggleOpen} className='px-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
        <AiOutlineMenu />
        <div className='hidden md:block'>
          <Avatar src={currentUser?.image} />
        </div>
      </div>
    </div>
    {
      isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
          {
              currentUser ? (
                <>
                <MenuItem label='Trips' onClick={() => {}}/>
                <MenuItem label='Favorites' onClick={() => {}}/>
                <MenuItem label='Reservations' onClick={() => {}}/>
                <MenuItem label='Properties' onClick={() => {}}/>
                <MenuItem label='Airbnb my home' onClick={() => {}}/>
                <hr />
                <MenuItem label='Logout' onClick={() => signOut()}/>
                </>
              ) : (
                <>
                <MenuItem label='Login' onClick={loginModal.onOpen }/>
                <MenuItem label='Sign Up' onClick={registerModal.onOpen }/>
                </>
              )
            }
          </div>
        </div>
      )
    }
  </div>
  )
}

export default UserMenu