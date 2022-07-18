import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="flex flex-row justify-around mt-3 font-bold text-xl">
            <div>
                Your Challenge Pushkar
            </div>

            <div className="flex flex-column gap-4 ">
                
                    <div className="hover:border-b-4 border-orange-400 cursor-pointer">Product</div>
                    <div className="hover:border-b-4 border-orange-400 cursor-pointer">Download</div>
                    <div className="hover:border-b-4 border-orange-400 cursor-pointer">Pricing</div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar