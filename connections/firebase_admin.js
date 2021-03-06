var admin = require("firebase-admin");

var serviceAccount = {
  type: process.env.TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCguVc+FLi22DL8\nFT9cQ0U1uWn1xkY3/Kkxo6ccw2yrUg3amkkVSxAtNnJh4ZhD5umLUYgQ9NwSF1OZ\n+zkPjZxgsQ6rgVFcyY+xbREmJhX3Z5JHPYhu/tjIdAZFngRWB6pquXVLnDEfezJG\nqeI+6xB0Zzwie7OPGqEKWmrFm2Les4RJaUKwLl2s5PU/1PXkufvszHp4FTtyQHPm\nRM163agK5hs9Aa2FcrSVw5rkQJkefxehOUgEMnFPRSwW35FnlYpSk3AN5A+EDR6v\nZPuyHkwHaPgaRPxt2Dk92T4QcLdHCKeyofpU4JgVs6Fy8wIH0vEMFyCa+CYO6N7T\nR+j+YgC1AgMBAAECggEAAmSYCa7VzDUeVzX6xkUjIehjjTr5PyqmGzzYR1uagdd8\nKNHMvkIqmL27iL0K3xHwTrh1SelXYHaT8lI0+IgPeLoSIZgQjczbdJUO4Q5Gm/Mh\nEKn4HszxDdT6Ze1zG5PMJAAkYK6P5avYJQiw+2ZVDaKe2NWWKA6JsMWFWvFUEMQ9\n7LrQSrlhvTA6TAjbB50qi1Mtg7GeZjj9krwjwOchUKxvGBb5pD/xF+FJjW8Ld9lM\nUgyHW50EfRSfmAOKFQzX3TTbaaLsAh7NKGhGRXzu6powuDbcb/nf5gVYfGRBmvwH\ny40qRKcBJlqFG4J6wDfxn/hCZmz8i4oEpEJWN6t/gQKBgQDONg+krEOPlGXfYeUX\nCC60f/zCkQ1/p573UpDvdY0gFAbOmdrMHjv2V7NVy8qHeLG7WijWcqXYd5/q5mKN\nTlbuKoOcWaV8BCnpxYiLQTi8/1hmFUVzvRkwRcRVGpdeBtAEI34QY89W/6QHXaia\niRwdntgHn3h6F0d760r0EFn8NQKBgQDHh7X2jXsMY2jaoqsuKyLAcSXQuri88rxN\nGIiD0pP3dEgbxCAx9Hlb1nY3IeF3aBPCo5YkQ/z+FqYPw4Ho/HhJXj9Ihci8z3+y\nyuuLMtwjhOvSIGTU4kA3PONBk5itVyRt4nNkL06RVzajdHCTQe0cQUP8RVFfWc2M\nBjski/uCgQKBgQCryePMVupNwd4Ac6iLQHjQTFOAr6CkOTs4ZSNzKeXw1F47XXcm\nVwWzGqq/DfBiXY0LPHgK9yXsqPOjmFx/xcSr0uUjqpcvMrTMGJDBGguvf7XgDVZ3\nrhA+49BE6csyPNCssfjCpLPFkWDP9hmQ7CptDrh/2T1f0ObveDxQCRM+BQKBgH0f\nHDtdI0F0gUdBZMkR4bv9+DG5Nam/KdfKv6iyf3lYoPNQfMP2w7eUeBNAmsuvJ10S\nCk/5loebmk0eU7PPxnpzsImA442LLU/oMebbYPKhIuRkzfY1XwGEnBn+PWrNz5lc\nvPGhPMqlfyznEsU1PURPpRtoOIvrm5roOWREp9aBAoGALw8sm8AjZGzXlZ2RM9nV\n255g9NonkicYlcRjRD857AtmECStT+d83YKcCSiJyjNTnseW14yThNlO7Bc7nZIU\ntxQ7308oAxSJMzevxP9TbuGnamTCuRmPTMZjkNFYuEj5FZ213dHhgiVYYrL6OjeO\n9QNb89iF5lZnBYljeTRhWxI=\n-----END PRIVATE KEY-----\n",
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X599_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X599_CERT_URL,
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://overture-1b7b5.firebaseio.com"
});

var firebaseDB = admin.database();

module.exports = firebaseDB;