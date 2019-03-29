module.exports = app => {
  app.post("/local", (req, res) => {
    console.log(req);
    res.send("hello");
  });
  app.get("/local", (req, res) => {
    res.send("hello");
  });
};
