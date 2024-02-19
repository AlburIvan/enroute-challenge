import React from 'react';
import { Band } from '../types';
import { classNames } from '../utils/utils';

interface BandsProps {
  title: string;
  colors?: Band[];
  bandPosition: number;
}

const Bands: React.FC<BandsProps> = ({ title, colors, bandPosition }: BandsProps) => {
  return (
    <div className='flex flex-col space-y-8 place-self-start'>
      <p className='font-semibold'>{title}</p>
      <div className='flex flex-row flex-wrap'>
        {colors
          ? colors.map((code, index) => {
              const { name, bgColor } = code;

              const customId = `band-${bandPosition}-${name}`;

              return (
                <div key={index} className='mb-6 mr-2'>
                  <input
                    id={customId}
                    type='radio'
                    name={`band-${bandPosition}`}
                    value={name}
                    className='hidden peer'
                    data-color={bgColor}
                    data-band-position={bandPosition}
                    required
                  />
                  <label
                    htmlFor={customId}
                    className={classNames(
                      `py-2.5 px-4 font-thin text-sm transition-all duration-200 rounded-xl select-none cursor-pointer`,
                      `bg-slate-100 dark:bg-slate-600 hover:${bgColor} peer-checked:${bgColor}`
                    )}
                    tabIndex={0}>
                    {name}
                  </label>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Bands;
