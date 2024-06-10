const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
 *  the frontend application to interact as planned with the api server
 */
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors());

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require("./server/api");
const {
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  createMeeting,
  deleteFromDatabasebyId,
  getAllFromDatabase
} = require("./server/db");

app.use("/api", apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}.`);
  });
}

// First set of routes

apiRouter.get("/minions", (req, res, next) => { 
  const getMinions = getAllFromDatabase("minions");
  getMinions.length > 0 ? res.send(getMinions) : res.status(404).send();
});

apiRouter.post("/minions", (req, res, next) => {
  const newMinion = addToDatabase("minions", req.body);
  newMinion ? res.status(201).send(newMinion) : res.status(400).send();
});

apiRouter.get("/minions/:minionId", (req, res, next) => {
  const getMinion = getFromDatabaseById("minions", Number(req.params.minionId));
  getMinion ? res.send(getMinion) : res.status(404).send();
});

apiRouter.put("/minions/:minionId", (req, res, next) => {
  req.body.id = Number(req.params.minionId);
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  updatedMinion ? res.send(updatedMinion) : res.status(404).send();
});

apiRouter.delete("/minions/:minionId", (req, res, next) => {
  const deletedMinion = deleteFromDatabasebyId("minions", Number(req.params.minionId));
  deletedMinion ? res.status(204).send() : res.status(404).send();
});

// Second set of routes

apiRouter.get("/ideas", (req, res, next) => {
  const getIdeas = getAllFromDatabase("ideas");
  getIdeas.length > 0 ? res.send(getIdeas) : res.status(404).send();
});

apiRouter.post("/ideas", (req, res, next) => {
  const newIdea = addToDatabase("ideas", req.body);
  newIdea ? res.status(201).send(newIdea) : res.status(400).send();
});

apiRouter.get("/ideas/:ideaId", (req, res, next) => {
  const getIdea = getFromDatabaseById("ideas", Number(req.params.ideaId));
  getIdea ? res.send(getIdea) : res.status(404).send();
});

apiRouter.put("/ideas/:ideaId", (req, res, next) => {
  req.body.id = Number(req.params.ideaId);
  const updatedIdea = updateInstanceInDatabase("ideas",req.body);
  updatedIdea ? res.send(updatedIdea) : res.status(404).send();
});

apiRouter.delete("/ideas/:ideaId", (req, res, next) => {
  const deletedIdea = deleteFromDatabasebyId("ideas", Number(req.params.ideaId));
  deletedIdea ? res.status(204).send() : res.status(404).send();
});

// Third set of routes

apiRouter.get("/meetings", (req, res, next) => {
  res.send(getAllFromDatabase("meetings"));
});

apiRouter.post("/meetings", (req, res, next) => {
  const newMeeting = createMeeting();
  newMeeting ? res.status(201).send(newMeeting) : res.status(400).send();
});

apiRouter.delete("/meetings", (req, res, next) => {
  deleteAllFromDatabase("meetings");
  res.status(204).send();
});

// NEED TO DO THE TESTING BITS