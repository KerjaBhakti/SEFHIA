import { render } from "@testing-library/react";
import React, { Component } from "react";
import services from "../services/services";


export default class TambahDataHonor extends Component {
  constructor(props) {
    super(props);
    this.onChangeMata_kuliah = this.onChangeMata_kuliah.bind(this);
    this.onChangeKelas = this.onChangeKelas.bind(this);
    this.onChangeProdi = this.onChangeProdi.bind(this);
    this.onChangeNominal = this.onChangeNominal.bind(this);
    this.simpanData = this.simpanData.bind(this);
    this.baru = this.baru.bind(this);

    this.state = {
      id: null,
      mata_kuliah: "",
      kelas: "",
      prodi: "",
      nominal: "",
      published: false,

      submitted: false
    };
  }

  onChangeMata_kuliah(e) {
    this.setState({
      mata_kuliah: e.target.value
    });
  }

  onChangeKelas(e) {
    this.setState({
      kelas: e.target.value
    });
  }
  onChangeProdi(e) {
    this.setState({
      prodi: e.target.value
    });
  }
  onChangeNominal(e) {
    this.setState({
      nominal: e.target.value
    });
  }

  simpanData() {
    var data = {
      mata_kuliah: this.state.gaji_pokok,
      kelas: this.state.keluarga,
      prodi: this.state.pangan,
      nominal: this.state.kinerja
    };

    services.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          mata_kuliah: response.data.gaji_pokok,
          kelas: response.data.keluarga,
          prodi: response.data.pangan,
          waktu: response.data.waktu,
          nominal: response.data.kinerja,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  baru() {
    this.setState({
      id: null,
      mata_kuliah: "",
      kelas: "",
      prodi: "",
      waktu: "",
      nominal: "",

      submitted: false
    });
  }
render(){    
return(
    <div className='container '>
    <div className='row'>
        <div className='col-6'>
            <div className='card'>
                <div className='card-header'>
                <form>
                    <div className="mb-4" ></div> 
                    <label htmlFor="mata_kuliah" className='form-label' >Mata Kuliah</label> 
                    <input type="int" name='nama_dosen' id='mata_kuliah' className="form-control" ></input> 
                    <label htmlFor="keals" className='form-label' >Kelas</label> 
                    <input type="int" name='kelas' id='kelas' className="form-control" ></input> 
                    <label htmlFor="prodi" className='form-label' >Prodi</label> 
                    <input type="int" name='prodi' id='prodi' className="form-control" ></input> 
                    <label htmlFor="nominal" className='form-label' >Nominal</label> 
                    <input type="int" name='nominal' id='nominal' className="form-control" ></input> 

                </form>
                </div>
                <button onClick={this.simpanData} className="btn btn-success">
              Submit
            </button>
                <button onClick={this.saveTutorial} className="btn btn-info">
              Edit
            </button>
                <button className="btn btn-danger">
              Back
            </button>
            </div>
        </div>
    </div>
</div>
 );
}
}

