import { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceTable from "./InvoiceTable";

export default function Invoice() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [invoiceList, setInvoiceList] = useState([]);
  function addInvoice(invoiceItem) {
    setInvoiceList([...invoiceList, invoiceItem]);
  }
  console.log(invoiceList);
  function closeForm() {
    setFormOpen(false);
  }
  return (
    <div>
      {isFormOpen && (
        <InvoiceForm addInvoice={addInvoice} onClose={closeForm}></InvoiceForm>
      )}
      <button
        onClick={() => {
          setFormOpen(!isFormOpen);
        }}
      >
        Add
      </button>
      <InvoiceTable invoiceList={invoiceList}></InvoiceTable>
    </div>
  );
}
