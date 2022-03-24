const { connectToDatabase } = require('../../../config/mongodb');

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getWords(req, res);
        }

        case 'POST': {
            return addWord(req, res);
        }

    }
}

async function getWords(req,res){
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // fetch the users
        let words = await db
            .collection('words')
            .find({})
            .sort({ entryDe: 1 })
            .toArray();
        // return the users
        return res.json({
            data: JSON.parse(JSON.stringify(words)),
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

async function addWord(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // add the post
        const word = await db.collection('words').insertOne(JSON.parse(req.body));
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


