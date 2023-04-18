# IP_Project

Build a pipeline using Jenkins and deploy the app to heroku

## Milestone 1: Set up

1: Fork and clone this [repo](https://github.com/jonnygovish/gallery)

2: Fork the project and go to the CLI

```bash
   git clone <repo-link>
```
3: Getting Started with MongoDB Atlas

To begin using MongoDB Atlas, you’ll need to do the following:

    Create a MongoDB Cloud account.
    Create a MongoDB Atlas cluster.
    Configure network access and create a cluster user.
    Connect to the cluster.

MongoDB Atlas has a free tier, so you won’t need any payment or credit card information. Here is the [link](https://www.mongodb.com/basics/mongodb-atlas-tutorial)

4: Once you have created a cluster and database user on MongoDB Atlas, update the __config.js_ file

## Milestone 2: Basic Pipeline

1: Open the clone project via Visual studio

2: Open the terminal in visual studio and type `npm install` to install packages in your local machine

3: Run the application using this command `npm start` on visual studio

4: On the terminal if the application runs smoothly the application will be listening at http://localhost:5000 

5: Add JenkinsFile in your project.Jenkins reads this file to determine the actions to run against the repository to build, test, or deploy. It is written using the declarative version of the Jenkins Pipeline DSL.

6: Add "MILESTONE 2" heading to the landing page `/views/index.ejs`

## Milestone 3: Tests

1: The repository has test branch

2: Switch the branch `git checkout test` and run using `npm install && npm test`. Test results should look like this

```

  > dark-room@1.0.0 test
  > mocha --exit

  Server is listening at http://localhost:5000

  1 passing (4s)
  ```

3: Add "MILESTONE 3" heading to the landing page `/views/index.ejs`

## Milestone 4: Slack integration with Jenkins

Note: Create a workspace then create slack channel called <YourFirstName>_IP1

1: In your Jenkins dashboard, click on Manage Jenkins from the left navigation.

2: Click on Manage Plugins and search for Slack Notification and global slack notifier in the Available tab. Click the checkbox and install the plugin.

3: After it's installed, click on Manage Jenkins again in the left navigation, and then go to Configure System. Find the Global Slack Notifier Settings section and add the following values:

  * Team Subdomain: <workspace name>
  * Integration Token Credential ID: Create a secret text credential using <token> as value

4: For each Project that you would like receive notifications for, choose Configure from the project's menu.

5: Then you'll need to add Slack Notifications to the Post-build Actions for this project.

6: In the Slack Notifications section, choose the events you'd like to be notified about. For example: Notify build etc

7: The message should include Build ID and deployment link for the site



    
