import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import asyncHandler from 'express-async-handler';
import cors from 'cors';
import bodyParser from 'body-parser';

import { PrismaClient } from '@prisma/client';
import { calculateResistance, calculateToleranceRange } from './utils';

const prisma = new PrismaClient();

const app = express();

app.use(
  cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`,
    optionsSuccessStatus: 200,
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Define a custom error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err); // Log the error for debugging purposes

  // Render a more descriptive error message as a JSON response
  res.status(503).json({ error: `An error occurred: ${err.message}` });
});

app.post('/api/calculate', async (req, res) => {
  const body = req.body;

  if (!body) {
    res.json({
      status: 'error',
      message: 'Invalid request',
    });
  }

  // get values from db
  const band1 = await prisma.code.findFirst({
    where: { name: body['band-1'] },
  });

  const band2 = await prisma.code.findFirst({
    where: { name: body['band-2'] },
  });

  const multiplier = await prisma.code.findFirst({
    where: { name: body['band-3'] },
  });

  const toleranceValue = await prisma.code.findFirst({
    where: { name: body['band-4'] },
  });

  if (!band1 || !band2 || !multiplier || !toleranceValue) {
    res.json({
      status: 'error',
      message: 'Invalid band value',
    });
  }

  // Calculate the resistance
  const resistance = calculateResistance([band1, band2, multiplier, toleranceValue]);
  const [minResistance, maxResistance] = calculateToleranceRange(resistance, toleranceValue?.tolerance ?? 0);

  const output = {
    resistance: resistance,
    tolerance: toleranceValue?.tolerance ?? 0,
    minResistance,
    maxResistance,
  };

  console.log(output);

  res.json({ status: 'success', data: output });
});

app.listen(process.env.BACKEND_SERVICE_PORT, () => {
  console.log(`Server started on port ${process.env.BACKEND_SERVICE_PORT}`);
});
