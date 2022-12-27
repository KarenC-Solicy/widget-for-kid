This is a simple server for serving widget scripts.
It runs an express server on 3001 port
In order to run the server do following

1. Navigate to widget-scripts folder
2. run node server

The widget scripts are available in every application.

To have the widget in your app do the followings


1. Run the widget server
2. Run the next app
3. paste the following text in your document
   <a
           id="kidadvisor-bucketlist"
           data-kidadvisor="bucketlist"
           data-lang="en"
           href="http://localhost:3000/detail-for-ifram/f27fad28-6c88-48b9-a512-99a7522f1528"
       ></a>
   <script src="http://localhost:3001/index.js"></script>

You're done


Deployement:

1. Deploy widget-server project on someone domain
2. add <REACT_APP_SCRIPT_URL> variable in partner repository environments, it should be your script domain url (examle: https://example.com)
3. go to partner website, copy script and tag, add it some project and you will see widget