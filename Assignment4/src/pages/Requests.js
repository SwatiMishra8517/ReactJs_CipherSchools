import React from 'react'

function Requests({messages}) {
    return (
        <div>
            <table className="table" id="Messagestable">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(e=><tr>{Object.keys(e).map(c=><td>{e[c]}</td>)}</tr>)}
            </tbody>
            </table>
        </div>
    )
}

export default Requests
