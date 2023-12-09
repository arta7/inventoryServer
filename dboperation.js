//var  config = require('./dbconfig');
// const mysql = require('mssql');
var  config = require('./dbconfig');
var sql = require('mssql');
 var mysql = require('mysql');





// Select Data 


async function GetUnits(res,response){
  
  try {
    let  pool = await  mysql.createConnection(config);
    // console.log('order.body.Mobile  : ',order.body)
    // var Password = order.body.Password ;
    // var Mobile = order.body.Mobile ;
     console.log('pool : ',pool)
    pool.connect(async function(err) {
      
      if (err) throw err;
      console.log("Connected!");
    })
    pool.query("call GetUnits()", function (err, result) {
      if (err) throw err;
      if(result.length > 0)
      {
        console.log('data :',result)
        response.send({ 'data': result[0]})
      }
      else
      {
        console.log('data :',[])
        response.send({ 'data': []})
      }
       
  });
  }
  catch (error) {
    response.send({ 'data': '500'})
    console.log('error get',error);
    return false;
  }



}
async function GetAllUsers(res,response){

  try {
    let  pool = await  mysql.createConnection(config);
    // console.log('order.body.Mobile  : ',order.body)
    // var Password = order.body.Password ;
    // var Mobile = order.body.Mobile ;
     console.log('pool : ',pool)
    pool.connect(async function(err) {
      
      if (err) throw err;
      console.log("Connected!");
    })
    pool.query("call GetAllUsers()", function (err, result) {
      if (err) throw err;
      if(result.length > 0)
      {
        console.log('data :',result)
        response.send({ 'data': result[0]})
      }
      else
      {
        console.log('data :',[])
        response.send({ 'data': []})
      }
       
  });
  }
  catch (error) {
    response.send({ 'data': '500'})
    console.log('error get',error);
    return false;
  }

}
async function GetFiscalYears(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetFiscalYears').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  try {
    let  pool = await  mysql.createConnection(config);
    // console.log('order.body.Mobile  : ',order.body)
    // var Password = order.body.Password ;
    // var Mobile = order.body.Mobile ;
     console.log('pool : ',pool)
    pool.connect(async function(err) {
      
      if (err) throw err;
      console.log("Connected!");
    })
    pool.query("call GetFiscalYears()", function (err, result) {
      if (err) throw err;
      if(result.length > 0)
      {
        console.log('data :',result)
        response.send({ 'data': result[0]})
      }
      else
      {
        console.log('data :',[])
        response.send({ 'data': []})
      }
       
  });
  }
  catch (error) {
    response.send({ 'data': '500'})
    console.log('error get',error);
    return false;
  }

}
async function GetGroupOfSets(res,response){
  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body.Mobile  : ',order.body)
     var GroupRef = order.body.GroupRef ;
     console.log('pool : ',pool)
    pool.connect(async function(err) {
      
      if (err) throw err;
      console.log("Connected!");
    })
    pool.query("call GetGroupOfSets(?)",GroupRef, function (err, result) {
      if (err) throw err;
      if(result.length > 0)
      {
        console.log('data :',result)
        response.send({ 'data': result[0]})
      }
      else
      {
        console.log('data :',[])
        response.send({ 'data': []})
      }
       
  });
  }
  catch (error) {
    response.send({ 'data': '500'})
    console.log('error get',error);
    return false;
  }

}
async function GetGroups(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetGroups').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
    pool.connect(async function(err) {
      
      if (err) throw err;
      console.log("Connected!");
    })
    pool.query("call GetGroups()", function (err, result) {
      if (err) throw err;
      if(result.length > 0)
      {
        console.log('data :',result)
        response.send({ 'data': result[0]})
      }
      else
      {
        console.log('data :',[])
        response.send({ 'data': []})
      }
       
  });
  }
  catch (error) {
    response.send({ 'data': '500'})
    console.log('error get',error);
    return false;
  }

}


async function GetProductsDocuments(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetProductsDocuments').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });
 // });
 let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body.Mobile  : ',order.body)
     var FiscalYearRef = order.body.FiscalYearRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetProductsDocuments(?)",FiscalYearRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}
  

}


