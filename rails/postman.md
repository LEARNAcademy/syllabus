# Postman: Interacting with JSON APIs

When building a JSON API, it becomes a challenge to interact with the server when you don't yet have a view. Thankfully, there are tools that allow you to form and send http requests to your server. Postman is one of those tools.

This page provides an overview of the Postman tool and a couple of examples to help you get started.

## The Interface

The request dashboard of Postman looks something like this:

![Postman Layout](./assets/postman-interface-layout.png)

Here we've highlighted the essential sections of the Postman interface. The first 3 components (verb selector, url input, and send button) are the main components that allow you set up and make a request. The response section is where you can expect the result of a request. There are a few more important pieces to the interface but their utility is best demonstrated through example.

## A Simple GET to an `index`

This is the simplest kind of request we can make so let's start with that.

1) Select `GET` from the verb selector dropdown
2) Enter the url that points to the index method of your application.
3) Click **Send**   

![Get Request with Postman](./assets/postman-get-send.png)

That result should appear in the response section at the bottom of the page as JSON:

![Get Response in Postman](./assets/postman-index-json.png)

## A POST in Postman

POST type requests through Postman are a little more involved.

1) Select `POST` from the verb selector dropdown
2) Enter the url that points to the create method of your application.
3) Select the **Body** tab below the url input
4) Select the **raw** radio button
5) Select **JSON (application/javascript)** in the dropdown that appears to the right
6) Add the appropriate JSON
7) Click **Send**

![Post Request in Postman](./assets/postman-post-send.png)

That result should appear in the response section at the bottom of the page as JSON:

![Post Response in Postman](./assets/postman-create-json.png)



# Cloud 9 and Postman

In order to see our app in Postman, we need to expose the running Rails application to the internet by poking a hole through the AWS firewall.

![ec2](https://content.screencast.com/users/mclark8/folders/Jing/media/de3baa8a-4304-45fe-98a1-bbe4b48f40a2/00000517.png)

![instance](https://content.screencast.com/users/mclark8/folders/Jing/media/0ca8960a-1bdf-45dd-8a18-65a97f5f4f0d/00000518.png)

![security groups](https://content.screencast.com/users/mclark8/folders/Jing/media/fdafc2c0-ec17-47df-88f2-c1ee54a2627e/00000519.png)

![edit](https://content.screencast.com/users/mclark8/folders/Jing/media/5a2cdedb-2cef-477c-b192-88bc8ecb43ba/00000520.png)

![Add Rule](https://content.screencast.com/users/mclark8/folders/Jing/media/08024915-2545-433b-8d8d-c41848e825d5/00000539.png)


### Running the Rails App
```bash
bundle exec rails s -b 0.0.0.0
```

Then Looking under the sharing options for the Cloud 9 server, and copy the IP address:

![ip address](https://content.screencast.com/users/mclark8/folders/Jing/media/b2ada5dd-9452-4123-a3c9-d6564a942305/00000522.png)

**Note:** you will use the application IP plus :8080 (ie, xx.xx.xx.xxx:8080) in the browser and in Postman

---
[Back to Syllabus](../README.md#unit-six-ruby-on-rails)
