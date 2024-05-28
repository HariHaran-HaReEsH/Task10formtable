import React from "react";
import './TableComponent.css';
function TableComponent (props){
    return(<div className="Temp">
    <table>        
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>City</th>
            
        </tr>
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.dob}</td>
            <td>{props.city}</td>
            
        </tr> 
    </table>
    </div>);
};
export default TableComponent;