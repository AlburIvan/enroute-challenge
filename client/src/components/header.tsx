import React from 'react';
import logo from '../assets/logo.svg';

import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import IconButton from './icon-button';
import { useModal } from '@ebay/nice-modal-react';
import SettingsModal from '../utils/settings.modal';
import HelpModal from '../utils/help.modal';

const Header: React.FC = () => {
  const settingsModal = useModal(SettingsModal);
  const helpModal = useModal(HelpModal);

  return (
    <header className='flex flex-row items-center justify-between w-full h-16 px-6 py-2 shadow-sm dark:bg-slate-900'>
      <a href='/'>
        <img className='dark:brightness-[9]' src={logo} alt='An Icon with the form of stairs, and the words "Electrical Engineering" to the right' />
      </a>
      <div className='flex flex-row space-x-2'>
        <IconButton Icon={FiSettings} title='Settings' onClick={() => settingsModal.show()} />
        <IconButton Icon={FiHelpCircle} title='Help' onClick={() => helpModal.show()} />
      </div>
    </header>
  );
};

export default Header;
