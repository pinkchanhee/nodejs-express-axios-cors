const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5500;

app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5501'],
}));

app.use(express.text());

let data = { message: '여러분 화이팅!' };

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/', (req, res) => {
  data.message = req.body;
  res.send(`받은 POST 데이터: ${req.body}`);
});

app.put('/', (req, res) => {
  data.message = req.body;
  res.send(`업데이트된 데이터: ${req.body}`);
});

app.delete('/', (req, res) => {
  data = {};
  res.send('데이터가 삭제되었습니다.');
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}/ 에서 실행 중입니다.`);
});