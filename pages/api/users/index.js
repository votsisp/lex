const { connectToDatabase } = require('../../../config/mongodb');

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getUsers(req, res);
        }

        case 'POST': {
            return addUser(req, res);
        }

    }
}

async function getUsers(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the users
        let users = await db
            .collection('users')
            .find({})
            .sort({ published: -1 })
            .toArray();
        // return the users
        return res.json({
            data: JSON.parse(JSON.stringify(users)),
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

async function addUser(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        const user = await db.collection('users').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


