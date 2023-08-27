function App() {
  return (
    <div className="App">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand">甜點蛋糕店</span>
          <button class="btn btn-outline-success position-relative" type="submit">購物車
          <span class="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">99</span></button>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <div className="row row-cols-3 g-3">
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1687182845783-dc091d25bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">可口蛋塔
                    <span className="float-end">NT$ 220</span>
                    </h6>
                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1692729624048-3d3a7296fbf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">可口蛋塔
                    <span className="float-end">NT$ 220</span>
                    </h6>
                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1687182845783-dc091d25bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">可口蛋塔
                    <span className="float-end">NT$ 220</span>
                    </h6>
                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1687182845783-dc091d25bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h6 className="card-title">可口蛋塔
                    <span className="float-end">NT$ 220</span>
                    </h6>
                    <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">x</a>
                    </td>
                    <td>
                      <img src="https://images.unsplash.com/photo-1687182845783-dc091d25bcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"className="table-image" alt="" />
                    </td>
                    <td>可口蛋塔
                      <br />
                      <small className="text-muted">NT$ 220</small>
                    </td>
                    <td>
                      <select name="" id="" className="form-select"></select>
                    </td>
                    <td className="text-end">NT$ 440</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end">
                      總金額 NT$ 440
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
