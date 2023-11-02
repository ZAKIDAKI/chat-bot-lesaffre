const connection=require("../database/connect")

exports.getProducts=(callback)=>{

    let sql=`select *from products`;

    connection.query(sql,(error,results,fields) => {
        if(error) console.log(error) 
        callback({products:results});
    })

}

exports.getOneProduct=(productId,callback)=>{
    let sql=`select *from products where id=?`;
    connection.query(sql,productId,(error,results,fields) => {
        if(error) console.log(error) 
        callback({product:results[0]});
    })
}