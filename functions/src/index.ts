import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    const { name } = request.query;
    functions.logger.info("Hello logs!", { structuredData: true });

    const result = await admin.firestore().collection("people").add({ name });

    response.send(
      `Hello, with a little more '${name ?? "Sure, Not"}'. Your id is ${
        result.id
      }!`
    );
  }
);
