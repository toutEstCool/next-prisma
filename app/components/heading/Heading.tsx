'use client';

import { FC } from "react";
import { IPropsHeading } from "./IProps.interface";

const Heading: FC<IPropsHeading> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-5">
        {subtitle}
      </div>
    </div>
  )
}

export  default Heading

