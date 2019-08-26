const Next = require("next");
const fastify = require("fastify")();
const fetch = require("isomorphic-unfetch");
const bodyParser = require("fastify-formbody");
const routes = require("./routes/routes");
const mysql = require("./db/dbUtils");

const PORT = 8080;
const dev = process.env.NODE_ENV !== "production";

const POST_CALL_CONFIG = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
};

const logger = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.method, req.url);
  next();
};

fastify.register(bodyParser);
fastify.use(logger);
fastify.register((plugin, options, next) => {
  const app = Next({ dev });
  const handler = routes.getRequestHandler(app);

  app
    .prepare()
    .then(() => {
      plugin.get("/*", async (req, reply) => {
        handler(req.req, reply.res);
        reply.sent = true; // eslint-disable-line no-param-reassign
      });

      next();
    })
    .catch(err => next(err));
});

fastify.post("/addQuote", async (req, res) => {
  const { quote } = req.body;
  const { isSucess } = await mysql.insertQuery("quotes", `${quote}`);
  res.redirect("/");
});

fastify.get("/quotes", async (req, res) => {
  const quotes = await mysql.selectQuery("quotes");
  res.send(JSON.stringify(quotes));
});

const start = () => {
  fastify.listen(PORT, "0.0.0.0", () =>
    // eslint-disable-next-line no-console
    console.log(`App Server is running on ${PORT}`)
  );
};

start();
