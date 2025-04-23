/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const { algoliasearch } = require("algoliasearch");
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

// choose your index name
const index = client.initIndex("events");

exports.onEventWrite = functions.firestore
  .document("events/{eventId}")
  .onWrite(async (change, context) => {
    const data = change.after.exists ? change.after.data() : null;
    const objectID = context.params.eventId;

    if (data) {
      // prepare the record
      const record = {
        objectID,
        title: data.title,
        description: data.description,
        category: data.category,
        date: data.date.toDate().toISOString(),
        // …any other searchable fields
      };
      return index.saveObject(record);
    } else {
      // deleted
      return index.deleteObject(objectID);
    }
  });

exports.onEventDelete = functions.firestore
  .document("events/{eventId}")
  .onDelete((snap, context) => index.deleteObject(context.params.eventId));
