import React from 'react'

export default function Succes({succes}){
    return (
        <div>
            <div className="alert alert-success" role="alert">
                 {succes}
            </div>

        </div>
    )
}