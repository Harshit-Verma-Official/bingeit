import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';

const host = process.env.HOST ?? '0.0.0.0';
const port = process.env.PORT ? Number(process.env.PORT) : 3003;

const app = express();

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/upload', upload.single('video'), async (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(
    __dirname,
    '../../../../../..',
    'uploads',
    req.file.originalname
  );

  try {
    await fs.move(tempPath, targetPath);
    res.send('File uploaded!');
  } catch (err) {
    console.error(`Error moving file: ${err}`);
    res.sendStatus(500);
  }
});

app.get('/videos/:filename', (req, res) => {
  const videoPath = path.join(
    __dirname,
    '../../../../../..',
    'uploads',
    req.params.filename
  );
  console.log({ videoPath });
  res.sendFile(videoPath);
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://localhost:${port}`);
});
