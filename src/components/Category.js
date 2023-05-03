import { useState } from 'react'

export default function Category( props) {
  const [selectedOption, setSelectedOption] = useState()

  const optionsComponents = props.options.map((element) => {
    return (
      <div className="d-flex flex-column" key={element}>
        <label className="p-2">
          <input
            type="radio"
            value={element}
            checked={selectedOption === element}
            onChange={(event) => {
              setSelectedOption(event.target.value)
                props.onSelected(event.target.value, props.type )
            }}
          />
          <span className='p-1'> {element}</span>
        </label>
      </div>
    )
  })

  return (
    <div className="card m-2 p-3 text-start">
      <h2>{props.title}</h2>
      {optionsComponents}
    </div>
  )
}
