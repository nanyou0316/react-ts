import React,{useRef,useState } from 'react'

export default function Demo() {
  let myRef=useRef<HTMLInputElement>(null)//这个要特殊记
  const [list,setList]=useState<string[]>([])
  return (
    <div>
      <input ref={myRef}></input>
      <button onClick={()=>{
        console.log((myRef.current as HTMLInputElement).value);
        setList([...list,(myRef.current as HTMLInputElement).value]);
        (myRef.current as HTMLInputElement).value=''
      }}>get</button>
      <div>
        <ul>
          {list.map((item,index)=><li key={index}>{item}
          <button onClick={()=>{
            let newList=[...list]
            newList.splice(index,1)
            setList(newList)
          }}>del</button>
          </li>)}
        </ul>
      </div>
    </div>
  )
}
