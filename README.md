# Whois Lookup | Domain / IP Address Application

Whois Lookup is a client application that allows a user to lookup Whois Information when they submit a valid domain name or IP addess.    

## Links

[Live App](https://whois-lookup-6hn5.onrender.com) deployed to Render  

## Technology

- Javascript, React, Bootstrap, HTML, CSS, Node.js, Express.js, Axios  
  
![JS icon](images/javascript.png)
![React icon](images/react.png)
![Bootstrap icon](images/bootstrap.png)
![HTML icon](images/html.png)
![CSS icon](images/css.png) 
![Node icon](images/node-js.png)
![Express icon](images/express.png)  

## Installation

1. Fork and clone this repository.
1. cd into /server and run `npm install` to install server dependencies.
1. Run `npm run dev` from /server.
1. In a new terminal, cd into /client and run  `npm install` to install client dependencies.
1. Run `npm start` from /client.

## How the App Works

The home page provides a user with an option to submit a domain name or an IP address:  

![home page screenshot](/images/homepage.png)

If the domain name or IP address submitted is invalid, the user will receive a helpful error message:  

![error screenshot](/images/error.png)

If the domain name or IP address submitted is valid, the page will load the associated Whois information:  

![lookup1 screenshot](/images/lookup1.png)
![lookup2 screenshot](/images/lookup2.png)
