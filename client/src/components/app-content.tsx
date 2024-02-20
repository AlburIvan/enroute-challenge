import { useRef, useState } from 'react';
import { firstBandCodes, multiplierCodes, secondBandCodes, toleranceCodes } from '../utils/codes';
import Bands from './bands';
import { classNames, formatResistance, getServiceUrl } from '../utils/utils';

import { ResistorGraph } from './resistor-graph';

function Body() {
  const ref = useRef<HTMLFormElement | null>(null);
  const [output, setOutput] = useState<string>('');
  const [hasError, setError] = useState<boolean>(false);

  const onFormSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!ref.current) {
      return;
    }

    setError(false);

    const res = await fetch(`${getServiceUrl()}/api/calculate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(ref.current))),
    });

    if (!res.ok) {
      setError(true);
      return;
    }

    const resJson = await res.json();

    if (resJson.status !== 'success') {
      setError(true);
      return;
    }

    const jsonOutput = `${formatResistance(resJson.data.resistance)} ±${resJson.data.tolerance}% (${formatResistance(
      resJson.data.minResistance
    )} - ${formatResistance(resJson.data.maxResistance)})`;
    setOutput(jsonOutput);
  };

  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <form id='resistor-form' ref={ref} className='flex flex-col h-auto max-w-screen-md p-4 mx-auto space-y-6 font-grotesk'>
        <h1 className='text-3xl font-semibold text-center'>Resistor Color Code Calculator</h1>
        <h2 className='text-center'>Calculate the resistance of a 4-band resistor</h2>

        <div className='flex flex-col items-center justify-center gap-4 md:space-y-0'>
          <ResistorGraph />
          <input
            type='text'
            className='self-center w-2/3 px-6 py-4 font-medium text-center rounded-lg text-md bg-slate-200 dark:bg-slate-700'
            placeholder='Resistor value'
            value={output}
            readOnly
          />
        </div>

        <div className='space-y-6'>
          <Bands title='Band 1' bandPosition={1} colors={[...firstBandCodes]} />
          <Bands title='Band 2' bandPosition={2} colors={[...secondBandCodes]} />
          <Bands title='Multiplier' bandPosition={3} colors={[...multiplierCodes]} />
          <Bands title='Tolerance' bandPosition={4} colors={[...toleranceCodes]} />
        </div>

        <div className='flex flex-col justify-between px-6 space-y-4 md:px-0 md:space-y-0 md:flex-row'>
          <input
            type='submit'
            className={classNames(
              'py-2.5 px-28 text-sm font-semibold transition-all duration-200 rounded-xl text-white select-none',
              hasError ? 'bg-red-500 hover:bg-red-600' : 'bg-sky-500 hover:bg-sky-600'
            )}
            value='Calculate'
            onClick={onFormSubmit}
          />
          <input
            type='reset'
            value='Reset'
            onClick={() => setOutput('')}
            className='py-2.5 px-28 text-sm font-semibold transition-all duration-200 rounded-xl bg-slate-200 hover:bg-slate-300 text-black select-none'
          />
        </div>
      </form>
    </div>
  );
}

export default Body;
