import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800'>

            <div className='mycontainer flex justify-between items-center px-4 py-5 h-14'>

                <div className="logo font-bold text-white">
                    
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP&gt;</span>
                    
                </div>

                {/* <ul>
                    <lic className="flex gap-4 text-white">
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </lic>
                </ul> */}

                <button className='text-white bg-green-500 my-5 rounded-md w-20 h-7'>
                    GitHub
                </button>

            </div>

        </nav>
    )
}

export default Navbar
