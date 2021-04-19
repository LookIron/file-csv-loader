# file-csv-loader
Node application for APIs to provide an endpoint to load a csv file with the provider name.

## To be considered

*Prerequisites:* Nodejs

## Run

1. *Install dependeces*
````
npm install
````

2. *Run the server*
````
node app.js
````
This will run on http://localhost:8080, so you can test the API in Postmans, keep in mind the url of the service is ~/file/upload/~

Here is an examplo of postman where it is necessary to send in the body a csv file and in the url the provider name, for example for provider CompanyA we send http://localhost:8080/file/upload/CompanyA

3. *Test the app*
````
npm run test
````

4. *In the doc folder inside the project is the api.html which contains the update of the services.*



