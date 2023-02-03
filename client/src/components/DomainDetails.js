import "../styles/DomainDetailsStyles.css";

function DomainDetails({ domainInfo }) {
  const data = domainInfo.data.data.WhoisRecord;

  return (
    <>
      <div className="card border-dark mb-3">
        <div className="card-body text-dark">
          <h4 className="card-title">Domain Information</h4>
          <p className="card-text">Domain: {data.domainName}</p>
          <p className="card-text">Registrar Name: {data.registrarName}</p>
          <p className="card-text">Created On: {data.createdDate}</p>
          <p className="card-text">Updated On: {data.updatedDate}</p>
          <p className="card-text">Expires On: {data.expiresDate}</p>
          <p className="card-text">Status: {data.status}</p>
          <p className="card-text">Name Servers: {data.nameServers.rawText}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Registrant Contact</h4>
          <p className="card-text">
            Organization: {data.registrant.organization}
          </p>
          <p className="card-text">State: {data.registrant.state}</p>
          <p className="card-text">Country: {data.registrant.countryCode}</p>
          <p className="card-text">Email: {data.registrant.rawText}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Administrative Contact</h4>
          <p className="card-text">
            Organization: {data.administrativeContact.organization}
          </p>
          <p className="card-text">State: {data.administrativeContact.state}</p>
          <p className="card-text">
            Country: {data.administrativeContact.countryCode}
          </p>
          <p className="card-text">
            Email: {data.administrativeContact.rawText}
          </p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Technical Contact</h4>
          <p className="card-text">
            Organization: {data.technicalContact.organization}
          </p>
          <p className="card-text">State: {data.technicalContact.state}</p>
          <p className="card-text">
            Country: {data.technicalContact.countryCode}
          </p>
          <p className="card-text">Email: {data.technicalContact.rawText}</p>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">Raw Whois Data</h4>
          <p className="card-text">{data.rawText}</p>
        </div>
      </div>
    </>
  );
}

export default DomainDetails;
