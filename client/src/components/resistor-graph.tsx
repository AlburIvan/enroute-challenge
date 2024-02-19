import { useEffect, useState } from 'react';
import resistorImage from '../assets/resistor-color-diagram-bg.png';

export const ResistorGraph = () => {
  const [band1Color, setBand1Color] = useState<string>('bg-slate-500');
  const [band2Color, setBand2Color] = useState<string>('bg-slate-500');
  const [multiplierColor, setMultiplierColor] = useState<string>('bg-slate-500');
  const [toleranceColor, setToleranceColor] = useState<string>('bg-slate-500');

  useEffect(() => {
    const form = document.getElementById('resistor-form');

    if (!form) {
      return;
    }

    const onChange = (e: Event) => {
      const radioChecked = (e.target as HTMLInputElement).dataset;
      const bandPosition = radioChecked.bandPosition;
      const bandColor = radioChecked.color ?? 'bg-slate-500';

      switch (bandPosition) {
        case '1':
          setBand1Color(bandColor);
          break;
        case '2':
          setBand2Color(bandColor);
          break;
        case '3':
          setMultiplierColor(bandColor);
          break;
        case '4':
          setToleranceColor(bandColor);
          break;
        default:
          break;
      }
    };

    form.addEventListener('change', onChange);

    return () => form.removeEventListener('change', onChange);
  }, []);

  return (
    <div className='relative'>
      <img src={resistorImage} className='w-56' alt='A blank 4-band resistor' />

      {/* Band 1 */}
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[24px]'>
        <div className={`w-4 h-[51px] ${band1Color}`}></div>
      </div>

      {/* Band 2 */}
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[60px]'>
        <div className={`w-4 h-[40px] ${band2Color}`}></div>
      </div>

      {/* Multiplier */}
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[95px]'>
        <div className={`w-4 h-[40px] ${multiplierColor}`}></div>
      </div>

      {/* Tolerance */}
      <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-[198px]'>
        <div className={`w-4 h-[51px] ${toleranceColor}`}></div>
      </div>
    </div>
  );
};
