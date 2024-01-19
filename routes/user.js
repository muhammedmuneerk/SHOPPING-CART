var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Readmi not 9",
      category:'Mobile',
      description:"This is my phone",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQkSCABtpRMX5Cux08ChK1QFL5iQqxm_FE9Gf_KW5jdONgPMJZ6ghJT2OYSfqG0XP2J1mxsTFc75we4nWbr7GJa6wxdPcU7"
    },
    {
      name:"Readmi not 9 pro max",
      category:'Mobile',
      description:"This is a pro level phone",
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQVmWfx5e4lzNNeBqeUHNeCydiED_kmmc8BBf9xy-rBYjytzgGMjBStzQ6Ax1cVDantstLqHobLSUCasqeLu0laXO4lXHhc"
    },
    {
      name:"Realmi 7",
      category:'Mobile',
      description:"This is a smooth phone",
      image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSrPIeo7CgTYh3o715rozIhTzijN-nv369hYp09sf5uzrFwT7aalrH90KJnn8RIQVEGdKvQGZOgkN57Z_flF74ALetxkC_9fw"
    },
    {
      name:"realmi 7 pro",
      category:'Mobile',
      description:"This is a gaming phone",
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTX-n38kkQ4UaQ8dPNikM-unXDkVWqP4FQyzWY2THL_m_xN5UHkyUwAJbQqIP_CLy_3Purw3a41jsaquvPBeezgjKlkdCtx"
    },
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
