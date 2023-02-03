const axios = require("axios");

// Middleware

function requestHasQueryParam(req, res, next) {
  const domainName = req.query.domainName;
  if (domainName) {
    res.locals.domainName = domainName;
    return next();
  } else {
    return next({
      status: 400,
      message: "A 'domainName' query parameter is required.",
    });
  }
}

function queryParamIsValidDomain(req, res, next) {
  const param = res.locals.domainName;
  const regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;
  if (regexp.test(param)) {
    return next();
  } else {
    return next({
      status: 400,
      message: `'${param}' is not a valid domain name.`,
    });
  }
}

// HTTP Request Handlers

async function list(req, res) {
  const domainName = res.locals.domainName;
  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_r3dpyh0qKbclsHnEved1nD06jcbe2&domainName=${domainName}&outputFormat=JSON`;
  const domainData = await axios.get(url);
  res.send({ data: domainData.data });
}

// Exports

module.exports = {
  list: [requestHasQueryParam, queryParamIsValidDomain, list],
  // list,
};
