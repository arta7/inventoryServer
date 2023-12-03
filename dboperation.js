//var  config = require('./dbconfig');
// const mysql = require('mssql');
var  config = require('./dbconfig');
var sql = require('mssql');






// Select Data 


async function GetUnits(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetUnits').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetAllUsers(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetAllUsers').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetFiscalYears(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetFiscalYears').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetGroupOfSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('GroupRef', order.body.GroupRef);
    request.execute('GetGroupOfSets').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetGroups(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetGroups').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}


async function GetProductsDocuments(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetProductsDocuments').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}


async function GetProductsDocumentsWithId(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetProductsDocumentsWithId').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      response.send({ ' err data': err})
      console.log('Error test GetProductsDocumentsWithId : ',err);
    });
  });

}

async function GetSetsDocumentsWithId(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetSetsDocumentsWithId').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      response.send({ ' err data': err})
      console.log('Error test GetSetsDocumentsWithId : ',err);
    });
  });

}

async function GetSetsDocuments(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetSetsDocuments').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log('Error test',err);
    });
  });

}


async function GetProductDocumentData(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    
    request.input('DocumentsRef', order.body.DocumentsRef);
    request.execute('GetProductDocumentData').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      response.send({ ' err data': err})
      console.log('Error test',err);
    });
  });

}


async function GetSetsDocumentData(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('DocumentsRef', order.body.DocumentsRef);
    request.execute('GetSetsDocumentData').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      response.send({ ' err data': err})
      console.log('Error test',err);
    });
  });

}


async function GetParts(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetParts').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetPosts(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetPosts').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetProducts(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetProducts').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetSets(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetSets').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetStates(res,response){

  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.execute('GetStates').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetSetsOfProducts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('SetsRef', order.body.SetsRef);
    request.execute('GetSetsOfProducts').then(function(data, recordsets, returnValue, affected) {
      response.send({ 'data': data.recordset})
     console.log( 'data : ', data.recordset);
    }).catch(function(err) {
      console.log(err,'Error test');
    });
  });

}
async function GetUsersAccessParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('UserRef', order.body.UserRef);
    request.execute('GetUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log(err,'Error ');
    });
  });

}

async function GetPostsAccessParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('PostRef', order.body.PostRef);
    request.execute('GetPostsAccessParts').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log(err,'Error ');
    });
  });

}


async function GetKardex(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('ProductRef', order.body.ProductRef);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetKardex').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log(err,'Error ');
    });
  });

}

async function GetKardexSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('SetsRef', order.body.SetsRef);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('GetKardexSets').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log(err,'Error ');
    });
  });

}




async function GetUsersWithUsername(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Username', order.body.Username);
    request.execute('GetUsersWithUsername').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log(err,'Error ');
    });
  });

}

async function GetUsersWithUsernameandPass(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Username', order.body.Username);
    request.input('PassWord', order.body.PassWord);
    request.execute('GetUsersWithUsernameandPass').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': data.recordset})
    }).catch(function(err) {
     // response.send({ 'data ': err})
      console.log('Error ',err);
    });
  });

}

//Insert and Update 


