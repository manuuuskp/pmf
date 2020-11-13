import React from 'react';
import './../styling/ProductMaster.css'

class ListLayout extends React.Component{
    render(){
        return(
            <div>
            <div style={{width:'100px'}}>
                Facet
            </div>
            <div>
                <table className='border'>
                    <tr>
                        <td style={{width:'350px', height:'25px', textAlign:'center'}} >Product Name</td>
                        <td style={{width:'350px', textAlign:'center'}}>Product Owner</td>
                    </tr>
                </table>
            </div>
            </div>
        );
    }
}

export default ListLayout;