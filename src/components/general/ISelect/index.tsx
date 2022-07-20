import React ,{SelectHTMLAttributes}from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
options?:{value:number|string,label:number|string}[]
}


const ISelect = (props:Props) => {

  return (
        <select {...props}>
            {props.options?.map((option=>(
                <option value={option.value}>{option.label}</option>
            )))}
        </select>
  )
}

export default ISelect