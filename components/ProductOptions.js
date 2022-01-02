import React from 'react'

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {

    return (
        <fieldset className="mt-4">
            <legend className="text-base font-semibold">{name}</legend>
            <div className="inline-flex items-center flex-wrap">
                {
                    values.map(value => {
                        const id = `option-${name}-${value}`
                        const checked = selectedOptions[name] === value

                        return (
                            <label key={id} htmlFor={id}>
                                <input
                                    className="sr-only" //screen reader only won't show up on front-end
                                    type="radio"
                                    id={id}
                                    name={`option-${name}`}
                                    value={value}
                                    checked={checked}
                                    onChange={() => {
                                        setOptions(name, value)

                                    }}
                                />
                                <div className={`text-lg rounded-full block cursor-pointer p-2 mt-3 mr-3 ${checked ? "text-white bg-gray-900" : "text-gray-900 bg-gray-200"}`}>
                                    <span className="px-2">{value}</span>
                                </div>
                            </label>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}
