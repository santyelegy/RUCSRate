import React, { useEffect, useState } from "react"

const UsingFetch = (name, key, value) => {
    const [name, setName] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/".contact(name))
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
                    {name.map(name => (
                        <li key={name.key}>{name.value}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UsingFetch