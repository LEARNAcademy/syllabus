![Create Bucket](./assets/01-create-bucket.png)

![Bucket Name](./assets/02-bucket-name.png)

![Permissions](./assets/03-permissions.png)

![Bucket Policy](./assets/04-bucket-policy.png)

### CORS
```xml
<CORSConfiguration>
 <CORSRule>
   <AllowedOrigin>*</AllowedOrigin>
   <AllowedMethod>PUT</AllowedMethod>
   <AllowedMethod>POST</AllowedMethod>
   <AllowedMethod>DELETE</AllowedMethod>
   <AllowedHeader>*</AllowedHeader>
  <MaxAgeSeconds>3000</MaxAgeSeconds>
 </CORSRule>
</CORSConfiguration>
```

![CORS](./assets/06-cors.png)
### Bucket Policy
```json
{
  "Id": "Policy1556032935195",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1556032933420",
      "Action": [
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::learn-example/*",
      "Principal": "*"
    }
  ]
}

```

![Public Bucket](./assets/07-public%20bucket.png?raw=true)
