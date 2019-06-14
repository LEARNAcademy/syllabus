# Rails: RESTful Web Application Framework
## An Overview of HTTP and RESTful Services

The goal of this section is to get you familiar with the big picture concepts that are going to help you understand what you are building when you are coding a Rails application.

We'll take a look at:

- How we interact with the internet (requests and responses)
- What HTTP is

### Request and Response

The request and response cycle pretty much defines how we interact with the internet. A typical interaction looks like this:

1) We make a request to the internet
    - Enter something in the address/search bar of our browser and hit ```Enter```
2) The request hits the appropriate server and the server responds with something
    - You see a new page with content or an error code

We do this all the time. For us to better understand how our Rails applications work and why it requires the work that it does, we have to dig a little bit into the specifications that define internet communications. These specs are defined in the HTTP.

### H(yper)T(ext) T(ransfer) P(rotocol)

HyperText Transfer Protocol is what we're using when we are on the internet.

As its name states is a protocol and it defines:

- a communication protocol between a client (user on a browser) and a server (machine running our application)
- a way to handle information exchange (req/res) between a client and a server
- what’s in a valid request/response
    - how they are formed
    - what kinds of information are required/allowed
- what kinds of requests a server respond to (HTTP VERBS)
- how a server indicates success and failures (HTTP codes)

This is a bird’s eye perspective on the mechanics of our web requests that it’ll help to keep in mind when working on the following Rails challenges.

As you are working, recognize that when you type in your url and hit enter, you are making a request. And as you are coding your Rails application, you are defining how your app responds to those requests.	

### HTTP Statelessness | RESTful Web Resources
#### REpresentational State Transfer

One of the specs of HTTP is that it is stateless, meaning that requests contain no knowledge of requests or state changes that were made before it. As such, any application made for use on the web must be built as a  RESTful service.

The REST in RESTful service stands for REpresentational State Transfer which is a software architecture that implements the kind of stateless process required by HTTP. 

REST architecture achieves statelessness by:

- separating the concerns of the client and server (client triggers user requests for data retrieval/alteration and server responds with data and/or changes)
- specifying that all information required to complete a request is included with the request

In an application built in this style the client knows nothing about the status of the server and the server knows nothing about the status of the client. All they know are the messages they exchange. 

Now you don’t have to fret too much about implementing this from scratch because the Rails framework is built to implement a RESTful web application. In fact, working in a Rails framework is an excellent way to the learn the ins and outs of building a RESTful web service.