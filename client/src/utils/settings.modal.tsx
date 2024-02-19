import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Fragment, useCallback, useState } from 'react';
import { Dialog, Switch, Transition } from '@headlessui/react';
import { classNames } from './utils';

const SettingsModal = NiceModal.create(() => {
  const modal = useModal();
  const [darkModeEnabled, setDarkmode] = useState(false);

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
              <Dialog.Panel className='w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                  Settings
                </Dialog.Title>
                <div className='mt-2'>
                  <Switch.Group as='div' className='flex items-center justify-between'>
                    <span className='flex flex-col flex-grow'>
                      <Switch.Label as='span' className='text-sm font-medium leading-6 text-gray-900' passive>
                        Dark mode
                      </Switch.Label>
                      <Switch.Description as='span' className='text-sm text-gray-500'>
                        Toggles the appearance of the app between light and dark mode
                      </Switch.Description>
                    </span>
                    <Switch
                      checked={darkModeEnabled}
                      onChange={() => {
                        if (document.body.classList.contains('dark')) {
                          document.body.classList.remove('dark');
                        } else {
                          document.body.classList.add('dark');
                        }

                        setDarkmode(!darkModeEnabled);
                      }}
                      className={classNames(
                        darkModeEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                      )}>
                      <span
                        aria-hidden='true'
                        className={classNames(
                          darkModeEnabled ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      />
                    </Switch>
                  </Switch.Group>
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

export default SettingsModal;
