import React from 'react'



function Button({children, bg = "bg-xanthous"}) {
  return (
    <>
     <button className={`flex items-center gap-2 ${bg} hover:${bg}/80 text-raisingblack px-6 py-3 rounded font-semibold shadow-lg font-serif`}>{children}
     </button>
        
    </>
    
  )
}

export default Button