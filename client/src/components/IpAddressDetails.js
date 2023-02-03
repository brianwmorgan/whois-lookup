import "../styles/DomainDetailsStyles.css";

function IpAddressDetails({ ipAddressInfo }) {
  const data = ipAddressInfo.data.data.WhoisRecord;

  return (
    <>
      <div className="card border-dark mb-3">
        <div className="card-body text-dark">
          <h4 className="card-title">IP Address Information</h4>
          <p className="card-text">Domain: {data.domainName}</p>
          <p className="card-text">Registrar Name: {data.registrarName}</p>
          <p className="card-text">Created On: {data.registryData.createdDate}</p>
          <p className="card-text">Updated On: {data.registryData.updatedDate}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Registrant Contact</h4>
          <p className="card-text">
            Organization: {data.registryData.registrant.organization}
          </p>
          <p className="card-text">City: {data.registryData.registrant.city}</p>
          <p className="card-text">State: {data.registryData.registrant.state}</p>
          <p className="card-text">Country: {data.registryData.registrant.countryCode}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Administrative Contact</h4>
          <p className="card-text">
            Organization: {data.registryData.administrativeContact.organization}
          </p>
          <p className="card-text">Email: {data.registryData.administrativeContact.email}</p>
          <p className="card-text">
            Telephone: {data.registryData.administrativeContact.telephone}
          </p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Technical Contact</h4>
          <p className="card-text">
            Organization: {data.registryData.technicalContact.organization}
          </p>
          <p className="card-text">Email: {data.registryData.technicalContact.email}</p>
          <p className="card-text">Telephone: {data.registryData.technicalContact.telephone}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Raw Whois Data</h4>
          <p className="card-text">{data.registryData.rawText}</p>
        </div>
      </div>
    </>
  );
}

export default IpAddressDetails;
