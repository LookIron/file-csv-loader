# file-csv-loader
Node application for APIs to provide an endpoint to load a csv file with the provider name.

## To be considered

*Prerequisites:* Nodejs

## Run

1. *Clone the repository and Install dependeces*
````
npm install
````

2. *Run the server*
````
node app.js
````

This will run  the server on http://localhost:8080, so you can test the API in Postmans, keep in mind the url of the service is .../file/upload/
Here is an examplo of postman https://www.getpostman.com/collections/a9c77f32c3bab071cda0  where it is necessary to send in the body in form-data a csv file(in exmaple folder there is an example with 1000 rows - MOCK_DATA.csv) and in the url the provider name, for example for provider CompanyA we send http://localhost:8080/file/upload/CompanyA

3. *Test the app*
````
npm run test
````
- The unit test are configurate with a coverage of 80%

4. *In the doc folder inside the project is the api.html which contains the update of the services.*

5. The project structure is divided into folders the main ones are as follows:
    * *src:*: Contains de model an controller folder
    * *route:* Contains all our routes
    * *test:* Contains the unit test
    * *config:* Contains the db configuration

6. Dependences
    - *express*
    - *mongoose*
    - *multer*
    - *csvtojson*
    - *mongodb-memory-server*
    - *dotenv*



