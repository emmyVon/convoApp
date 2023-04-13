import React, { useContext } from 'react'
import ChartContext from '../context/ChartContext'

import Comment from './Comment';
import Input from './Input';
import Comments from './Comments';


const Home = () => {
  
  return (
    <div>
        <Comments />
        {/* <Input/> */}
    </div>
  )
}

export default Home