import React from 'react'

function Header() {
  return (
    <header className='flex justify-between bg-black text-white px-4 items-center'>
        <div className="flex flex-1">logo</div>

          <div className="flex flex-1 py-2">
            <input 
              className="flex-1 px-2 py-0.5 rounded-lg bg-zinc-700" 
              type="text" 
              placeholder='Search by products number or orders' 
            />
          </div>

        <div className="flex flex-1 justify-end">user</div>
    </header>
  )
}

export default Header