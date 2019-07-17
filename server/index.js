require('dotenv').config()
const express = require('express');
const massive = require('massive');
const session = require('express-session');


// const AuthCtrl = require('./Controller/AuthCtrl')


const app = express();


const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// middleware
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log("breathe in breathe out")
})
