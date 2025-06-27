import React from "react";
import { BiSolidFilePdf } from "react-icons/bi";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { LuCirclePlus } from "react-icons/lu";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import "./GiftCard.css";
const GiftCard = () => {
  return (
    <div className="fn-conatiner">
      <div className="d-flex bd-highlight justify-content-between align-items-start ">
        <div className="p-3 mt-3 flex-grow-1 ">
          <div className="h4">Gift Cards</div>
          <div className="text-secondary">Manage your gift cards</div>
        </div>
        <div className="d-flex align-items-center gap-3 p-4 mt-3">
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

          <Button variant="warning text-white">
            <LuCirclePlus /> Add Gift Card
          </Button>
        </div>
      </div>
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
                  <input
                    type="checkbox"
                    
                  />
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
              <tr>
                 <th scope="col">
                  <input type="checkbox"/>
                </th>
                <td>GF1110</td>
                <td>Carl Evans</td>
                <td>24 Dec 2024</td>
                <td>24 Jan 2024</td>
                <td>$200</td>
                <td>$100</td>
                <td>Active</td>
                <td>
                    <div className="iconsms">
                        <button><IoEyeOutline /></button>
                        <button><FiEdit /></button>
                        <button><RiDeleteBinLine /></button>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
