import { useNavigate } from "react-router";
import Nav from "./nav";
import { Route, Routes } from "react-router";
import PayBill from "./pay-bill";
import AddCard from "./add-card";
import ViewCard from "./view-card";
import { Link } from "react-router-dom";

function Billing() {
    const navigate = useNavigate();
    return (
      <div className="container-xl px-4 mt-4">
        <nav className="nav nav-tabs mb-2">
          <Link className="nav-link ms-0" to="/settings-main">Profile</Link>
          <Link className="nav-link active" to="/billing">Billing</Link>
          <Link className="nav-link" to="/security">Security</Link>
        </nav>
        <div style={{color: "black"}} className="row">
        <h1>Billing Page</h1>
          <div className="col-md-4">
            <div className="card h-100 mb-4 mb-xl-0">
                <Nav />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card h-100 mb-4">
            <div className="col-9">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Billing;