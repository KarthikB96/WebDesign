 // app/routes.js

// grab the nerd model we just created
var Sample = require('./models/sample');
var ObjectId = require('mongodb').ObjectID;

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/show', function(req, res) {
            
            Sample.find(function(err, samples) {
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);
                console.log('samples', samples);
                res.json(samples); 
            });
        });


        app.post('/user/create', function(req, res) {
            let email = req.body.email;
            let password = req.body.password;
            const emailRegex =  /^[a-zA-Z_$%)(*!~`)./#&+-]+\d*@[a-z]+[.][a-z]+/g ;
            const passwordRegex = /[a-zA-Z]{8,}[!#$%^&(_+?]*\d+$/g;
            if(!emailRegex.test(email) || !passwordRegex.test(password)){
                res.sendStatus(400);
            }
            else{
            var rec = new Sample(req.body);
            console.log(email);
            console.log(password);        
            rec.save(function(err,n){
                if (err){
                res.sendStatus(400)
                }
                else{
                res.sendStatus(200);
                }
            });
        }
        });

        app.post("/user/:email/product", function(req,res){
            let rec = req.body;
            if(req.body.productName.length<1 || req.body.productPrice<1){
                res.sendStatus(400);
            }
            let emailVal = req.params.email ;
            console.log(rec); 
            Sample.find({email: emailVal },function(err,result){
                if(result.length === 0 || err){
                    res.sendStatus(401);
                   // {"products":{"productName":rec.productName, "productPrice":rec.productPrice}}
                }
                else{
                    Sample.findOneAndUpdate({email: emailVal},{$push: {products: rec}},{safe: true, upsert: true},
                        function(err, model) {
                            console.log(err);
                            }
                        );
                        res.sendStatus(200); 
                }
            });
        });
        
        app.put("/user/:email/product/:productId" ,function(req,res){
            let rec = req.body;
            if(req.body.productName.length<1 || req.body.productPrice<1){
                res.sendStatus(400);
            }
            let emailVal = req.params.email ;
            let productId = new ObjectId(req.params.productId);
            console.log(rec);
            Sample.find({email: emailVal },function(err,result){
                if(result.length === 0 || err){
                    res.sendStatus(401);
                }
                else{
                    Sample.findOneAndUpdate({email:emailVal, "products._id" : productId},
                    {
                        "$set" :
                        {
                            "products.$.productName": rec.productName,
                            "products.$.productPrice": rec.productPrice
                        }
                        },function(err,result){
                            if(!err){
                                res.sendStatus(200);
                                }
                            else{
                                res.sendStatus(400)
                            }
                        });
                }
            });
        });

        app.delete("/user/:email/product/:productId",function(req,res){
            let emailVal = req.params.email ;
            let productId = new ObjectId(req.params.productId);
            Sample.find({email: emailVal },function(err,result){
                if(result.length === 0 || err){
                    res.sendStatus(401);
                }
                else{
                    Sample.findOneAndUpdate({email:emailVal},{$pull:{"products":{_id:productId}}},function(err,result){
                        if(!err){
                            res.sendStatus(200);
                        }
                    });
                }
            });
        });

        app.get('/user/:email/product', function(req, res) {
            let emailVal = req.params.email ;
            Sample.find({email: emailVal},{products:1}, (err, doc) => {
                if (!err) {
                    res.json(doc);
                }
                else{
                    res.sendStatus(401);
                }
            }); 
        });

    };