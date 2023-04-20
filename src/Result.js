import React,{useState} from 'react'
import ClickEvent from './Day1/ClickEvent'
import StateEx from './Day1/StateEx'
import PropsEx from './Day1/PropsEx'
import InputMethod from './Day1/InputMethod'

const Result = () => {
   const [Name,setName]=useState("Kunwar")
  return (
    <>

      <ClickEvent />
      <StateEx />
      <h1> Props example in React js </h1>
      {/* < PropsEx Name={"BIBEK"}  email="bibek@gmail.com"/>
      < PropsEx Name={"Hira "}  email="hira@gmail.com"/>
      < PropsEx Name={"Sani"} email="sani@gmail.com" /> */}
      < PropsEx Name={Name}/>

      <button onClick={() => { setName("Bibek") }}>Update Name</button>

      <PropsEx />
      <InputMethod />
    </>
  )
}

export default Result