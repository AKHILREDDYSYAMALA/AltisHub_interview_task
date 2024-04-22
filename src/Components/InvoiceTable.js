export default function InvoiceTable({ invoiceList }) {
  console.log(invoiceList);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Invoice Number</th>
            <th>Customer Name</th>
            <th>Billing Address</th>
            <th>Shipping Address</th>
            <th>GSTIN</th>
          </tr>
        </thead>
        <tbody>
          {invoiceList.map((invoiceItem) => {
            <tr key={invoiceItem.Id}>
              <td>{invoiceItem.Id}</td>
              <td>{invoiceItem.Date}</td>
              <td>{invoiceItem.InvoiceNumber}</td>
              <td>{invoiceItem.CustomerName}</td>
              <td>{invoiceItem.BillingAddress}</td>
              <td>{invoiceItem.ShippingAddress}</td>
              <td>{invoiceItem.GSTIN}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
