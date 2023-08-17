


import React, { FC } from 'react'

interface LoadingProps {
  
}

const Loading: FC<LoadingProps> = ({  }) => {
  return (
    <main>
        {Array(12).fill(0).map((el,_i) => <h1 className='text-black'>Loading</h1>)}
    </main>
  )
}

export default Loading;