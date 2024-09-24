const express = require('express');
const app = express();
const port = 3000;

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
// const username = req.body.username;
// const password = req.body.password;

const {mw_session} = require('../mw/auth.mw');
app.use(mw_session);

const {mw_auth} = require('../mw/auth.mw');
app.post('/entrar', express.json(), mw_auth);

app.listen(port, () => {
  console.log(`[express] http://localhost:${port}`);
})
