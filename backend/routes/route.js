const express = require("express");
const router = express.Router();
const Startup = require("../schema/Startup");
const Investor = require("../schema/Investor");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024*1024*5,
  },
});
router.get("/getStartup", async(req, res) => {
  const startups = await Startup.find();
  console.log(startups);
  res.json(startups);
});

router.get('/getStartupId/:id', async(req,res)=>{
  console.log(req.params.id)
  const id = req.params.id;
  const company= await Startup.findById(id);
  res.json(company);
});

router.post(
  "/addstartup",
  upload.single("companyCertificate"),
  async (req, res) => {
    await new Startup(req.body).save((err, data) => {
      if (err) {
        console.log("error in deleting", err);
      } else {
        res.json({
          status: "Added successfully",
          data,
        });
      }
    });
  }
);

router.put("/updateStartup/:id", async (req, res) => {
  const id = req.params.id;
  await Startup.findByIdAndUpdate(id, { $set: req.body }, (err, data) => {
    if (err) {
      console.log("error in updating", err);
    } else {
      res.json({
        status: "updated successfully",
        data,
      });
    }
  });
});

router.get("/deleteAll", async (req, res) => {
  await Startup.deleteMany({}).then(() => {
    res.json({
      status: "deleted successfully",
    });
  });
});
//1 1s
//3 2s
//6 3s
//9 4s
//9> 5s
router.post("/message/:id", async (req, res) => {
  const id = req.params.id;
  // var ratingObj = { rating: 0 };
  // let messagesLength = 0;
  // Startup.findById(id, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     messages = data.messages;
  //     // console.log("come", messages, messages.length);
  //     console.log("mes", data);
  //   }
  // });
  Startup.findByIdAndUpdate(
    id,
    { $push: { messages: req.body.messages } },
    { upsert: true, new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        messagesLength = data.messages.length;
        res.json({
          status: "success",
          data,
        });
      }
    }
  );
  // console.log("msg length", messagesLength);
  // if (messagesLength > 1 && messagesLength < 3) {
  //   ratingObj.rating = 2;
  // } else if (messagesLength >= 3 && messagesLength < 6) {
  //   ratingObj.rating = 3;
  // } else if (messagesLength >= 6 && messagesLength < 9) {
  //   ratingObj.rating = 4;
  // } else if (messagesLength > 9) {
  //   ratingObj.rating = 5;
  // }
  // console.log("rating", ratingObj);
});

router.delete("/delete/:id", async (req, res) => {
  let postID = req.params.id;
  await Startup.deleteOne({ _id: postID }, (err, data) => {
    if (err) {
      res.send("error", err);
    } else {
      res.status(200).json({
        status: "deleted",
      });
    }
  });
});

router.post("/login", async (req, res) => {
  let company = await Startup.findOne(req.body, (err, data) => {
    if (err) {
      res.send(`Wrong email or Password`);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
router.post("/investorRegister", async (req, res) => {
  let phone_no = req.body.phoneNo;
  console.log(phone_no);
  if (phone_no.length !== 10) {
    res.send("Enter a valid number");
  } else {
    await new Investor(req.body).save((err, data) => {
      if (err) {
        res.send("Phone Number already exists");
      } else {
        res.json({
          status: "sucess",
          data,
        });
      }
    });
  }
});

router.post("/investorLogin", async (req, res) => {
  let phoneNo = req.body.phoneNo;
  let password = req.body.password;
  let investor = Investor.findOne(phoneNo, (err, data) => {
    if (err) {
      res.send("phone number Not Found");
    } else {
      investor.findOne(password, (err, data) => {
        if (err) {
          res.send("Incorrect Password");
        } else {
          res.json(investor);
        }
      });
    }
  });
});
module.exports = router;
