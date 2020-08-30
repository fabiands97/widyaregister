import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    items:[],
    isLoaded: false,
  };
}

// mengambil company-list API dari widya-skilloka
async componentDidMount(){
  await fetch('https://widyaskilloka.com/api/v1/master/company-types')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
}

render(){

// API company-list berhasil didapatkan dan dapat ditampilkan pada console
  console.log(this.state.items);

  return (
    <div className="App">
    <div className="flex-row align-items-center background-login" style={{height:'auto',padding:'10px'}}>
    <div className="container">
      <div className="justify-content-center row">
        <div className="col-sm-8 col-md-9">
          <div className="card rounded"style={{height:'auto'}}>
            <div className="card-login-form">
              <div className="text-center">
                <img src={logo} className="img-card-top" alt="logo" style={{width:'30%', paddingTop:'10px'}}/>
              </div>
              <div style={{padding:'10%'}} className="card-body">
                <form action="#">                 
                  <h5 className="card-title"><b>Data Perusahaan</b></h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="w-100 form-group">
                        <label htmlFor="NamaPerusahaan" className="input-label">Nama Perusahaan</label>
                        <input label="Nama Perusahaan" id="NamaPerusahaan" name="NamaPerusahaan" type="text" className="form-control" required/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="w-100 form-group">
                        <label htmlFor="WebPerusahaan" className="input-label">Website Perusahaan</label>
                        <input label="WebsitePerusahaan" id="WebPerusahaan" name="WebPerusahaan" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="TelpPerusahaan" className="input-label">Nomor Telepon Perusahaan</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">+</span>
                        </div>
                        <input type="text" className="form-control" name="TelpPerusahaan" id="TelpPerusahaan" placeholder="62"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="Bidang" className="input-label">Bidang Perusahaan</label>
                      
                            <select className="custom-select my-1 mr-sm-2">
                                    <option defaultValue>Choose...</option>
                                    {

                            // gagal menampilkan company-list pada laman web
                            // ERROR : this.state.map is not a function

                                      // this.state.map(item =>
                                      //   (
                                      //     <option value={item.id}>{item.name}</option>
                                      //   ))

                                    };
                            </select>                       
                  </div>
                  </div>
                  <hr className="my-4"/>
                  <h5 className="card-title"><b>Data diri Anda</b></h5>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="w-100 form-group">
                        <label htmlFor="Nama" className="input-label">Nama Lengkap</label>
                        <input label="Nama Lengkap" id="Nama" name="Nama" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="w-100 form-group">
                        <label htmlFor="Panggilan" className="input-label">Nama Panggilan</label>
                        <input label="Nama Panggilan" id="Panggilan" name="Panggilan" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="w-100 form-group">
                        <label htmlFor="Email" className="input-label">Email</label>
                        <input label="Email" id="Email" name="Email" type="email" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="Telp" className="input-label">Telepon</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">+</span>
                        </div>
                        <input type="text" className="form-control" name="Telp" id="Telp" placeholder="62"/>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="my-5 btn btn-primary btn-lg btn-block">Register</button>
                  <div className="mt-5">
                    <a href="https://widyaskilloka.com/login">
                      <i className="mr-2 fa fa-chevron-left"></i> Ke Halaman Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

}

export default App;
