import "./styles.css";
import { useState } from "react";
import SideBar from "./Components/SideBar";
import Invoice from "./Components/Invoice";

export default function App() {
  const [isInvoiceopen, setInvoiceopen] = useState(false);
  function ToggleInvoice() {
    setInvoiceopen(!isInvoiceopen);
  }
  return (
    <div>
      <SideBar InvoiceHandler={ToggleInvoice}></SideBar>
      {isInvoiceopen && <Invoice></Invoice>}
    </div>
  );
}
