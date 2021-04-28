/**
 *
 * Form page
 *   
 */
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect,useState} from 'react';
import * as config from '../../Config/Config';

interface ResourceFormData {
    id: number;
    name: string;
    email: string;
    position: string;
}


const Forms= () => {
    // initialize and declare form elements
    const [resourceData, loadData] = useState([] as ResourceFormData[])
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);

    // pagination settings
    const lastDataIndex = currentPage * dataPerPage;
    const firstDataIndex = lastDataIndex - dataPerPage;
    const paginatedData = resourceData.slice(firstDataIndex, lastDataIndex);
    
    /**
     * 
     * useEffect function
     * execute on init
     * 
     */
    useEffect(() => {
        getData();
    }, []);
    /**
     * 
     * get resource data
     * @param {*} type type of data 
     * 
     */
    const getData = async () => {
        const resource = await axios.get(`${config.apiUrl}`)
        loadData(resource.data)
    }
    /**
     * 
     * pagination
     * @param {*} type type of data 
     * 
     */
    const pageNumber : number[] = [];
    for(let i = 1; i <= Math.ceil(resourceData.length / dataPerPage); i++){
        pageNumber.push(i);
    }
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    
    /**
     *
     * render html data
     * 
     */
    return(
        <div>
            <h2 className="text-center">Resource Data</h2>
            <div className="table-section">
                <table className="table site-table float-left mt-0 mb-3 table_layout_fixed">
                    <thead className="thead-dark">
                        <tr>
                        <th><p className="heading_tble">Name</p></th>
                        <th><p className="heading_tble">Email</p></th>
                        <th><p className="heading_tble">Position</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.length >0 && 
                        paginatedData.map( resource => {
                            return(  
                                <tr key={resource.id}>
                                    <td>{resource.name}</td>
                                    <td>{resource.email}</td>
                                    <td>{resource.position}</td>
                                </tr>  
                                ) }
                            )
                        }
                        {paginatedData.length == 0 &&
                        
                        <div>No Data Available</div>}
                             
                    </tbody>
                </table>
            </div>
            <Button type="submit">New +<span className="glyphicon glyphicon-plus"></span></Button>
            <nav>
                <ul className='pagination'>
                    {pageNumber.map(number =>(
                        <li key={number} className='page-item'>
                            <a className='page-link' onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default Forms;

