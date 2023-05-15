import React,{useState} from 'react'

export default function Demo() {
  const [name,setName]=useState<string>('xiaoming')
  return (
    <div>
      <h1>name:{name.substring(0,1).toUpperCase()+name.substring(1)}</h1>
      <button onClick={()=>{
        setName('lisi')
        // setName(100)
      }}>改变name</button>
    </div>
  )
}
