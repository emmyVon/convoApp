import React, { useContext } from 'react'
import ChartContext from '../context/ChartContext'

import Comment from './Comment';
import Input from './Input';


const Home = () => {
    const{edit,setEdit} = useContext(ChartContext)
  return (
    <div>
        <Comment  edit={edit} setEdit={setEdit}/>
        <Input/>
    </div>
  )
}

export default Home