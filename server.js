const express = require("express");

//const {clog} = require;

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: "SECRET",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
};


app.use(clog);

app.use(session(sess));
app.engine('react')

app.listen(PORT, () =>
  console.log(`Now listening on port: ${PORT}`));