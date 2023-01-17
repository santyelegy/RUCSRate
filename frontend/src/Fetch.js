import React, { useEffect, useState } from "react"

const UsingFetch = (name, key, value) => {
    const [name, setName] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/".contact(name))
        const data = await response.json()
        setName(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {name.length > 0 && (
                <ul>
                    {name.map(user => (
                        <li key={name.key}>{name.value}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}


export default UsingFetch