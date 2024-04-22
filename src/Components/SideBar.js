import { useState } from "react";

export default function SideBar({ InvoiceHandler }) {
  return (
    <div>
      <button onClick={InvoiceHandler}>Invoices</button>
    </div>
  );
}
