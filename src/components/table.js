import React from "react";

export default class BaseTable extends React.Component {
    render() {
        return (
            <>
                {/* Start: Table */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Shagul Amith</td>
                            <td>shagul@saturam.com</td>
                            <td>25</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Kiran</td>
                            <td>kirankumar@saturam.com</td>
                            <td>35</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>RajKamal</td>
                            <td>rajkamal@saturam.com</td>
                            <td>67</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Suriya</td>
                            <td>suriya@gmail.com</td>
                            <td>35</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Vimal</td>
                            <td>vimal@saturam.com</td>
                            <td>15</td>
                            <td>
                                <button className="btn btn-primary">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* End: Table */}
            </>
        )
    }
}