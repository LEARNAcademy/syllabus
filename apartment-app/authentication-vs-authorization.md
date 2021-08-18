# Authentication vs Authorization

### Front to Back Communication
User authentication requires the frontend, directly controlled by the user and the backend, controlled by the developer to agree that the user is who he/she claims to be, and that there has been no interference, malicious or otherwise, between the two sides of the system.  This is the fundamentals of web application security, we need to make sure we know who is communicating, and that the communication is real.  There are many strategies developers use to ensure security in their applications, and just as many opinions on the benefits of each.  Some developers opt to construct their own authentication strategy, while others depend on tried and true standard methods supported and maintained by the community as a whole.  Best practice is to use standardized and open authentication tools for web apps.  Open source tools such as those we'll be using in class, have many, many smart people driving their development, protecting their apps against bugs and security vulnerabilities.  Just as important, these tools are well maintained, assuring that when new security risks are discovered, the tools are patched quickly.  It is our responsibility as users of these tools to make sure that we stay current with the latest versions, keeping our own apps as safe as possible.

### How Authentication Works

![auth workflow](https://s3.amazonaws.com/learn-site/curriculum/React/Authentication.jpg)

The backend app has the primary responsibility for maintaining security in an application.  It is the only place where we as developers can be certain that we have absolute control over our data.  The backend uses secrets and hashing algorithms for its secure data that it sends out to browsers and other clients.  The server then demands that the client sends a secure token that only the server could have generated with every request that requires authentication.

### Authentication

Authentication is the process of establishing that an entity is what/who it claims to be. In our industry the entity is often a user. Authentication is often done by providing credentials that are not publicly available, or secret, such as a password; this process is called signing in or logging in.

[ Authentication ](https://en.wikipedia.org/wiki/Authentication)

### Authorization

Authorization is process of giving permission to an entity to access a resource. This is often done after an entity has been authenticated.

For instance:
- Logging into a mail server, gives you access to your email but not others' emails.
- Logging into Google Drive gives me permission to read some files and permission to edit other files.
- When I am on the internet in the US, I can watch certain movies on Netflix, but not when I am outside the US.

The last instance shows an authorization scheme that is not dependent on au**then**tication.

[ Authorization ](https://en.wikipedia.org/wiki/Authorization)

### Cookie Based Authentication
There are many strategies for building a secure single page web application.  In class, we're going to use the excellent Devise gem, and the power of Rails to build a Cookie based system.  In your career, you'll also run across systems built on OAuth, JWT, and others.  All have their strengths and vulnerabilities.  Cookie based systems have been around for a long time, are battle tested, and have the additional benefit of being simpler to stand up.  In security and authentication systems, simpler is often better because there are fewer complexities in the code for bugs and thus vulnerabilities to hide.

### Cookie Based Authentication with Devise and Rails
When a user logs into our website, the response will contain a cookie containing a special session ID encrypted by the server.  Then, every time the client requests a new resource, it sends that session ID back to the server in the header of the request.  If that session ID sent to the server is decryptable, then we know that the user is who they claim to be, and the server can process the request.

---
[Back to Syllabus](../README.md#unit-nine-react-in-rails-and-authentication)
