const  config = {
    user:  'sa', // sql user
    password:  '1234', //sql user password
    server:  '192.168.0.9', // if it does not work try- localhost
    database:  'ToolsApp',
    options: {
        encrypt: false,
        trustServerCertificate: true,
      instancename:  'barcod'  // SQL Server instance name
    },
    //port:  1433
    // host     : 'esme.iran.liara.ir',
    // user     : 'root',
    // password : 'lcxZXpiKuuOHTU2rkjz52odQ',
    // port: 33270,
    // database:'Management'
  }
  
  module.exports = config;