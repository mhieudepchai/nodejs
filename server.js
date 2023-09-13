const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const api = require("./routes/api");
const app = express();
const rateLimit = require("express-rate-limit");
const getIP = require('ipware')().get_ip;
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 500, // limit each IP to max requests per windowMs
    message: {
        error: "Bạn đã đặt giới hạn lượt yêu cầu 500/1p"
    }
});
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/", api);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});
// const uri = "mongodb+srv://Disryter123:Disryter123@cluster0.dppma.mongodb.net/databot?retryWrites=true&w=majority";

(async () => {
  // await mongoose.connect(uri, {
  //   useUnifiedTopology: true,
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  // });
  app.listen(process.env.PORT || 80);
  
  const chalk = require('chalkercli');
  const rainbow = chalk.rainbow(`1`
  );
})();
