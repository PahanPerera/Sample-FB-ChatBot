# Sample-FB-ChatBot
Sample Server application and tutorial on creating a sample facebook chat bot
### Prerequisites
- Basic knowledge in NodeJs
- Development environment with NodeJs installed
- Basic knowledge in Facebook Pages/Apps

### Step 1 - Setting up the chat bot server
- Clone this repo 
```sh
$ git clone https://github.com/PahanPerera/Sample-FB-ChatBot.git
```
 - Install NodeJs dependencies
```sh
$ cd Sample-FB-ChatBot
$ npm install
```
 - Run server
```sh
$ node server.js
```
If you are seeing "Example app listening on port 3010!", your server has been started successfully. 
### Step 2 - Setting up the Facebook Application
- Create Facebook App and Page https://developers.facebook.com/docs/messenger-platform/implementation#create_app_page
- Get Page access token https://developers.facebook.com/docs/messenger-platform/implementation#page_access_token
(Save this token for later use)

### Step 3 - Setting up Token in the server and prepare webhook
- Goto server.js file and replace <YOUR_VERIFY_TOKEN> with the token you got from the step 2. (server.js line 10)
- Restart the server
- Since Facebook only accept public https URLs as their webhooks, we need to expose our local server endpoints as public https. Quick way to do that is use https://localtunnel.me/
- Create a https public endpoint using https://localtunnel.me/ (Please make sure you disable your firewalls)
```sh
$ npm install -g localtunnel
```
- Tunnel our local server port
```sh
- lt --port 3010
```
- You will get something like https://gqgh.localtunnel.me which is your public base URL
- If you goto https://gqgh.localtunnel.me/webhook in your web brawser you will get a message saying "Error, wrong validation token"
- Once this is done goto https://developers.facebook.com/docs/messenger-platform/implementation#setup_webhook and setup the webhook that we just created in the Facebook Application

### Step 4 - Subscribe Facebook App and Page
- Goto https://developers.facebook.com/docs/messenger-platform/implementation#subscribe_app_pages and subscripbe your application with your page

### Step 5 - Done
- Now goto your Facebook page and send it a chat message, it will echo back the text you send.

**Thank you for reading and your feedback is welcome.**


