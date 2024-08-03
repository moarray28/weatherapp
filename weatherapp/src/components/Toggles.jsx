import React, { useState } from 'react'

export default function Toggles({data,icondata}) {

    const[toggle,setToggle] = useState(false);

  return (
    <>
                 <div className="bg-slate-950 cursor-pointer rounded-md  border-2 border-gray-500 p-4 text-center" onClick={() => {
                  setToggle(!toggle);
                }}> 
              {toggle ? (
                 data
                ) : (
                  icondata
                   )}
              </div>
             
             
    </>
  )
}
