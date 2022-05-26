import React from 'react'

export default function Loading(){
    return (
        <div>
            <div className="spinner-border text-info" role="status" style={{height:'150px', width:'150px', marginTop: '150px'}}>
            <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}