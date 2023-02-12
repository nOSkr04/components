import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Card, CardBody, CardHeader, Row } from "reactstrap";

//SimpleBar
import SimpleBar from "simplebar-react";

import avtar10 from "../../assets/images/users/avatar-10.jpg";
import avtar1 from "../../assets/images/users/avatar-1.jpg";
import avtar9 from "../../assets/images/users/avatar-9.jpg";
import avtar2 from "../../assets/images/users/avatar-2.jpg";
import avtar5 from "../../assets/images/users/avatar-5.jpg";
import avtar8 from "../../assets/images/users/avatar-8.jpg";

const candidate = [
  {
    id: 1,
    image: avtar10,
    name: 'Tonya Noble',
    email: "@tonya",
    desc: "Web Developer"
  },
  {
    id: 2,
    image: avtar1,
    name: ' Nicholas Ball',
    email: " @nicholas",
    desc: "Assistant / Store Keeper"
  },
  {
    id: 3,
    image: avtar9,
    name: 'Zynthia Marrow',
    email: "@zynthia",
    desc: "Full Stack Engineer"
  },
  {
    id: 4,
    image: avtar2,
    name: 'Cheryl Moore',
    email: "@Cheryl",
    desc: "Product Designer"
  },
  {
    id: 5,
    image: avtar5,
    name: ' Jennifer Bailey',
    email: "@Jennifer",
    desc: " Marketing Director"
  },
  {
    id: 6,
    image: avtar8,
    name: 'Hadley Leonard',
    email: "@hadley",
    desc: "Executive, HR Operations"
  },
];

const Candidates = () => {

  const [data, setData] = useState([])
  const [searchField, setSearchField] = useState("");
  const [state, setState] = useState(false);


  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  const searchdata = candidate.filter((item) =>
    item.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <React.Fragment>
      <Col className="col-xxl-4">
        <Card className="card">
          <CardHeader className="card-header">
            <div className="d-flex align-items-center">
              <h6 className="card-title mb-0 flex-grow-1">
                Popular Candidates
              </h6>
              <div className="flex-shrink-0">
                <Link
                  to="/apps-job-candidate-lists"
                  className="link-primary"
                >
                  View All <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </CardHeader>
          <Row className="row g-0">
            <Col className="col-lg-6">
              <CardBody className="card-body border-end">
                <div className="search-box">
                  <input
                    type="text"
                    className="form-control bg-light border-light"
                    autoComplete="off"
                    id="searchList"
                    placeholder="Search candidate..."
                    onChange={(e) => handleChange(e)}
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
                <SimpleBar
                  data-simplebar
                  style={{ maxHeight: "190px" }}
                  className="px-3 mx-n3"
                >

                  {
                    !searchdata ?
                      candidate.map((item) =>
                        <ul className="list-unstyled mb-0 pt-2" id="candidate-list" key={item.id} onClick={() => setData(item)}  >
                          <li>
                            <Link to="" className="d-flex align-items-center py-2">
                              <div className="flex-shrink-0 me-2">
                                <div className="avatar-xs">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="img-fluid rounded-circle candidate-img"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-1 text-truncate">
                                  <span className="candidate-name">{item.name}</span>{" "}
                                  <span className="text-muted fw-normal">{item.email}</span>
                                </h5>
                                <div className="d-none candidate-position">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      ) :
                      searchdata.map((item) =>
                        <ul className="list-unstyled mb-0 pt-2" id="candidate-list" key={item.id} onClick={() => setData(item)}  >
                          <li>
                            <Link to="" className="d-flex align-items-center py-2">
                              <div className="flex-shrink-0 me-2">
                                <div className="avatar-xs">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="img-fluid rounded-circle candidate-img"
                                  />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-13 mb-1 text-truncate">
                                  <span className="candidate-name">{item.name}</span>{" "}
                                  <span className="text-muted fw-normal">{item.email}</span>
                                </h5>
                                <div className="d-none candidate-position">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      )

                  }
                </SimpleBar>
              </CardBody>
            </Col>
            <Col className="col-lg-6">
              <CardBody className="card-body text-center">
                <div className="avatar-md mb-3 mx-auto">
                  <img
                    src={data.image || avtar10}
                    alt=""
                    id="candidate-img"
                    className="img-thumbnail rounded-circle shadow-none"
                  />
                </div>

                <h5 id="candidate-name" className="mb-0">
                  {data.name || "Tonya Noble"}
                </h5>
                <p id="candidate-position" className="text-muted">
                  {data.desc || "Web Developer"}
                </p>

                <div className="d-flex gap-2 justify-content-center mb-3">
                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Google"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-google-line"></i>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Linkedin"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-linkedin-line"></i>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn avatar-xs p-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Dribbble"
                  >
                    <span className="avatar-title rounded-circle bg-light text-body">
                      <i className="ri-dribbble-fill"></i>
                    </span>
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    className={state ? "btn btn-info custom-toggle w-100 active" : "btn btn-info custom-toggle w-100"}
                    data-bs-toggle="button"
                    aria-pressed="false"
                    onClick={() => setState(!state)}
                  >

                    {
                      !state ?
                        <span className="icon-on">
                          <i className="ri-add-line align-bottom me-1"></i> Follow
                        </span>
                        :
                        <span className="icon-off">
                          <i className="ri-user-unfollow-line align-bottom me-1"></i>{" "}
                          Unfollow
                        </span>
                    }
                  </button>
                </div>
              </CardBody>
            </Col>
          </Row>
        </Card>
        <Card className="card overflow-hidden shadow-none">
          <CardBody className="card-body bg-soft-danger">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <div className="avatar-sm">
                  <div className="avatar-title bg-soft-danger text-danger rounded-circle fs-17">
                    <i className="ri-gift-line"></i>
                  </div>
                </div>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-16">Invite your friends to Velzon</h6>
                <p className="text-muted mb-0">
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally.
                </p>
              </div>
            </div>
            <div className="mt-3 text-end">
              <Link to="#" className="btn btn-danger">
                Invite Friends
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Candidates;
