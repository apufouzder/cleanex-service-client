import React from 'react';
import trash from '../../../icon/trash.png';

const ManageServicesTable = ({ servicesData, handleDelete }) => {
    return (
        <table className="table table-borderless">
            <thead style={{ background: '#f4f7fc' }}>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Title</th>
                    <th className="text-secondary" scope="col">Price</th>
                    <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    servicesData.map((service, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{service.title}</td>
                            <td>{service.price}</td>
                            <td><span style={{ cursor: 'pointer' }} onClick={() => handleDelete(service._id)}><img src={trash} alt="" /></span></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageServicesTable;