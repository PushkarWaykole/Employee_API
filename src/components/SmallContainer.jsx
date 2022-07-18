import React from 'react'

const SmallContainer = (props) => {

  const {gender,nat,title,fname,lname,email}=props;
  return (
    <div>
        <div className="bg-white  w-auto p-4 leading-3 cursor-pointer hover:bg-violet-600">
            <p className="text-gray-400 ">{gender} - {nat}</p>
            <p className="font-bold font-sans text-xl mt-3">{title} {fname} {lname}</p>
            <p className="text-email mt-3">{email}</p>
        </div>
    </div>
  )
}

export default SmallContainer