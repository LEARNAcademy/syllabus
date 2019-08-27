# Postman: Interacting with JSON APIs

When building a JSON API, it becomes a challenge to interact with the server when you don't yet have a view. Thankfully, there are tools that allow you to form and send http requests to your server. Postman is one of those tools.

This page provides an overview of the Postman tool and a couple of examples to help you get started.

## The Interface

The request dashboard of Postman looks something like this:

![Postman Layout](../assets/postman/postman-interface-layout.png)

Here we've highlighted the essential sections of the interface. The first 3 components (verb selector, url input, and send button) are the main components that allow you set up and make a request. The response section is where you can expect the result of a request. There are a few more important pieces to the interface but their utility is best demonstrated through example.

## A Simple GET to an `index`

This is the simplest kind of request we can make so let's start with that.

1) Select `GET` from the verb selector dropdown
2) Enter the url that points to the index method of your application.
3) Click **Send**   

![Get Request with Postman](../assets/postman/postman-get-send.png)

That result should appear in the response section at the bottom of the page as JSON:

![Get Response in Postman](../assets/postman/postman-index-json.png)

## A POST in Postman

POST type requests through Postman are a little more involved.

1) Select `POST` from the verb selector dropdown
2) Enter the url that points to the create method of your application.
3) Select the **Body** tab below the url input
4) Select the **raw** radio button
5) Select **JSON (application/javascript)** in the dropdown that appears to the right
6) Add the appropriate JSON
7) Click **Send**

![Post Request in Postman](../assets/postman/postman-post-send.png)

That result should appear in the response section at the bottom of the page as JSON:

![Post Response in Postman](../assets/postman/postman-create-json.png)
