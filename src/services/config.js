const admin = require('firebase-admin')

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function storeCollection() {
    result = await db.collection('templates').doc('testtest').set({
        body: "test",
        styles: "test"
    });

    console.log(result);
}

storeCollection()
// exports.db = admin.firestore();