async function GetProductsDocumentsWithId(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetProductsDocumentsWithId').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     response.send({ ' err data': err})
  //     console.log('Error test GetProductsDocumentsWithId : ',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var FiscalYearRef = order.body.FiscalYearRef ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetProductsDocumentsWithId(?,?)",[FiscalYearRef,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function GetSetsDocumentsWithId(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetSetsDocumentsWithId').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     response.send({ ' err data': err})
  //     console.log('Error test GetSetsDocumentsWithId : ',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var FiscalYearRef = order.body.FiscalYearRef ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetSetsDocumentsWithId(?,?)",[FiscalYearRef,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function GetSetsDocuments(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetSetsDocuments').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log('Error test',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var FiscalYearRef = order.body.FiscalYearRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetSetsDocuments(?)",FiscalYearRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

  

}


async function GetProductDocumentData(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
    
  //   request.input('DocumentsRef', order.body.DocumentsRef);
  //   request.execute('GetProductDocumentData').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     response.send({ ' err data': err})
  //     console.log('Error test',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var DocumentsRef = order.body.DocumentsRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetProductDocumentData(?)",DocumentsRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}



}


async function GetSetsDocumentData(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('DocumentsRef', order.body.DocumentsRef);
  //   request.execute('GetSetsDocumentData').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     response.send({ ' err data': err})
  //     console.log('Error test',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var DocumentsRef = order.body.DocumentsRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetSetsDocumentData(?)",DocumentsRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function GetParts(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetParts').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetParts()", function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetPosts(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetPosts').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetPosts()", function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetProducts(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetProducts').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetProducts()", function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetSets(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetSets').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetSets()", function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetStates(res,response){

  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.execute('GetStates').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });

  
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetStates()", function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetSetsOfProducts(res,response){
   let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('SetsRef', order.body.SetsRef);
  //   request.execute('GetSetsOfProducts').then(function(data, recordsets, returnValue, affected) {
  //     response.send({ 'data': data.recordset})
  //    console.log( 'data : ', data.recordset);
  //   }).catch(function(err) {
  //     console.log(err,'Error test');
  //   });
  // });


  try {
    let  pool = await  mysql.createConnection(config);
     console.log('pool : ',pool)
     var SetsRef = order.body.SetsRef;
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetSetsOfProducts(?)",SetsRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function GetUsersAccessParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('UserRef', order.body.UserRef);
  //   request.execute('GetUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var UserRef = order.body.UserRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetUsersAccessParts(?)",UserRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function GetPostsAccessParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('PostRef', order.body.PostRef);
  //   request.execute('GetPostsAccessParts').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var PostRef = order.body.PostRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetPostsAccessParts(?)",PostRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function GetKardex(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('ProductRef', order.body.ProductRef);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetKardex').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var ProductRef = order.body.ProductRef ;
     var FiscalYearRef = order.body.FiscalYearRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetKardex(?,?)",[ProductRef,FiscalYearRef], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function GetKardexSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('SetsRef', order.body.SetsRef);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('GetKardexSets').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log(err,'Error ');
  //   });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var SetsRef = order.body.SetsRef ;
     var FiscalYearRef = order.body.FiscalYearRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetKardexSets(?,?)",[SetsRef,FiscalYearRef], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}




async function GetUsersWithUsername(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Username', order.body.Username);
  //   request.execute('GetUsersWithUsername').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log(err,'Error ');
  //   });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Username = order.body.Username ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetUsersWithUsername(?)",Username, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function GetUsersWithUsernameandPass(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Username', order.body.Username);
  //   request.input('PassWord', order.body.PassWord);
  //   request.execute('GetUsersWithUsernameandPass').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': data.recordset})
  //   }).catch(function(err) {
  //    // response.send({ 'data ': err})
  //     console.log('Error ',err);
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Username = order.body.Username ;
     var PassWord = order.body.PassWord ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call GetUsersWithUsernameandPass(?,?)",[Username,PassWord], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

//Insert and Update 


async function AddFiscalYears(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddFiscalYears').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddFiscalYears(?,?,?)",[Title,Code,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddGroups(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddGroups').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddGroups(?,?,?)",[Title,Code,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.input('Active', order.body.Active);
  //   request.execute('AddParts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });
  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     var Active = order.body.Active ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddParts(?,?,?,?)",[Title,Code,Id,Active], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}
  

}
async function AddPosts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddPosts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //    response.send({ 'data': 'Success'})
  //   }).catch(function(err) {
  //     response.send({ 'data ': 'Error'})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddPosts(?,?,?)",[Title,Code,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Details', order.body.Details);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddSets').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Details = order.body.Details ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddSets(?,?,?,?)",[Title,Code,Details,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddStates(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('StateType', order.body.StateType);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddStates').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var StateType = order.body.StateType ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddStates(?,?,?,?)",[Title,Code,Id,StateType], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

  
}

