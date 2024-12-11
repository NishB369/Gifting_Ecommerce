import React from "react";
import { cartData } from "../../../../public/assets.js";
import jsPDF from "jspdf";

const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

const CartData = () => {
  const handleDownloadPDF = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    let yOffset = 20;

    const logoURL = "/brand_logo.png"; 
    const logoBase64 = await toDataURL(logoURL);
    doc.addImage(logoBase64, "PNG", margin, yOffset, 40, 20);
    doc.setFontSize(20);
    doc.text("",margin + 50, yOffset + 15);
    yOffset += 30;

    doc.setFontSize(16);
    doc.text("Your Cart", pageWidth / 2, yOffset, { align: "center" });
    yOffset += 10;

    for (const item of cartData) {
      const base64Image = await toDataURL(item.productImage);

      doc.setDrawColor(0);
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yOffset, pageWidth - 2 * margin, 50, "F");

      doc.addImage(base64Image, "JPEG", margin + 5, yOffset + 5, 40, 40);

      const textStart = margin + 50;
      doc.setFontSize(12);
      doc.text(`Name: ${item.productName}`, textStart, yOffset + 10);
      doc.text(`Price: ₹${item.productPrice}`, textStart, yOffset + 20);
      doc.text(`Quantity: ${1}`, textStart, yOffset + 30);
      doc.text(`Category: ${item.category}`, textStart, yOffset + 40);

      doc.setTextColor(0, 0, 255);
      doc.textWithLink("View Product", textStart + 100, yOffset + 40, {
        url: item.productLink,
      });
      doc.setTextColor(0, 0, 0);

      yOffset += 60;

      if (yOffset > doc.internal.pageSize.getHeight() - 40) {
        doc.addPage();
        yOffset = margin;
      }
    }

    doc.setFontSize(10);
    doc.text(
      "Thank you for shopping with us!",
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: "center" }
    );

    doc.save("Cart_Items_Catalog.pdf");
  };

  return (
    <div className="w-[67.5%] text-black bg-white border-black/50 border-2 fixed left-10 top-24 h-auto rounded-lg shadow-lg p-5">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      <div id="cart-content" className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr>
              <th className="pb-3">Product</th>
              <th className="pb-3">Price</th>
              <th className="pb-3">Quantity</th>
              <th className="pb-3">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-4 py-2">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="block h-20 w-20 object-cover"
                  />
                  <div>
                    <p className="font-medium">{item.productName}</p>
                  </div>
                </td>
                <td className="py-4">₹{item.productPrice}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button className="px-2 py-1 border border-gray-300 rounded-md">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border border-gray-300 rounded-md">+</button>
                  </div>
                </td>
                <td className="py-4 text-orange-500">
                  ₹{(item.productPrice * 1).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-16">
        <button
          onClick={handleDownloadPDF}
          className="absolute bottom-6 right-6 px-4 py-2 bg-[#0E1534] text-white rounded-md"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CartData;
