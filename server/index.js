const express = require('express');
const app = express();

app.use(express.json());

let data = [];

app.get('/records', (req, res) => {
  res.json(data);
});

app.post('/records', (req, res) => {
  const record = { id: Date.now(), ...req.body };
  data.push(record);
  res.json(record);
});

app.delete('/records/:id', (req, res) => {
  data = data.filter(r => r.id != req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running'));
