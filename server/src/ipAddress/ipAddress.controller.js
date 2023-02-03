const axios = require("axios");

// Middleware

function requestHasQueryParam(req, res, next) {
  const ipAddress = req.query.ipAddress;
  if (ipAddress) {
    res.locals.ipAddress = ipAddress;
    return next();
  } else {
    return next({
      status: 400,
      message: "An 'ipAddress' query parameter is required.",
    });
  }
}

function queryParamIsValidIpAddress(req, res, next) {
  const param = res.locals.ipAddress;
  const regexp =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  if (regexp.test(param)) {
    return next();
  } else {
    return next({
      status: 400,
      message: `'${param}' is not a valid IP address.`,
    })
  }
}

// HTTP Request Handlers

async function list(req, res) {
  const ipAddress = res.locals.ipAddress;
  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_r3dpyh0qKbclsHnEved1nD06jcbe2&domainName=${ipAddress}&outputFormat=JSON`;
  const ipAddressData = await axios.get(url);
  res.send({ data: ipAddressData.data });
}

// Exports

module.exports = {
  list: [requestHasQueryParam, queryParamIsValidIpAddress, list],
};
