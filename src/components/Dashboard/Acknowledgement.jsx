import React, { useState, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import "./styles/acknowledgment.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { axiosInstance } from "../../api/api";

const Acknowledgement = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [imageBase64, setImageBase64] = useState(""); // Placeholder for the base64 string

  useEffect(() => {
    // Fetch user details from the backend
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get('/users/acknowledgement'); // Adjust the endpoint as needed
        setUserDetails(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUserDetails();
  }, []);

  const handleDownload = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const doc = new jsPDF();

    doc.text("Acknowledgment Form", 10, 10);
    doc.text("Please review and acknowledge the information below:", 10, 20);
    doc.text(`User Name: ${userDetails?.user?.name || 'N/A'}`, 10, 30);
    doc.text(`Email: ${userDetails?.user?.email || 'N/A'}`, 10, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 50);
    doc.text(`Signature: ${userDetails?.user?.signature || 'N/A'}`, 10, 60);

    doc.save("acknowledgment-form.pdf");
  };

  const printDocument = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const input = document.getElementById("divToPrint");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG format and reduce quality

      // Create a new PDF document
      const pdf = new jsPDF();

      // Get the dimensions of the canvas
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // Define the PDF page size
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate the scaling factor to fit the image
      const scale = Math.max(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledImgWidth = imgWidth * scale;
      const scaledImgHeight = imgHeight * scale;

      // Calculate the position to center the image
      const xOffset = (pdfWidth - scaledImgWidth) / 2;
      const yOffset = (pdfHeight - scaledImgHeight) / 2;

      // Add the image to the PDF
      pdf.addImage(
        imgData,
        "JPEG",
        xOffset,
        yOffset,
        scaledImgWidth,
        scaledImgHeight
      );

      // Save the PDF
      pdf.save("acknowledgement_card.pdf");
    });
  };

  if (error) return <div>Error: {error}</div>;
  if (!userDetails) return <div>Loading...</div>;

  return (
    <DashboardLayout>
      <div className="form-container">
        <div className="top">
          <h3>Acknowledgement</h3>
          <p>
            Application Status: <span className="complete">Complete</span>
          </p>
        </div>
        <form className="institution-form ack" onSubmit={printDocument}>
          <h2>
            Congratulations, your Application has been Completed Successfully
          </h2>

          <h4>Click the button below to download your Acknowledgement Card</h4>

          <button type="submit" className="submit-button">
            Download Acknowledgement Card
          </button>
        </form>
      </div>
      <div id="divToPrint">
        <div className="container">
          <h1>THE ALGORITHM NATIONAL COMPETITION</h1>
          <h2>ACKNOWLEDGEMENT CARD</h2>

          <div className="section">
            <div className="section-title">APPLICANT DETAILS</div>

            <div className="flexx">
              <table className="details-table">
                <tbody>
                  <tr>
                    <td>APPLICATION ID:</td>
                    <td>{userDetails?.user?.applicationId || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>FIRST NAME:</td>
                    <td>{userDetails?.user?.firstName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>SURNAME:</td>
                    <td>{userDetails?.user?.surname || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>MIDDLE NAME:</td>
                    <td>{userDetails?.user?.middleName || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>DATE OF BIRTH:</td>
                    <td>{userDetails?.user?.dob || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>GENDER:</td>
                    <td>{userDetails?.user?.gender || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>NIN:</td>
                    <td>{userDetails?.user?.nin || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>PHONE NO:</td>
                    <td>{userDetails?.user?.phone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>L.G.A. OF ORIGIN:</td>
                    <td>{userDetails?.user?.lga || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td>EMAIL ADDRESS:</td>
                    <td>{userDetails?.user?.email || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>

              {imageBase64 && (
                <div className="image-container">
                  <img
                    src={imageBase64}
                    alt="Document"
                    className="uploaded-image"
                  />
                </div>
              )}
            </div>

            <div className="checkbox">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree">
                I agree that the information contained in the acknowledgement
                card is correct and up to date.
              </label>
            </div>
          </div>

          <div className="section">
            <div className="section-title">
              INSTITUTION DETAILS AND OFFICIAL VERIFICATION
            </div>
            <table className="details-table">
              <tbody>
                <tr>
                  <td>INSTITUTION NAME:</td>
                  <td>{userDetails?.institutionalDetails?.institutionName || 'N/A'}</td>
                </tr>
                <tr>
                  <td>MATRICULATION NO:</td>
                  <td>{userDetails?.institutionalDetails?.matriculationNo || 'N/A'}</td>
                </tr>
                <tr>
                  <td>DEPARTMENT:</td>
                  <td>{userDetails?.institutionalDetails?.department || 'N/A'}</td>
                </tr>
                <tr>
                  <td>FACULTY:</td>
                  <td>{userDetails?.institutionalDetails?.faculty || 'N/A'}</td>
                </tr>
                <tr>
                  <td>CURRENT SEMESTER:</td>
                  <td>{userDetails?.institutionalDetails?.currentSemester || 'N/A'}</td>
                </tr>
                <tr>
                  <td>DEGREE TYPE:</td>
                  <td>{userDetails?.institutionalDetails?.degreeType || 'N/A'}</td>
                </tr>
                <tr>
                  <td>LEVEL:</td>
                  <td>{userDetails?.institutionalDetails?.level || 'N/A'}</td>
                </tr>
                <tr>
                  <td>YEAR OF ADMISSION:</td>
                  <td>{userDetails?.institutionalDetails?.yearOfAdmission || 'N/A'}</td>
                </tr>
                <tr>
                  <td>EXPECTED YEAR OF GRADUATION:</td>
                  <td>{userDetails?.institutionalDetails?.expectedYearOfGraduation || 'N/A'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="signatures">
            <div>
              OFFICIAL INSTITUTION VERIFICATION:
              _________________________________________________________________
            </div>
            <br />
            <div>
              OFFICER'S NAME, SIGNATURE AND DATE:
              _________________________________________________________________
            </div>
            <br />
            <div>
              STUDENT SIGNATURE AND DATE:
              _________________________________________________________________
            </div>
            <br />
          </div>

          <div className="section">
            <p>
              PLEASE NOTE: DULY SIGNED ACKNOWLEDGEMENT CARD MUST BE SCANNED TO
              DSBSBONLINE@GMAIL.COM IN PDF FORMAT ONLY, OTHER FORMATS WILL NOT
              BE APPROVED FOR EVALUATION AND APPROVAL BY THE BOARD.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Acknowledgement;
