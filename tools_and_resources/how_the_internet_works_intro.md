# How The Internet Works

### Request/response cycle
- IP address (Internet Protocol) is a unique set of four numbers separated by periods
- 127.0.0.1 "localhost" or home
- Every computer has an IP address
- A server is just a computer that has been optimized for storage with a minimal operating system, so every server has an IP address
- HTTP (HyperText Transfer Protocol) is used for transferring text (HTML)
- HTTPS (Secure) certificate that guarantees the code of the webpage is coming to your computer encrypted, improves SEO
- As a user you can request a URL, every request receives a response

A request is made up of two mandatory pieces: destination, verb/action

### DNS
Domain Name System - the phone book of the internet, converts the URL to an IP, starts at the far right and moves left to narrow down the search
- Top level domain - .com, .org, .net
restricted TLD - must belong to a particular community, .edu,
ccTLD - .eu, .mx, .io
- Domain name - the body of the URL
- Sub domain name - default is often `www`

### Caching
Your computer's short-term memory
Mapping a URL => IP seems fast to humans, but is relatively slow and inefficient, so your browser will remember the IP address of website you visit (usually for about 48 hours)

### HTTP Responses
Made up of status codes:
- 100's - informational
- 200's - success
- 300's - redirect (the thing you are asking for isn't there)
- 400's - client side error
- 500's - server side error

[Cat Error Codes](https://http.cat/[status_code])

### CRUD
The basic actions a website should be able to do:
- C - Create
- R - Read
- U - Update
- D - Delete

### HTTP Verbs
- Get - read, simplest type of request
- Post - create, usually filling out a form
- Put - update/replace
- Patch - update/modify
- Delete

HTTP transfers info as strings

### CURL
"See" URL (Uniform Resource Locater)
In terminal type `curl http://www.google.com`, the response is all the HTML and CSS needed to build the page

### Ping
In terminal type `ping 127.0.0.1`(home) or `ping 8.8.8.8` for google.

### API
Application Programs Interface, the process of getting data from a website that is returned in JSON
An API is a data to data interface, does not have any markup, just generates information
- Websites have pages, APIs have endpoints

### Example of JSON:
{"copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.", "num_results": 28970, "results": [{"age_group": "", "author": "Sophia Amoruso", "contributor": "by Sophia Amoruso", "contributor_note": "", "description": "An online fashion retailer traces her path to success.", "isbns": [{"isbn10": "039916927X", "isbn13": "9780399169274"}], "price": 0, "publisher": "Portfolio/Penguin/Putnam", "ranks_history": [{"asterisk": 0,"bestsellers_date": "2016-02-27", "dagger": 0, "display_name": "Business", "list_name": "Business Books", "primary_isbn10": "1591847931", "primary_isbn13": "9781591847939", "published_date": "2016-03-13", "rank": 8, "weeks_on_list": 0}], "reviews": [{"article_chapter_link": "", "book_review_link": "", "first_chapter_link": "", "sunday_review_link": ""}], "title": "#GIRLBOSS"}], "status": "OK"}

### Attacks
* Man in the middle - create a node that "listens" to the network on open wifi
* Cross site scripting - embedding snippets of JS in a website that is run when the browser opens the page
* DNS cache poisoning - changing the IP address in the your local storage so your computer goes to the poison address
* DDOS attack - Distributed Denial of Service, bogs down the server with requests so that it appears the server is down
* IDN Homograph attack - Changing a letter (ie Roman vs Cyrillic letters) to make the url appear normal but is actually a different character
