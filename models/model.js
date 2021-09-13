
//Schema 
const dataSchema = new mongoose.Schema({
    name: String,
    emailId: String,
    currentbalance: Number
});
const tranSchema = new mongoose.Schema({
    from: String,
    to: String,
    amount: Number,
    ts: Date
});