async function AddFiscalYears(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.execute('AddFiscalYears').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddGroups(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.execute('AddGroups').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.input('Active', order.body.Active);
    request.execute('AddParts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddPosts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.execute('AddPosts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
     response.send({ 'data': 'Success'})
    }).catch(function(err) {
      response.send({ 'data ': 'Error'})
      console.log(err,'Error ');
    });
  });

}
async function AddSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Details', order.body.Details);
    request.input('Id', order.body.Id);
    request.execute('AddSets').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddStates(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('StateType', order.body.StateType);
    request.input('Id', order.body.Id);
    request.execute('AddStates').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddUnits(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.execute('AddUnits').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddGroupOfSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('jsonData', order.body.jsonData);
    request.execute('AddGroupOfSets').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}


async function AddSetsDocuments(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('jsonData', order.body.jsonData);
    request.execute('AddSetsDocuments').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}


async function AddDocumentControls(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Code', order.body.Code);
    request.input('Type', order.body.Type);
    request.input('UserRef', order.body.UserRef);
    request.input('SecondUserRef', order.body.SecondUserRef);
    request.input('StatesRef', order.body.StatesRef);
    request.input('CurrentState', order.body.CurrentState);
    request.input('RegisterDate', order.body.RegisterDate);
    request.input('Date', order.body.Date);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('AddDocumentControls').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': data.recordset})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}

async function UpdateDocumentControls(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Code', order.body.Code);
    request.input('Type', order.body.Type);
    request.input('UserRef', order.body.UserRef);
    request.input('SecondUserRef', order.body.SecondUserRef);
    request.input('StatesRef', order.body.StatesRef);
    request.input('CurrentState', order.body.CurrentState);
    request.input('RegisterDate', order.body.RegisterDate);
    request.input('Date', order.body.Date);
    request.input('FiscalYearRef', order.body.FiscalYearRef);
    request.execute('AddDocumentControls').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': data.recordset})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}


async function AddProductDocuments(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('jsonData', order.body.jsonData);
    request.execute('AddProductDocuments').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}


async function AddProducts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Title', order.body.Title);
    request.input('Code', order.body.Code);
    request.input('Id', order.body.Id);
    request.input('UnitRef', order.body.UnitRef);
    request.input('Active', order.body.Active);
    request.execute('AddProducts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddSetsOfProduct(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    // request.input('ProductRef', order.body.ProductRef);
    // request.input('SetsRef', order.body.SetsRef);
    request.input('jsonData', order.body.jsonData);
    request.execute('AddSetsOfProduct').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': data})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddUsers(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Username', order.body.Username);
    request.input('Password', order.body.Password);
    request.input('Id', order.body.Id);
    request.input('PostRef', order.body.PostRef);
    request.input('Active', order.body.Active);
    request.execute('AddUsers').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}

async function ResetPassword(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Username', order.body.Username);
    request.input('Password', order.body.Password);
    request.execute('ResetPassword').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function AddUsersAccessParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('jsonData', order.body.jsonData);
    // request.input('PartRef', order.body.PartRef);
    // request.input('TypeAccess', order.body.TypeAccess);
    request.execute('AddUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': data})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}


//Delete 

async function DeleteFiscalYear(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteFiscalYear').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteGroupOfSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('GroupRef', order.body.GroupRef);
    request.execute('DeleteGroupOfSets').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteGroups(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteGroups').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteParts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
     response.send({ 'data': 'Success'})
    }).catch(function(err) {
      response.send({ 'data ': 'Error'})
      console.log(err,'Error ');
    });
  });

}
async function DeletePosts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeletePosts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
     response.send({ 'data': 'Success'})
    }).catch(function(err) {
      response.send({ 'data ': 'Error'})
      console.log(err,'Error ');
    });
  });

}
async function DeleteProducts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteProducts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteSets(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteSets').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteSetsOfProduct(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('SetsRef', order.body.SetsRef);
    request.execute('DeleteSetsOfProduct').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
     response.send({ 'data': 'Success'})
    }).catch(function(err) {
      response.send({ 'data ': 'Error'})
      console.log(err,'Error ');
    });
  });

}
async function DeleteStates(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteStates').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteUnits(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Id', order.body.Id);
    request.execute('DeleteUnits').then(function(data, recordsets, returnValue, affected) {
     console.log( 'data ', data.recordset);
     response.send({ 'data': 'Success'})
    }).catch(function(err) {
      response.send({ 'data ': 'Error'})
      console.log(err,'Error ');
    });
  });

}
async function DeleteUsersAccessParts(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('PostRef', order.body.PostRef);
    request.execute('DeleteUsersAccessParts').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

}
async function DeleteUsersWithUsername(res,response){
  let  order = { ...res }
  var conn = new sql.ConnectionPool(config);
  conn.connect().then(function(conn) {
    var request = new sql.Request(conn);
    request.input('Username', order.body.Username);
    request.execute('DeleteUsersWithUsername').then(function(data, recordsets, returnValue, affected) {
      console.log( 'data ', data.recordset);
      response.send({ 'data': 'Success'})
     }).catch(function(err) {
       response.send({ 'data ': 'Error'})
       console.log(err,'Error ');
     });
  });

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
    GetProductDocumentData:GetProductDocumentData



  }