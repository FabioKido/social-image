const admin = require('firebase-admin')

const path = require('path')
require("dotenv").config({
    path: path.join(__dirname, "../../.env")
  });

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

exports.db = admin.firestore();