async function AddUnits(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.execute('AddUnits').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddUnits(?,?,?)",[Title,Code,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddGroupOfSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('jsonData', order.body.jsonData);
  //   request.execute('AddGroupOfSets').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var jsonData = order.body.jsonData ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddGroupOfSets(?)",jsonData, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function AddSetsDocuments(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('jsonData', order.body.jsonData);
  //   request.execute('AddSetsDocuments').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var jsonData = order.body.jsonData ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddSetsDocuments(?)",jsonData, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function AddDocumentControls(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Code', order.body.Code);
  //   request.input('Type', order.body.Type);
  //   request.input('UserRef', order.body.UserRef);
  //   request.input('SecondUserRef', order.body.SecondUserRef);
  //   request.input('StatesRef', order.body.StatesRef);
  //   request.input('CurrentState', order.body.CurrentState);
  //   request.input('RegisterDate', order.body.RegisterDate);
  //   request.input('Date', order.body.Date);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.execute('AddDocumentControls').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': data.recordset})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Code = order.body.Code ;
     var Type = order.body.Type ;
     var UserRef = order.body.UserRef ;
     var SecondUserRef = order.body.SecondUserRef ;
     var StatesRef = order.body.StatesRef ;
     var CurrentState = order.body.CurrentState ;
     var RegisterDate = order.body.RegisterDate ;
     var Date = order.body.Date ;
     var FiscalYearRef = order.body.FiscalYearRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddDocumentControls(?,?,?,?,?,?,?,?,?)",
  [Code,Type,UserRef,SecondUserRef,FiscalYearRef,StatesRef,CurrentState,RegisterDate,Date], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function UpdateDocumentControls(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Code', order.body.Code);
  //   request.input('Type', order.body.Type);
  //   request.input('UserRef', order.body.UserRef);
  //   request.input('SecondUserRef', order.body.SecondUserRef);
  //   request.input('StatesRef', order.body.StatesRef);
  //   request.input('CurrentState', order.body.CurrentState);
  //   request.input('RegisterDate', order.body.RegisterDate);
  //   request.input('Date', order.body.Date);
  //   request.input('FiscalYearRef', order.body.FiscalYearRef);
  //   request.input('Id', order.body.Id);
  //   request.execute('UpdateDocumentControls').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': data.recordset})
  //    }).catch(function(err) {
  //      response.send({ 'data ': err})
  //      console.log('Error ',err);
  //    });
  // });

   let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Code = order.body.Code ;
     var Type = order.body.Type ;
     var UserRef = order.body.UserRef ;
     var SecondUserRef = order.body.SecondUserRef ;
     var StatesRef = order.body.StatesRef ;
     var CurrentState = order.body.CurrentState ;
     var RegisterDate = order.body.RegisterDate ;
     var Date = order.body.Date ;
     var FiscalYearRef = order.body.FiscalYearRef ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call UpdateDocumentControls(?,?,?,?,?,?,?,?,?,?)",
  [Code,Type,UserRef,SecondUserRef,FiscalYearRef,StatesRef,CurrentState,RegisterDate,Date,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function AddProductDocuments(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('jsonData', order.body.jsonData);
  //   request.execute('AddProductDocuments').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });
  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var jsonData = order.body.jsonData ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddProductDocuments(?)",jsonData, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function AddProducts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Title', order.body.Title);
  //   request.input('Code', order.body.Code);
  //   request.input('Id', order.body.Id);
  //   request.input('UnitRef', order.body.UnitRef);
  //   request.input('Active', order.body.Active);
  //   request.execute('AddProducts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Title = order.body.Title ;
     var Code = order.body.Code ;
     var Id = order.body.Id ;
     var UnitRef = order.body.UnitRef ;
     var Active = order.body.Active ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddProducts(?,?,?,?,?)",[Title,Code,Id,UnitRef,Active], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddSetsOfProduct(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   // request.input('ProductRef', order.body.ProductRef);
  //   // request.input('SetsRef', order.body.SetsRef);
  //   request.input('jsonData', order.body.jsonData);
  //   request.execute('AddSetsOfProduct').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': data})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var jsonData = order.body.jsonData ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddSetsOfProduct(?)",jsonData, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddUsers(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Username', order.body.Username);
  //   request.input('Password', order.body.Password);
  //   request.input('Id', order.body.Id);
  //   request.input('PostRef', order.body.PostRef);
  //   request.input('Active', order.body.Active);
  //   request.execute('AddUsers').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Username = order.body.Username ;
     var Password = order.body.Password ;
     var PostRef = order.body.PostRef ;
     var Active = order.body.Active ;
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddUsers(?,?,?,?,?)",[Username,Password,PostRef,Active,Id], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function ResetPassword(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Username', order.body.Username);
  //   request.input('Password', order.body.Password);
  //   request.execute('ResetPassword').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Username = order.body.Username ;
     var Password = order.body.Password ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call ResetPassword(?,?)",[Username,Password], function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function AddUsersAccessParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('jsonData', order.body.jsonData);
  //   // request.input('PartRef', order.body.PartRef);
  //   // request.input('TypeAccess', order.body.TypeAccess);
  //   request.execute('AddUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': data})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var jsonData = order.body.jsonData ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call AddUsersAccessParts(?)",jsonData, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


//Delete 

async function DeleteFiscalYear(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteFiscalYear').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteFiscalYear(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteGroupOfSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('GroupRef', order.body.GroupRef);
  //   request.execute('DeleteGroupOfSets').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var GroupRef = order.body.GroupRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteGroupOfSets(?)",GroupRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteGroups(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteGroups').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteGroups(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteParts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //    response.send({ 'data': 'Success'})
  //   }).catch(function(err) {
  //     response.send({ 'data ': 'Error'})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteParts(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeletePosts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeletePosts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //    response.send({ 'data': 'Success'})
  //   }).catch(function(err) {
  //     response.send({ 'data ': 'Error'})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeletePosts(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteProducts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteProducts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteProducts(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteSets').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteSets(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteSetsOfProduct(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('SetsRef', order.body.SetsRef);
  //   request.execute('DeleteSetsOfProduct').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //    response.send({ 'data': 'Success'})
  //   }).catch(function(err) {
  //     response.send({ 'data ': 'Error'})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var SetsRef = order.body.SetsRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteSetsOfProduct(?)",SetsRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteStates(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteStates').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteStates(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}



async function DeleteUnits(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteUnits').then(function(data, recordsets, returnValue, affected) {
  //    console.log( 'data ', data.recordset);
  //    response.send({ 'data': 'Success'})
  //   }).catch(function(err) {
  //     response.send({ 'data ': 'Error'})
  //     console.log(err,'Error ');
  //   });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteUnits(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteUsersAccessParts(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('PostRef', order.body.PostRef);
  //   request.execute('DeleteUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var PostRef = order.body.PostRef ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteUsersAccessParts(?)",PostRef, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}
async function DeleteUsersWithUsername(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Username', order.body.Username);
  //   request.execute('DeleteUsersWithUsername').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Username = order.body.Username ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteUsersWithUsername(?)",Username, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function DeleteDocumentControlsSets(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteDocumentControlsSets').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteDocumentControlsSets(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}

async function DeleteDocumentControls(res,response){


  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteDocumentControls(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}


async function DeleteDocumentControlsProduct(res,response){
  // let  order = { ...res }
  // var conn = new sql.ConnectionPool(config);
  // conn.connect().then(function(conn) {
  //   var request = new sql.Request(conn);
  //   request.input('Id', order.body.Id);
  //   request.execute('DeleteDocumentControlsProduct').then(function(data, recordsets, returnValue, affected) {
  //     console.log( 'data ', data.recordset);
  //     response.send({ 'data': 'Success'})
  //    }).catch(function(err) {
  //      response.send({ 'data ': 'Error'})
  //      console.log(err,'Error ');
  //    });
  // });

  let  order = { ...res }
  try {
    let  pool = await  mysql.createConnection(config);
     console.log('order.body  : ',order.body)
     var Id = order.body.Id ;
     console.log('pool : ',pool)
  pool.connect(async function(err) {
    
    if (err) throw err;
    console.log("Connected!");
  })
  pool.query("call DeleteDocumentControlsProduct(?)",Id, function (err, result) {
    if (err) throw err;
    if(result.length > 0)
    {
      console.log('data :',result)
      response.send({ 'data': result[0]})
    }
    else
    {
      console.log('data :',[])
      response.send({ 'data': []})
    }
     
});
}
catch (error) {
  response.send({ 'data': '500'})
  console.log('error get',error);
  return false;
}

}







  module.exports = {
    GetUnits:GetUnits,
    GetUsersAccessParts:GetUsersAccessParts,
    GetAllUsers:GetAllUsers,
    GetFiscalYears:GetFiscalYears,
    GetGroupOfSets:GetGroupOfSets,
    GetGroups:GetGroups,
    GetParts:GetParts,
    GetPosts:GetPosts,
    GetProducts:GetProducts,
    GetSets:GetSets,
    GetSetsOfProducts:GetSetsOfProducts,
    GetStates:GetStates,
    GetUsersWithUsername:GetUsersWithUsername,
    AddFiscalYears:AddFiscalYears,
    AddGroups:AddGroups,
    AddParts:AddParts,
    AddPosts:AddPosts,
    AddSets:AddSets,
    AddStates:AddStates,
    AddUnits:AddUnits,
    AddGroupOfSets:AddGroupOfSets,
    AddProducts:AddProducts,
    AddSetsOfProduct:AddSetsOfProduct,
    AddUsers:AddUsers,
    AddUsersAccessParts:AddUsersAccessParts,
    DeleteFiscalYear:DeleteFiscalYear,
    DeleteGroupOfSets:DeleteGroupOfSets,
    DeleteGroups:DeleteGroups,
    DeleteParts:DeleteParts,
    DeletePosts:DeletePosts,
    DeleteProducts:DeleteProducts,
    DeleteSets:DeleteSets,
    DeleteSetsOfProduct:DeleteSetsOfProduct,
    DeleteStates:DeleteStates,
    DeleteUnits:DeleteUnits,
    DeleteUsersAccessParts:DeleteUsersAccessParts,
    DeleteUsersWithUsername:DeleteUsersWithUsername,
    ResetPassword:ResetPassword,
    GetPostsAccessParts:GetPostsAccessParts,
    AddProductDocuments:AddProductDocuments,
    AddSetsDocuments:AddSetsDocuments,
    GetSetsDocuments:GetSetsDocuments,
    GetProductsDocuments:GetProductsDocuments,
    AddDocumentControls:AddDocumentControls,
    GetUsersWithUsernameandPass:GetUsersWithUsernameandPass,
    GetKardex:GetKardex,
    GetKardexSets:GetKardexSets,
    GetProductsDocumentsWithId:GetProductsDocumentsWithId,
    GetSetsDocumentsWithId:GetSetsDocumentsWithId,
    GetSetsDocumentData:GetSetsDocumentData,
    GetProductDocumentData:GetProductDocumentData,
    UpdateDocumentControls:UpdateDocumentControls,
    DeleteDocumentControlsSets:DeleteDocumentControlsSets,
    DeleteDocumentControlsProduct:DeleteDocumentControlsProduct,
    DeleteDocumentControls:DeleteDocumentControls



  }