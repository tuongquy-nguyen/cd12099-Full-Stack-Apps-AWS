# Full Stack Apps on AWS Project

Working Processing Image Endpoint: http://cd12099-full-stack-apps-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/2Golden_tabby_and_white_kitten_n01.jpg

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

You can clone this repo to run the project locally, or navigate to the workspace in the Udacity course.

## Project Instructions

To complete this project, you will need to:

* Set up node environment
* Create a new endpoint in the server.js file
* Deploying your system

## Testing

Screenshots are placed in `deployment_screenshots` folder

This is the request URL which return processed image:
Working Elasic Beanstalk domain: http://cd12099-full-stack-apps-aws-dev.us-east-1.elasticbeanstalk.com/

Working Processing Image Elastic Beanstalk URL: http://cd12099-full-stack-apps-aws-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/2Golden_tabby_and_white_kitten_n01.jpg

Successful URL responses should have a 200 code. Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.

## License

[License](LICENSE.txt)
