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
const Data = mongoose.model("Data", dataSchema);
const Tran = mongoose.model("Tran", tranSchema);