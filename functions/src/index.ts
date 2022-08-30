import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  const { name } = request.query;
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send(
    `Hello, with a little more '${name ?? "Sure, Not"}'. From Firebase!`
  );
});
