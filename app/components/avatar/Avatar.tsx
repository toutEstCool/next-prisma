'use client';

import Image from "next/image";

const Avatar: React.FC = (): JSX.Element => {
  return (
    <Image 
    className="rounded-full"
    height={30}
    width={30}
    src="/images/placeholder.jpg" 
    alt={"User Avatar"} 
  />
  )
}

export default Avatar