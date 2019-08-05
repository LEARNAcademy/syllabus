# Cloud 9 and Postman

In order to see our app in Postman, we need to expost the running Rails application to the intenet by poking a hole through the AWS firewall.

![ec2](https://content.screencast.com/users/mclark8/folders/Jing/media/de3baa8a-4304-45fe-98a1-bbe4b48f40a2/00000517.png)

![intance](https://content.screencast.com/users/mclark8/folders/Jing/media/0ca8960a-1bdf-45dd-8a18-65a97f5f4f0d/00000518.png)

![security groups](https://content.screencast.com/users/mclark8/folders/Jing/media/fdafc2c0-ec17-47df-88f2-c1ee54a2627e/00000519.png)

![edit](https://content.screencast.com/users/mclark8/folders/Jing/media/5a2cdedb-2cef-477c-b192-88bc8ecb43ba/00000520.png)

![Add Rule](https://content.screencast.com/users/mclark8/folders/Jing/media/08024915-2545-433b-8d8d-c41848e825d5/00000539.png)


### Running the Rails App
```bash
bundle exec rails s -b 0.0.0.0
```

Then Looking under the sharing options for the Cloud 9 server, and copy the IP address:

![ip address](https://content.screencast.com/users/mclark8/folders/Jing/media/b2ada5dd-9452-4123-a3c9-d6564a942305/00000522.png)

*Note you will use the application IP plus :8080 (ie, xx.xx.xx.xxx:8080) in the browser and in Postman
