import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import asyncHandler from 'express-async-handler';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ extended: true }));


// Define a custom error handling middleware
app.use((err, req, res, next) => {
	console.error(err); // Log the error for debugging purposes

	// Render a more descriptive error message as a JSON response
	res.status(503).json({ error: `An error occurred: ${err.message}` });
});

app.post('/api/calculate', async (req, res) => {
    
		// body of the request
		const body = req.body;

		console.log({ body })

		// Validate the body
		if(!body) {
			res.json({ 
				status: 'error', 
				message: 'Invalid request' 
			});
		}

		// Extract the values from the body
		const band1 = body['band-1'];
		const band2 = body['band-2'];
		const multiplier = body['band-3'];
		const tolerance = body['band-4'];
		

		// get values from db
		const band1Value = 1;
		const band2Value = 2;
		const multiplierValue = 3;
		const toleranceValue = 4;


		// Calculate the resistance
		const resistance = (parseInt(band1Value + band2Value) * parseInt(multiplierValue)).toString();
		const result = resistance + 'Ω ' + toleranceValue + '%';
  
    res.json({ status: 'success', data: result });
    
});



app.listen(process.env.BACKEND_SERVICE_PORT, () => {
    console.log(`Server started on port ${process.env.BACKEND_SERVICE_PORT}`);
});
  