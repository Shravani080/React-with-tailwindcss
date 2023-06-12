import React, { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)

  const Links = [
    { name: "HOME" },
    { name: "DESTINATION" },
    { name: "CREW" },
    { name: "TECHNOLOGY" },
  ]

  return (
    <div className='flex items-center justify-between h-auto w-auto mt-4'>
      <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="50" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
      <hr className=" lg:w-[30rem] lg:ml-[5rem] h-[0.063rem] top-[20rem] z-[1] border border-gray-400 hidden md:flex" />
      <img
        src="/icon-hamburger.svg"
        alt=""
        className={`fixed right-5 top-5 cursor-pointer md:hidden`}
        onClick={() => setOpen(!open)}
      />
      <ul className={`bg-[#ffffff14] backdrop-blur-lg lg:w-[60rem] md-pl-10 pr-28 z-10 md:static fixed top-0 md:h-[5rem] h-screen duration-500 ease-linear ${!open ? 'right-[-100%]' : 'right-0'}`}>
        <li className='md:inline-block md:ml-10 ml-5 border-transparent hover:border-white duration-300 md:my-0 my-6'>
          <img
            src="/icon-close.svg"
            alt=""
            className={`fixed right-5 top-5 cursor-pointer md:hidden`}
            onClick={() => setOpen(!open)}
          />
        </li>
        {
          Links.map((link, index) => (
            <li key={index} className='md:inline-block md:ml-10 ml-5 border-2-b border-transparent hover:border-white duration-300 md:my-0 my-6'>
              <a href={`/${link.name}`} className='text-white text-sm md:py-5 py-3 inline-block font-normal'>
                <span className='font-bold mr-1.5'>0{index} {link.name}</span>
              </a>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Header
