import { useState } from "react";

export default function InvoiceForm({ addInvoice, onClose }) {
  const [invoice, setInvoice] = useState({
    Id: "",
    Date: "",
    InvoiceNumber: "",
    CustomerName: "",
    BillingAddress: "",
    ShippingAddress: "",
    GSTIN: "",
    Items: [],
    BillSundrys: [],
    TotalAmount: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addInvoice(invoice);
    onClose();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input
            type="text"
            onChange={(e) => {
              setInvoice({ ...invoice, Id: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => {
              setInvoice({ ...invoice, Date: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Invoice Number</label>
          <input
            type="number"
            onChange={(e) => {
              setInvoice({ ...invoice, InvoiceNumber: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Customer Name</label>
          <input
            type="text"
            onChange={(e) => {
              setInvoice({ ...invoice, CustomerName: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Billing Address</label>
          <input
            type="text"
            onChange={(e) => {
              setInvoice({ ...invoice, BillingAddress: e.target.value });
            }}
          />
        </div>
        <div>
          <label>Shipping Address</label>
          <input
            type="text"
            onChange={(e) => {
              setInvoice({ ...invoice, ShippingAddress: e.target.value });
            }}
          />
        </div>
        <div>
          <label>GSTIN</label>
          <input
            type="text"
            onChange={(e) => {
              setInvoice({ ...invoice, GSTIN: e.target.value });
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
