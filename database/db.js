const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Japnoor:Japnoor5402@cluster0.rcqpa.mongodb.net/bank?retryWrites=true&w=majority", { useNewUrlParser: true }, { useUnifiedTopology: true });


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

    name: "Rahul Sharma",
    emailId: "ahulsharma@gmail.com",
    currentbalance: 90000

});
const data6 = new Data({

    name: "Kiran Singh",
    emailId: "kiransingh@gmail.com",
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