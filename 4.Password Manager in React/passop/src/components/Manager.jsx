import React, { useEffect, useState, useRef } from 'react'

const Manager = () => {

  const ref = useRef()
  const passwordRef = useRef()

  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordsArray, setPasswordsArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordsArray(JSON.parse(passwords))
    }
  }, [])

  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/eye-closed.png")) {
      ref.current.src = "icons/eye-open.png"
      passwordRef.current.type = "password"
    }
    else {
      ref.current.src = "icons/eye-closed.png"
      passwordRef.current.type = "text"
    }
  }

  const savePassword = () => {
    setPasswordsArray([...passwordsArray, form])
    localStorage.setItem('passwords', JSON.stringify([...passwordsArray, form]))
    console.log(passwordsArray)
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] })
  }

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_1100px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className="mycontainer">

        <h1 className='text-4xl font-bold text-center'>
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP&gt;</span>
        </h1>

        <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-8 items-center">

          <input value={form.site} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Website URL...' type="text" name='site' id='' />


          <div className="flex w-full justify-around gap-4">

            <input value={form.username} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter UserName' type="text" name='username' id='' />

            <div className="relative">

              <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-full border border-green-500 w-full px-4 py-1' placeholder='Enter Password' type="password" name='password' id='' />

              <span className='absolute right-[10px] top-[5px] bg-black hover:cursor-pointer' onClick={showPassword}>
                <img ref={ref} className='p-1' src="icons/eye-open.png" alt="" width={24} />
              </span>

            </div>

          </div>


          <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-green-500 rounded-full px-2 py-2 w-fit hover:bg-green-400 border-2 border-green-900'>
            <span class="material-symbols-outlined">
              password
            </span>Add Password</button>

        </div>

        <div className="passwords">

          <h1 className='font-bold text-2xl py-4 text-center'>Your Saved Passwords</h1>

          {passwordsArray.length === 0 && <div> No Passwords to Show </div>}

          {passwordsArray.length != 0 && <table className="table-auto w-full my-2">
            <thead className='bg-green-800 text-white w-full'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>
              {passwordsArray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-2 border border-white text-center w-32'>{item.site}</td>
                  <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                  <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                </tr>
              })}
            </tbody>
          </table>}

        </div>

      </div>

    </>
  )
}

export default Manager