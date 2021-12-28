import './App.css';

function Teste() {
  return (
    <div className="container-flex">
        <nav className="bg-gradient-light navbar fixed-top navbar-expand-lg shadow-none" id="navbarBlur" navbar-scroll="true">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group input-group-outline focused is-focused focused bg-light border-radius-md">
                    <label className="form-label">Procure aqui</label>
                    <input type="text" className="form-control"></input>
                </div>
            </div>
        </nav>
        <footer className="align-bottom text-dark bg-gradient-light border-top border-primary">
            <div className="container-fluid py-2">     
                <div className="card-body position-relative z-index-1 p-3">
                    <p className="float-end mb-1 btn-outline-primary">
                        <a className="font-weight-bold btn btn-outline-primary text-primary" href="/">Voltar ao topo</a>
                    </p>
                    <p className="mb-1">Feito por Moscow</p>
                    <a className="font-weight-bold text-primary" target="_blank" href="/">Visitar página inicial</a>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default Teste;
