const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');


const app = express();

app.set('port', process.env.PORT || 5000);





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/login", (req, res) => {
  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    const users = parsedData.users;
    users.map((user) => {
      if (user.username === req.body.username) {
        if(user.password === req.body.password) {
          res.json({
            isAuthenticated: true,
            user: user.username
          })
        }
      }
    })
  })
  res.json({msg: 'You are logging in a user'})
});






app.listen(app.get('port'), () => {
  console.log(`You are listening on port ${app.get('port')}`)
})
