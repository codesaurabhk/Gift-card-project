import React, { useState } from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { LuCirclePlus } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { Modal, Form, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoChevronDown, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiPlusCircle } from "react-icons/fi";

import "./GiftCard.css";

const GiftCardData = [
  { GiftCard: "GFT1110", customer: "Carl Evans", issuedDate: "24 Dec 2024", expiryDate: "24 Jan 2025", amount: "$200", balance: "$100", Status: "Active" },
  { GiftCard: "GFT1110", customer: "Carl Evans", issuedDate: "24 Dec 2024", expiryDate: "24 Jan 2025", amount: "$200", balance: "$100", Status: "Active" },
  { GiftCard: "GFT1110", customer: "Carl Evans", issuedDate: "24 Dec 2024", expiryDate: "24 Jan 2025", amount: "$200", balance: "$100", Status: "Active" },
  { GiftCard: "GFT1109", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
  { GiftCard: "GFT1109", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
  { GiftCard: "GFT1109", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
  { GiftCard: "GFT1109", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
  { GiftCard: "GFT1107", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
  { GiftCard: "GFT1109", customer: "Minerva Rameriz", issuedDate: "10 Dec 2024", expiryDate: "10 Jan 2025", amount: "$300", balance: "$200", Status: "Active" },
];

const GiftCard = ({ show, handleClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCloses = () => setShowModal(false);

  const [formData, setFormData] = useState({
    giftCard: '',
    customer: '',
    issuedDate: '',
    expiryDate: '',
    amount: '',
    balance: '',
    status: false,
  });

  const [editFormData, setEditFormData] = useState({
    giftCard: '',
    customer: '',
    issuedDate: '',
    expiryDate: '',
    amount: '',
    balance: '',
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Add your save logic here
    handleClose();
  };
  const handleEditOpen = (card) => {
    setEditFormData(card); // preload data
    setShowEditModal(true);
  };
  const handleEditClose = () => {
    setShowEditModal(false);
    setEditFormData({
      giftCard: '',
      customer: '',
      issuedDate: '',
      expiryDate: '',
      amount: '',
      balance: '',
      status: false,
    });
  };


  const toEditForm = (row) => ({
    giftCard: row.GiftCard,
    customer: row.customer,
    issuedDate: toISO(row.issuedDate),      // "24 Dec 2024" ➜ "2024‑12‑24"
    expiryDate: toISO(row.expiryDate),
    amount: Number(row.amount.replace(/\$/g, "")),
    balance: Number(row.balance.replace(/\$/g, "")),
    status: row.Status === "Active",
  });

  const toISO = (prettyDate) => {
    // 24 Dec 2024 ➜ 2024‑12‑24
    const [d, mon, y] = prettyDate.split(" ");
    const m = ("JanFebMarAprMayJunJulAugSepOctNovDec"
      .indexOf(mon) / 3 + 1).toString().padStart(2, "0");
    return `${y}-${m}-${d.padStart(2, "0")}`;
  };

  const handleShow = () => setShowModal(true);
  return (
    <div className="fn-conatiner">
      <div className="d-flex bd-highlight justify-content-between align-items-start ">
        <div className="p-3 mt-3 flex-grow-1 ">
          <div className="h4">Gift Cards</div>
          <div className="text-secondary">Manage your gift cards</div>
        </div>
        <div className="d-flex align-items-center gap-1 p-4 mt-3">
          <Button
            className="text-danger"
            variant="light"
            aria-label="Export as PDF"
          >
            <BiSolidFilePdf size={24} />
          </Button>
          <Button
            className="text-success"
            variant="light"
            aria-label="Export as PDF"
          >
            <BiSolidFilePdf size={24} />
          </Button>
          <Button
            variant="light"
            aria-label="Refresh"
            className="text-secondary"
          >
            <HiOutlineRefresh size={20} />
          </Button>
          <Button
            variant="light"
            aria-label="Collapse"
            className="text-secondary"
          >
            <IoIosArrowUp size={18} />
          </Button>

          <Button variant="warning text-white" onClick={handleShow}>
            <LuCirclePlus /> Add Gift Card
          </Button>
        </div>
      </div>
      {/* models */}

      <Modal show={showModal} onHide={handleCloses} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Gift Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="giftCard">
              <Form.Label>Gift Card <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter gift card name"
                name="giftCard"
                value={formData.giftCard}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="customer" className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <Form.Label className="mb-0">
                  Customer <span className="text-danger">*</span>
                </Form.Label>
                <Button variant="link" className="text-warning p-0 text-decoration-none d-flex align-items-center gap-1"><FiPlusCircle style={{ fontSize: "1.1rem" }} />
                  Add New</Button>
              </div>
              <Form.Select
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                className="mt-1"
              >
                <option value="">Select</option>
                <option value="customer1">Customer 1</option>
                <option value="customer2">Customer 2</option>
              </Form.Select>
            </Form.Group>



            <Row className="mt-3">
              <Col>
                <Form.Group controlId="issuedDate">
                  <Form.Label>Issued Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="issuedDate"
                    value={formData.issuedDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="expiryDate">
                  <Form.Label>Expiry Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="amount">
                  <Form.Label>Amount <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="balance">
                  <Form.Label>Balance <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="number"
                    name="balance"
                    value={formData.balance}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="status" className="mt-4 d-flex align-items-center justify-content-between">
              <Form.Label className=" me-3 mb-0">Status</Form.Label>
              <Form.Check
                type="switch"
                name="status"
                checked={formData.status}
                onChange={handleChange}
                className=""
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleSubmit}>
            Add Gift Card
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEditModal} onHide={handleEditClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Gift Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editGiftCard">
              <Form.Label>Gift Card <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                name="giftCard"
                value={editFormData.giftCard}
                onChange={(e) => setEditFormData({ ...editFormData, giftCard: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="editCustomer" className="mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <Form.Label className="mb-0">
                  Customer <span className="text-danger">*</span>
                </Form.Label>
                <Button variant="link" className="text-warning p-0 text-decoration-none d-flex align-items-center gap-1">
                  <FiPlusCircle style={{ fontSize: "1.1rem" }} />
                  Add New
                </Button>
              </div>
              <Form.Select
                name="customer"
                value={editFormData.customer}
                onChange={(e) => setEditFormData({ ...editFormData, customer: e.target.value })}
                className="mt-1"
              >
                <option value="">Select</option>
                <option value="customer1">Customer 1</option>
                <option value="customer2">Customer 2</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="editIssuedDate">
                  <Form.Label>Issued Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="issuedDate"
                    value={editFormData.issuedDate}
                    onChange={(e) => setEditFormData({ ...editFormData, issuedDate: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="editExpiryDate">
                  <Form.Label>Expiry Date <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="date"
                    name="expiryDate"
                    value={editFormData.expiryDate}
                    onChange={(e) => setEditFormData({ ...editFormData, expiryDate: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="editAmount">
                  <Form.Label>Amount <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={editFormData.amount}
                    onChange={(e) => setEditFormData({ ...editFormData, amount: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="editBalance">
                  <Form.Label>Balance <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="number"
                    name="balance"
                    value={editFormData.balance}
                    onChange={(e) => setEditFormData({ ...editFormData, balance: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="editStatus" className="mt-4 d-flex align-items-center justify-content-between">
              <Form.Label className="me-3 mb-0">Status</Form.Label>
              <Form.Check
                type="switch"
                name="status"
                checked={editFormData.status}
                onChange={(e) => setEditFormData({ ...editFormData, status: e.target.checked })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleEditClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={() => {
            console.log("Updated Gift Card:", editFormData);
            handleEditClose();
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <div className="container-mn">
        <div className="d-flex justify-content-between align-items-center p-3 ">
          <div>
            {" "}
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="🔍︎ Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </div>

          <div className="d-flex gap-3">
            <select class="form-select" aria-label="Default select example">
              <option selected>Status</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="form-select" aria-label="Default select example">
              <option> Sort By : Last 7 Days </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div>
          <table className="table">
            <thead className="tableheader">
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">Gift Card</th>
                <th scope="col">Customer</th>
                <th scope="col">Issued Date</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance</th>
                <th scope="col">Status</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {GiftCardData.map((item, idx) => (
                <tr key={idx}>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <td>{item.GiftCard}</td>
                  <td>{item.customer}</td>
                  <td>{item.issuedDate}</td>
                  <td>{item.expiryDate}</td>
                  <td>{item.amount}</td>
                  <td>{item.balance}</td>
                  <td>
                    <span className="badge ">• {item.Status}</span>
                  </td>
                  <td>
                    <div className="iconsms">
                      <button>
                        <IoEyeOutline />
                      </button>
                      <button variant="warning text-white" onClick={() => handleEditOpen(toEditForm(item))}>
                        <FiEdit />
                      </button>
                      <button>
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center p-3">
          {/* Row Per Page Section */}
          <div className="d-flex gap-3 align-items-center">
            <div>Rows Per Page</div>
            <select className="form-select" name="rows" id="rows" style={{ width: '80px' }}>
              <option value="10">10</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div>Entries</div>
          </div>


          <div className="d-flex align-items-center gap-3">


            <button className="btn " aria-label="Previous Page">
              <GoChevronLeft size={20} />
            </button>


            <div className="text-center downt">
              <span>1</span>
            </div>


            <button className="btn " aria-label="Next Page">
              <GoChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="settings">
        <IoSettingsSharp />
      </div>

    </div>
  );
};

export default GiftCard;
