import { useState } from "react";
import axios from "axios";
import DomainDetails from "./DomainDetails";
import IpAddressDetails from "./IpAddressDetails";
import ErrorAlert from "../errors/ErrorAlert";
import "../styles/LookupFormStyles.css";

function LookupForm() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
  const [domainFormData, setDomainFormData] = useState("");
  const [ipAddressFormData, setIpAddressFormData] = useState("");
  const [domainInfo, setDomainInfo] = useState({});
  const [ipAddressInfo, setIpAddressInfo] = useState({});
  const [error, setError] = useState(null);

  const handleDomainFormChange = (event) => {
    setDomainFormData(event.target.value);
  };

  const handleIpAddressFormChange = (event) => {
    setIpAddressFormData(event.target.value);
  };

  const handleDomainSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setIpAddressFormData("");
    setIpAddressInfo({});
    try {
      const apiResponse = await axios.get(
        `${API_BASE_URL}/domain?domainName=${domainFormData}`
      );
      await setDomainInfo(apiResponse);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleIpAddresSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setDomainFormData("");
    setDomainInfo({});
    try {
    const apiResponse = await axios.get(
      `${API_BASE_URL}/ipAddress?ipAddress=${ipAddressFormData}`
    );
    await setIpAddressInfo(apiResponse);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  let domainDetails = domainInfo.data ? (
    <DomainDetails domainInfo={domainInfo} />
  ) : null;

  let ipAddressDetails = ipAddressInfo.data ? (
    <IpAddressDetails ipAddressInfo={ipAddressInfo} />
  ) : null;

  return (
    <>
      <ErrorAlert error={error} />
      <form onSubmit={handleDomainSubmit}>
        <div className="form-group" align="center">
          <label htmlFor="domain">Lookup By Domain Name</label>
          <input
            name="domain"
            type="text"
            id="domain"
            className="form-control"
            aria-label="domain"
            style={{ maxWidth: 300 }}
            placeholder="Enter domain name here"
            required={true}
            value={domainFormData}
            onChange={handleDomainFormChange}
          />
          <button type="submit" className="btn btn-primary mt-3 text-center">
            Submit
          </button>
        </div>
      </form>
      <h5 className="text-center"> ... OR ... </h5>
      <form onSubmit={handleIpAddresSubmit}>
        <div className="form-group" align="center">
          <label htmlFor="ipAddress">Lookup By IP Address</label>
          <input
            name="ipAddress"
            type="text"
            id="ipAddress"
            className="form-control"
            aria-label="ipAddress"
            style={{ maxWidth: 300 }}
            placeholder="Enter IP address here"
            required={true}
            value={ipAddressFormData}
            onChange={handleIpAddressFormChange}
          />
          <button type="submit" className="btn btn-primary mt-3 text-center">
            Submit
          </button>
        </div>
      </form>
      {domainDetails}
      {ipAddressDetails}
    </>
  );
}

export default LookupForm;
