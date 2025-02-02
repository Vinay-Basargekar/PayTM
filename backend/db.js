const moongoose = require('mongoose');

const dbURI =
	"mongodb+srv://vinaybasargekar13:%40Dahipeda6543@cluster0.4qlrh.mongodb.net/paytm?retryWrites=true&w=majority&appName=Cluster0";

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.error("Connection error", error));

const userSchema = moongoose.schema({
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

const User = moongoose.model("User", userSchema);

model.export = {
    User
};
