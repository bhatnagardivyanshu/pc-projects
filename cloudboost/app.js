const express 		= require('express');
const jwt 			= require('jsonwebtoken');
const jsonpatch 	= require('jsonpatch');
const bodyParser	= require('body-parser');
const request 		= require('request');
const fs 			= require('fs');
const jimp 			= require('jimp');
		
const app 			= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({
		message: "welcome user"
	});
});

// function to verify token
const verifyToken = (req, res, next) => {
	const bearerHeader = req.headers['authentication'];
	if(typeof bearerHeader !== "undefined"){
		const token = bearerHeader.split(' ')[1];
		req.token = token;
	}else{
		res.status(401).json({
			message: "You are not authorized to perform this action."
		});
	}
	next();
}

// get token
app.post('/login', (req, res) => {
	const uname = req.body.username;
	const pwd = req.body.password;

	if(uname && pwd){
		const user = {
			username: uname,
			password: req.body.password
		}
		jwt.sign({user}, "mySecretKey", {"expiresIn": "2d"}, (err, token) => res.json({token}))
	}else{
		res.status(502).json({
			message: 'Username and Password are required fields'
		})
	}
})

// post data with token received in the previous step and retrieve the data hidden in the token
app.post('/post', verifyToken, (req, res) => {
	jwt.verify(req.token, 'mySecretKey', (err, decoded) => {
		if(err){
			res.status(403).json({
				message: err.message
			});
		}else{
			res.json(decoded);
		}
	})
})

// pass url of the image to get a resized image back
app.post('/image', (req, res) => {
	// validate token
	const url = req.body.url;
	const downloadStream = request(url).pipe(fs.createWriteStream('./output.jpg'));
	downloadStream.on('finish', () => {
		jimp.read('./output.jpg', (err , img) => {
			img.resize(200, 200).write('./final.jpg');
		});
		res.sendFile(__dirname+'/final.jpg');
	})
})

// 
app.post('/patch', verifyToken, (req, res) => {
	if(req.token ){
		jwt.verify(req.token, 'mySecretKey', (err, decoded) => {
			if(err){
				res.status(403).json({
					message: err.message
				});
			}else{
				const json = JSON.parse(req.body.json);
				const jsonPatch = JSON.parse(req.body.jsonPatch);

				try{
					res.json(jsonpatch.apply_patch(json, jsonPatch));
				}catch(e){
					res.status(400).json({
						message: e.message
					})
				}
			}
		})
	}else{
		res.status(402).json({
			message: 'access token required'
		})
	}
})

// app.post('/testjson', (req, res) => {
// 	const json = req.body.json;
// 	const jsonPatch = req.body.jsonPatch;
// 	// res.json(req.body);
// 	if(typeof json === "object" && typeof jsonPatch === "object"){
// 		res.json(jsonpatch.apply_patch(json, jsonPatch));
// 	}
// })


// app.post('/newImage', (req, res) => {
// 	jimp.read('./output.jpg', (req2, res2) => {
// 		res2.resize(200, 200).write('./final.jpg');
// 	});
// 	res.sendFile(__dirname+'/final.jpg');
// })


app.listen(process.env.port || 4000, (err) => console.log("Listening to port 4000"));


