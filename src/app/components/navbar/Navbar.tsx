import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src={'/search.png'} alt='Search' width={16} height={16} />
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent outline-none w-[200px] p-2 bg-transparent outline-none' 
          aria-label='Search'
        />
      </div>

      {/* ICONS AND USER */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div
          className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ml-2'
          aria-label='Messages'
        >
          <Image src={'/message.png'} alt='Messages' width={16} height={16} />
        </div>

        <div
          className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer ml-2 relative'
          aria-label='Messages'
        >
          <Image src={'/announcement.png'} alt='Messages' width={16} height={16} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-400 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image className='rounded-full' src={"/avatar.png"} alt='' width={36} height={36} />
      </div>
    </div>
  );
};

export default Navbar;