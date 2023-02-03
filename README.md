# Whois Lookup | Domain / IP Address Application

Whois Lookup is a client application that allows a user to lookup Whois Information when they submit a valid domain name or IP addess.    

## Links

[Client App](https://whois-lookup-client.onrender.com) deployed to Render  
[Server](https://whois-lookup-server.onrender.com) deployed to Render  
Server Routes:  
`/domain` - use with a 'domainName' query parameter  
`/ipAddress` - use with a 'ipAddress' query parameter  

## Technology

- Javascript, React, Bootstrap, HTML, CSS, Axios  
  
![JS icon](images/javascript.png)
![React icon](images/react.png)
![Bootstrap icon](images/bootstrap.png)
![HTML icon](images/html.png)
![CSS icon](images/css.png)  

## Installation

### Client Application

1. Fork and clone this repository.
1. Run `npm install` to install project dependencies.
1. Run `npm start` to start the client locally (make sure your server is up and running first).  

### Server

1. Go to [Whois Lookup server on GitHub](https://github.com/brianwmorgan/whois-lookup-server).
1. Fork and clone the repository.
1. Run `npm install` to install project dependencies.    
1. Run `npm start` to start the server locally (or `npm run dev` to start the server using nodemon).

## How the App Works

The home page provides a user with an option to submit a domain name or an IP address:  

![home page screenshot](/images/homepage.png)

If the domain name or IP address submitted is invalid, the user will receive a helpful error message:  

![error screenshot](/images/error.png)

If the domain name or IP address submitted is valid, the page will load the associated Whois information:  

![lookup1 screenshot](/images/lookup1.png)
![lookup2 screenshot](/images/lookup2.png)
