import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Transition, Dialog } from '@headlessui/react';
import { useCallback, Fragment } from 'react';

const HelpModal = NiceModal.create(() => {
  const modal = useModal();

  const closeModal = useCallback(() => {
    modal.remove();
  }, [modal]);

  return (
    <Transition appear show={modal.visible} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-full p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <Dialog.Panel className='w-full max-w-md p-6 overflow-hidden text-left text-gray-900 align-middle transition-all transform bg-white shadow-xl dark:bg-slate-700 dark:text-white rounded-2xl'>
                <Dialog.Title as='h3' className='text-lg font-medium leading-6'>
                  Settings
                </Dialog.Title>
                <div className='mt-6 space-y-4'>
                  <p>
                    <strong>What is this?</strong>
                  </p>
                  <p>This is a simple web application to calculate the Electronic Color Code value of a resistor.</p>

                  <p>
                    <strong>How to use?</strong>
                  </p>
                  <p>Enter the color bands of the resistor and press the calculate button.</p>
                  <p>
                    From the left to the right, the first two bands represent the significant digits, the third band represents the multiplier, and
                    the fourth band represents the tolerance.
                  </p>
                  <ol className='pl-6 text-sm list-disc'>
                    <li>Enter the color for the first band of the resistor</li>
                    <li>Enter the color for the second band of the resistor</li>
                    <li>Enter the color for the third band, which is the resistance multiplier</li>
                    <li>Enter the color for the fourth band, which is the tolerance</li>
                    <li>Press the calculate button to get the resistance value of the resistor</li>
                  </ol>
                  <p>
                    <strong>What is the result?</strong>
                  </p>
                  <p>The result is the resistance value of the resistor in ohms, and also you will get the tolerance min/max value</p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={closeModal}>
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default HelpModal;
