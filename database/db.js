const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Japnoor:Japnoor5402@cluster0.rcqpa.mongodb.net/baue&w=majority", { useNewUrlParser: true }, { useUnifiedTopology: true });

const Data = mongoose.model("Data", dataSchema);
const Tran = mongoose.model("Tran", tranSchema);

const data1 = new Data({
    name: "Miguel Mcgowan",
    emailId: "miguelmcgowen@gmail.com",
    currentbalance: 50000

});
const data2 = new Data({

    name: "Theo Buck",
    emailId: "theobuck@gmail.com",
    currentbalance: 30000

});
const data3 = new Data({

    name: "John Doe",
    emailId: "johndoe@gmail.com",
    currentbalance: 30000

});
const data4 = new Data({

    name: "Ravi Dubey",
    emailId: "ravidubey@gmail.com",
    currentbalance: 80000

});
const data5 = new Data({

    name: "Rohit Sharma",
    emailId: "rohitsharma@gmail.com",
    currentbalance: 89000

});
const data6 = new Data({

    name: "Arshnoor Singh",
    emailId: "arshnoorsingh@gmail.com",
    currentbalance: 40000

});
const data7 = new Data({

    name: "Samiksha Sharma",
    emailId: "samikhasharma@gmail.com",
    currentbalance: 30000

});
const data8 = new Data({

    name: "Mahira Arora",
    emailId: "mahiraarora@gmail.com",
    currentbalance: 70000

});
const data9 = new Data({

    name: "Vikas Tyagi",
    emailId: "vikastyagi8@gmail.com",
    currentbalance: 90000

});
const data10 = new Data({

    name: "Karma Tripathi",
    emailId: "karmatripathi@gmail.com",
    currentbalance: 60000

});

const defaultData = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10];

const dbConn = mongoose.connection;

dbConn.on("error", console.error.bind(console, "Connection Error"));
dbConn.on("open", function () {
    console.log("DB Connection Successful");
});

// module.exports = dbConn;