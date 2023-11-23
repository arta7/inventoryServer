
var  Db = require('./dboperation');
// var  Order = require('./Order');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
// const sql = require('mssql')



var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use('/api', router);

router.use((request, response, next) => {
    try
    {
    console.log('middleware');
    next();
    }
    catch(error)
    {
        console.log('response : ',response.status(400).json(null))
        console.log(error)
    }
})
   
  router.route('/GetUnits').post((request, response) => {
    Db.GetUnits(request, response).then((data) => {
      
      console.log('data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
       // response.send({"error": error});
    })
  })



  router.route('/GetProductsDocuments').post((request, response) => {
    Db.GetProductsDocuments(request, response).then((data) => {
      
      console.log('data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
       // response.send({"error": error});
    })
  })

  router.route('/GetSetsDocuments').post((request, response) => {
    Db.GetSetsDocuments(request, response).then((data) => {
      
      console.log('data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
       // response.send({"error": error});
    })
  })


  router.route('/GetAllUsers').post((request, response) => {
    Db.GetAllUsers(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })

  router.route('/GetFiscalYears').post((request, response) => {
    Db.GetFiscalYears(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })

  router.route('/GetGroupOfSets').post((order,request, response) => {
    Db.GetGroupOfSets(order,request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })

  router.route('/GetGroups').post((request, response) => {
    Db.GetGroups(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })


  router.route('/GetParts').post((request, response) => {
    Db.GetParts(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })

  router.route('/GetPosts').post((request, response) => {
    Db.GetPosts(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })



  router.route('/GetProducts').post((request, response) => {
    Db.GetProducts(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })


  
  router.route('/GetSets').post((request, response) => {
    Db.GetSets(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })


  router.route('/GetStates').post((request, response) => {
    Db.GetStates(request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })

  router.route('/GetSetsOfProducts').post((order,request, response) => {
    Db.GetSetsOfProducts(order,request, response).then((data) => {
      
      console.log('response',response,'data : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
        response.send({"error": error});
    })
  })



  router.route('/GetPostsAccessParts').post((order,request, response) => {
    Db.GetPostsAccessParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/GetUsersAccessParts').post((order,request, response) => {
    Db.GetUsersAccessParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/GetUsersWithUsername').post((order,request, response) => {
    Db.GetUsersAccessParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/AddFiscalYears').post((order,request, response) => {
    Db.AddFiscalYears(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddProductDocuments').post((order,request, response) => {
    Db.AddProductDocuments(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddSetsDocuments').post((order,request, response) => {
    Db.AddSetsDocuments(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })



  router.route('/AddGroups').post((order,request, response) => {
    Db.AddGroups(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/AddParts').post((order,request, response) => {
    Db.AddParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddPosts').post((order,request, response) => {
    Db.AddPosts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddSets').post((order,request, response) => {
    Db.AddSets(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddStates').post((order,request, response) => {
    Db.AddStates(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/AddUnits').post((order,request, response) => {
    Db.AddUnits(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddGroupOfSets').post((order,request, response) => {
    Db.AddGroupOfSets(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddProducts').post((order,request, response) => {
    Db.AddProducts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/AddSetsOfProduct').post((order,request, response) => {
    Db.AddSetsOfProduct(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/AddUsers').post((order,request, response) => {
    Db.AddUsers(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/ResetPassword').post((order,request, response) => {
    Db.ResetPassword(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })



  router.route('/AddUsersAccessParts').post((order,request, response) => {
    Db.AddUsersAccessParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/DeleteFiscalYear').post((order,request, response) => {
    Db.DeleteFiscalYear(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/DeleteGroupOfSets').post((order,request, response) => {
    Db.DeleteGroupOfSets(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteGroups').post((order,request, response) => {
    Db.DeleteGroups(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/DeleteParts').post((order,request, response) => {
    Db.DeleteParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeletePosts').post((order,request, response) => {
    Db.DeletePosts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteProducts').post((order,request, response) => {
    Db.DeleteProducts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })

  router.route('/DeleteSets').post((order,request, response) => {
    Db.DeleteSets(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteSetsOfProduct').post((order,request, response) => {
    Db.DeleteSetsOfProduct(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteStates').post((order,request, response) => {
    Db.DeleteStates(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteUnits').post((order,request, response) => {
    Db.DeleteUnits(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteUsersAccessParts').post((order,request, response) => {
    Db.DeleteUsersAccessParts(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })


  router.route('/DeleteUsersWithUsername').post((order,request, response) => {
    Db.DeleteUsersWithUsername(order,request, response).then((data) => {
      
      console.log('response',response,'data1 : ',data)
    }).catch((error)=>{
        console.log('response2 : ',error)
         response.send({"error": error});
    })
  })



   
  var port = 8090;
  app.listen(port);
  console.log('Order API is runnning at ' + port);