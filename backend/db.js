const mongoose = require("mongoose");

const dbURI =
	"mongodb+srv://vinaybasargekar13:%40Dahipeda6543@cluster0.4qlrh.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", false);

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.error("Connection error", error));

const userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minLength: 3,
		maxLength: 30,
	},
	password: {
		type: String,
		required: true,
		minLength: 6,
	},
	firstName: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
		maxLength: 50,
	},
});

// const user = new User({
// 	username:"vinay1304",
// 	password:"@Vinay13",
// 	firstName:"vinay",
// 	lastName:"Basargekar",
// });

// user.save().then( res => {
// 	console.log('Hello connected');
// 	mongoose.connection.close()
// })

const accountSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId, // Reference to User model
		ref: "User",
		required: true,
	},
	balance: {
		type: Number,
		required: true,
	},
});

const Account = mongoose.model("Account", accountSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
	User,
	Account,
};
