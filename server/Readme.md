# Running the Angular CLI FrontEnd UI Project

Use Angular CLI and from the angular project directory run the following commands:
To install all depndencies
>npm install


To serve up the Angular app to localhost:4200


>ng serve -o

The -o flag should open the browser and automatically navigate to the correct port on localhost.

-------------------------------------------------------------------------------------------------------
# Backend Servers and interactions
For testing purposes there are two servers that are being set up here

## 1) First we host a list of Databases
This is done as a by hosting a JSON object in a REST API using json-server

Navigate to the server folder inside the project directory


> cd ./server


launch the json-server on localhost with a watch flag to monitor the requests


>json-server -w db.json 

In this program - this json-server acts as the list of all mock databases each with an id stored as a JSON object with two parameters: id and content

A GET request is being used to get the full JSON object and iterate through the object and generate rows for each entry in the JSON file.
A POST request is being used to append to the JSON object with a new entry


TODO:
1) Add separate form input to capture name of the database 
2) Link the POST Request to the Create Database button in the menubar



## 2) The second server is being hosted on the on the fmr server - this is to test authentication with a number
This contains the following data:


>{"id":int, "content":"Hello World"}


THe hello world string is where the a# token is to be stored


This data is being pulled with a GET request and displayed in the UI.
The POST request to add to this data is not funcitonal - as the object on the server is not a JSON object. 

TODO:
1) A PUT request implementation is to be tested to replace the Hello World String with another entry.
2) Explore if the data on the fmr server needs to be/can be a JSON object to simplify interaction with the HTTPCLIENTMODULE in Angular




---------------------------------------------------------------------------------------------------------------

