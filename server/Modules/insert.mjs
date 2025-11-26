import express from 'express';

const router = express.Router();

export const addUser = (connection)=>{
    router.post('/api/data/add/user', (req, res)=>{
        const data = req.body;
        connection.query('INSERT INTO usertable (FirstName, LastName, Username, AccessCode, UserEmail) VALUES (?,?,?,?,?)', [data.FirstName, data.LastName, data.Username, data.AccessCode, data.UserEmail], (err, results)=>{
            if(err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (User) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}

export const addFood = (connection)=>{
    router.post('/api/data/add/food', (req, res)=>{
        const data = req.body;
        connection.query('INSERT INTO foodtable (barCode, displayName) VALUES (?,?)', [data.barCode, data.displayName], (err, results)=>{
            console.error(err);
            res.status(500).json({error: 'Database insertion (Food) failed'});
            return;
        })
        res.json({ success: true, id: results.insertId});
    })
    return router;
}

export const addHousehold = (connection)=>{
    router.post('/api/data/add/household', (req, res)=>{
        const data = req.body;
        connection.query('SELECT INTO householdtable (displayName, inviteCode, HouseHoldMember1, HouseHoldMember2, HouseHoldMember3, HouseHoldMember4, HouseHoldMember5, HouseHoldMember6) VALUES (?,?,?,?,?,?,?,?)', [data.displayName, data.inviteCode, data.HouseHoldMember1, data.HouseHoldMember2, data.HouseHoldMember3, data.HouseHoldMember4, data.HouseHoldMember5, data.HouseHoldMember6],(err, results)=>{
            if(err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (HouseHold) failed'});
                return;
            }
            res.json({ success: true, id:results.insertId});
        })
    })
    return router;
}

export const addCabinet = (connection)=>{
    router.post('/api/data/add/cabinet', (req, res)=>{
        const data = req.body;
        const cabinetTableName = `cabinet${data.cabinetCode}`;
        
        if (!(data.cabinetCode).isInteger()){
            console.error("Provided cabinet code is not an integer.");
            res.status(500).json({error: 'Provided cabinet code is not an integer.'})
            return;
        }

        connection.query(`INSERT INTO ${cabinetTableName} (itemID, itemAmount, itemExpirationDate) VALUES (?,?,?)`, [data.UFID, data.amount, data.expirationDate], (err, results)=>{
            if(err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (Cabinet) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}

export const addHouseholdCabinetIndex = (connection)=>{
    router.post('/api/data/add/houescabinetindex', (req, res)=>{
        const data = req.body;
        const index = `household${data.IndexCode}`;

        connection.query(`INSERT INTO ${index} (displayname, cabinetCode) VALUES (?,?)`, [data.displayName, data.cabinetCode], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (HouseholdCabinetIndex) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}