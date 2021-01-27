import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.charactersData.map((row, index) =>{
            return (
            <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.job}</td>  
                  <td> <button onClick={() => props.removeCharacter(index)}>Delete</button> </td>
            </tr>
    )})
    return ( <tbody>{rows}</tbody>
    )
}


class Table extends React.Component {
    render() {
        const {charactersData, removeCharacter} = this.props   
        console.log(typeof charactersData)     
        return (
            <table>
               <TableHeader/>
               <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table