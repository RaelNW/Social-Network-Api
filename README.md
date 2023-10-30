# Social-Network-Api

## Description
 API  using a NoSQL database, designed to  manage data and user interactions.

**Table of Contents**
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [Link to Demo](#link-to-demo)
- [Link to Repo](#link-to-repo)
- [Additional Support](#additional-support)


## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

1. Clone the repository: `git clone git@github.com:RaelNW/Social-Network-Api.git `
2. Navigate to the project directory:
3. Install dependencies: `npm install`


## Usage

1. Run the application: `npm start`
2. Access the API at `http://localhost:3001`

## Dependencies

The project relies on the following  dependencies:

1. date-fns: A javascript Date utility library.
2. express: A framework for Node.js.
3. mongoose: This is a MongoDB object modeling tool. 

## Available Endpoints

1. `/api/thoughts`  
   - GET: Get thoughts
   - POST: Create thought

2. `/api/thoughts/:id`  
   - GET: Get thought by ID

3. `/api/thoughts/:thoughtId/reactions`  
   - POST: Add reaction

4. `/api/thoughts/:thoughtId/reactions/:reactionId`  
   - DELETE: Remove reaction

5. `/api/users`
   - GET: Get all users
   - POST: Create user

6. `/api/users/:id`
   - GET: Get user by ID
   - PUT: Update user
   - DELETE: Delete user

7. `/api/users/:id/friends/:friendId`
   - POST: Add friend
   - DELETE: Remove friend

## Credits

For inquiries, please contact [Rael Wanjala].

## link to Demo


## Link to Repo
https://github.com/RaelNW/Social-Network-Api.git


## Additional Support
Used Phind.com 


