import fastify from "fastify"

function build(opts = {}) {
  // create fastify app,  with default settings
  const app = fastify(opts);

  app.get("/", (req, reply) => {
    reply.code(200).send({
      success: true,
      result: "Hello, World",
      message: "Hello, World",
    });
  });


  // then register, atleast one route (for now),
  // and then return app
  return app;
}

// ES module export
export default build

// bcz creating a fastify application, and running the server - both are different things.   we can create a fastify app, and then run it in a different file.  or  we can create a fastify app, and then run it in the same file.  it's  up to you.  but in this case, we're just creating a fastify app, and  then returning it.  so that we can use it in another file.  or  we can  run it in the same file, if we want to.  it's up to you.




// for this, we will simply run our test cases, to test these to different things.
// - creating our fastify application
// - running the server