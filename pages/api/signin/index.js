const { connectToDatabase } = require('../../../config/mongodb');


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'POST': {
            return getUser(req, res);
        }
    }
}

async function getUser(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        const { username, password } = req.body;
       
        let user = await db
            .collection('users')
            .findOne({
                username: username,
                password: password
            })
            
        
        return res.json({
            data: JSON.parse(JSON.stringify(user)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}





