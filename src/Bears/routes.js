const { helloBear, createBear, getAllBears, getBearById, deleteBearById, updateBearById } = require("./BearController");

const bearRoutes = (server) => {
  server.get("/", helloBear);
  server.post('/api/bear', createBear);
  server.get('/api/bear', getAllBears);
  server.get("/api/bear/:id", getBearById);
  server.delete("/api/bear/:id", deleteBearById);
  server.put("/api/bear/:id", updateBearById);
};
module.exports = bearRoutes;
