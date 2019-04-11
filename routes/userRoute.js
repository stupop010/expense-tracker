module.exports = app => {
  app.post("/user/reg", async (req, res) => {
    console.log(req.body);
    res.send("hello");
  });
  // app.get("/user/reg", (req, res) => {
  //   console.log(req);
  //   res.send("hello");
  // });
};
