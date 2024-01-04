const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql2');
const app = express();

app.use(cors());
app.use(bodyparser.json());


//connect to mysql database

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'userinfo',
    port:3306
});
//check database 
db.connect(err =>{
    if(err) {console.log('err')};
    console.log('Database connected successfully !!!');
    
})


//get all users

app.get('/users',(req,res)=>{
//   console.log('Get All Users');
   let qrr= `SELECT * FROM users`;
   db.query(qrr,(err,results)=>{
    if(err)
    {
        console.log(err,'err');
    }
    if(results.length>0){
        res.send({
            message:'All users Data', 
            data:results
        });  
    };

});
});
// get single user by id

app.get('/users/:id',(req,res)=>{
   // console.log(req.params.id);
   let qrId =req.params.id;
   let qr = `SELECT * FROM users where id = ${qrId}`;
   db.query(qr,(err,results)=>{
    if(err)
    {
       console.log(err) ;
    }
    if(results.length>0)
    {
        res.send({
            message:'get data by id',
            data:results
        })
    }
    else{
        res.send({
            message:'data not found',
        })
    }
   })
});
// post data

app.post('/users',(req,res)=>{
   // console.log(req.body,'post data sucessful');
   let fullName=req.body.fullname;
   let eMail=req.body.email;
   let Mobile=req.body.mobile;

   let qr =`insert into users(fullname,email,mobile)
   value('${fullName}','${eMail}','${Mobile}' )`;
   db.query(qr,(err,results)=>{
    if(err){console.log(err)}
   res.send({
    message:'Data added sucessfully',
    data:results
   })
   })
})
// update data
app.put('/users/:id',(req,res)=>{
    //console.log(req.body,"updated data");
    let uID=req.params.id;
    let fullName=req.body.fullname;
    let eMail=req.body.email;
    let Mobile=req.body.mobile;

    let qr = `update users set fullname='${fullName}',email='${eMail}',mobile='${Mobile}' where id ='${uID}'`;
    db.query(qr,(err,results)=>{
        if(err)
        {
            console.log(err);
        }
        res.send({
            message:'Data Updated successfully',
            data:results
        })
    })

})
// delete data
app.delete('/users/:id',(req,res)=>{
    let uID=req.params.id;
    let qr=`delete from users where id = ${uID}`;
    db.query(qr,(err,results)=>{
    if(err)
    {
        console.log(err);
        res.send({
            message:'Data Deleted sucessfully'
        })
    }
})
})


app.listen(3000,()=>
{
    console.log('server is running');
})

