import React from 'react'

export const Upload = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("jaja")
    }
    return (
        <div className="uploadBody">
            <form onSubmit={handleSubmit}>
                
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
