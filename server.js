import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles, authenticateRequest} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // Filtering images endpoint
  app.get("/filteredimage", authenticateRequest, async (req, res) => {
    const { image_url } = req.query;
    if (!image_url) {
      return res.status(400).send("Image URL is invalid");
    }

    try {
      const filteredImagePath = await filterImageFromURL(image_url);

      res.sendFile(filteredImagePath, (error) => {
        if (error) {
          console.error(error);
          res.status(500).send("Error while sending image");
        }

        try {
          deleteLocalFiles([filteredImagePath]);
        } catch (deleteFileError) {
          console.error("Error while deleting image:", deleteFileError);
        }
      });
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(422).send("Unable to process the image");
    }
  });
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
