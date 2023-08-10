# Handling API Keys

#### Overview

External APIs are data sets created by other developers and made available for public consumption. This is one of the many ways developers share resources with each other. However, the creator(s) of the data set have a right to protect their data and monitor the traffic on their servers. To protect their data from accidents or malicious actors, developers will implement a unique identifier that will authorize and authenticate the request of an application or user.

#### Learning Objectives

- can define API key
- can define environment variable
- can create the code structure to protect API keys in a React application
- can use an API key to create an effective fetch request
- can create the code structure to protect API keys in a React application

#### Additional Resources

- [NASA API](https://api.nasa.gov/)
- [Protecting API Keys in React](https://upmostly.com/tutorials/how-to-hide-api-keys-in-react-applications)
- [Environment Variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa)
- [Dotenv Gem](https://mlcomeau.github.io/using_the_dotenv_gem_in_your_rails_app)

#### Vocabulary

- rate limit
- API key
- environment variable

#### Process

- create a file in the root of the project called `.env`
- add `/.env` to the `.gitignore` file
- create a variable in the `.env` file that follows this format: `SECRET_KEY_HERE =`

#### Troubleshooting Tips

- Is there an error on the request or on the response?
- Stop and restart the server.

---

### Rate Limits

External APIs can provide a lot of value to an application. However, developers that create external APIs have a right to protect their data and manage the traffic of requests coming into their servers. This is often done by putting rate limits on their APIs. A **rate limit** is how many requests are allowed in a given time period. Examples of common rate limits are 1,000 requests an hours or 10,000 requests a day. However, each API will have different requirements. It is up to the consumer of the external API to read the documentation.

### API Keys

To enforce the rate limit and protect data from malicious actors each request for data needs to be tracked and regulated. Consumers of the external API will be required to sign up or register their application. In turn the consumer of the external API will receive an API key. The **API key** is an authentication token that gets added to the request url. API keys must be protected just like passwords. API keys should NOT be checked into version control (git).

In order to hide the API key we will use an environment variable. An **environment variable** is a variable whose value is set outside the program. It is a variable that rarely changes so it is like creating a `const` variable for the whole application.

### API Keys in React

Environment variables are often stored in a file in the root directory of the application called `.env`. The file is then added to the `.gitignore` file so that `.env` doesn't get added to version control.

**.gitignore**

```
/.env
```

The secret token will live inside the `.env` file. The casing convention for this type of variable is all uppercase with underscores separating each word. The variable is then assigned the API key.

**.env**

```
MY_SECRET_API_KEY = secret_token_here
```

The environment variable is now available to the application. Inside of `App.js` the variable can be referenced using the syntax `process.env.MY_SECRET_API_KEY`.

**app/javascript/components/App.js**

```javascript
const apiKey = process.env.MY_SECRET_NASA_API_KEY

// be sure to remove all logs before committing to GitHub!!

console.log(apiKey)
```

Now that React has access to the API key we can create a fetch request for data from the external API.


### Adding ENV to Rails
API keys are often used on backend applications as well.  An environment variable will once again be needed to hide our API key.  To do this, we can create a .env file in the root directory.  We will need to tell our Rails application that we have a new `.env` file in our application. Luckily since this is a very common practice, there is a Ruby gem that will do the heavy lifting.

In the terminal we will add the `dotenv-rails` gem to the gemfile.

```bash
bundle add dotenv-rails
```

---

### 💻 Challenge: Nasa

Create a React application that returns interesting information of the developer's choice using the NASA API.

Reminder that API keys and `.env` files should NOT be added to version control.

---

[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)
