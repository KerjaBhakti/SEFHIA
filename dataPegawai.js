import React from 'react'

const mapStateToProps = (state) => {
    return{
        getDataPegawai: state.apiPegawai.getDataPegawai,
        errorDataPegawai: state.apiPegawai.getDataPegawai
    }
    
}


const dataPegawai = (props) => {
    // function editData(){
    //     showEdit();
    // }
    return(
        <>
        <div>
            <h4>Data Pegawai</h4>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th >Nama Pegawai</th>
                    <th > Alamat</th>
                    <th > no telepon</th>
                    <th className="col-4">Aksi</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Faisal</td>
                        <td>Padalarang</td>
                        <td> 085771089755</td>
                        <td>
                            <button className="btn-sm btn-second mx-2" >Rinci</button>
                            <button className="btn-sm btn-warning mx-2" onClick={() => editData()}>Edit</button>
                            <button className="btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>    
                </tbody>        
            </table>
        </div>
        </>
    )
}

export default dataPegawai