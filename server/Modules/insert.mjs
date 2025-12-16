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
        connection.query('INSERT INTO householdtable (displayName, inviteCode, HouseHoldMember1, HouseHoldMember2, HouseHoldMember3, HouseHoldMember4, HouseHoldMember5, HouseHoldMember6) VALUES (?,?,?,?,?,?,?,?)', [data.displayName, data.inviteCode, data.HouseHoldMember1, data.HouseHoldMember2, data.HouseHoldMember3, data.HouseHoldMember4, data.HouseHoldMember5, data.HouseHoldMember6],(err, results)=>{
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
    router.post('/api/data/add/householdcabinetindex', (req, res)=>{
        const data = req.body;
        const index = `household${data.UHID}`;

        // First insert with cabinetCode as empty (will be updated after getting HCIID)
        connection.query(`INSERT INTO ${index} (displayname, cabinetCode, cabinetType) VALUES (?,?,?)`, [data.displayName, '', data.cabinetType], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (HouseholdCabinetIndex) failed'});
                return;
            }
            
            const hciid = results.insertId;
            
            // Now update the cabinetCode to be the same as HCIID
            connection.query(`UPDATE ${index} SET cabinetCode = ? WHERE HCIID = ?`, [hciid.toString(), hciid], (updateErr, updateResults)=>{
                if (updateErr){
                    console.error('Error updating cabinetCode:', updateErr);
                    res.status(500).json({error: 'Database update (cabinetCode) failed'});
                    return;
                }
                
                console.log(`✓ Cabinet created with HCIID: ${hciid}, cabinetCode set to: ${hciid}`);
                res.json({ success: true, id: hciid, cabinetCode: hciid });
            })
        })
    })
    return router;
}

export const addNote = (connection) =>{
    router.post('/api/data/add/note', (req, res)=>{
        const data = req.body;
        const index = `noteIndex${data.UHID}`;
        const parentId = data.parentId || null;

        connection.query(`INSERT INTO ${index} (amount, text, parentId) VALUES (?,?,?)`, [data.amount, data.text, parentId], (err, results)=>{
            if (err){
                console.error(err);
                res.status(500).json({error: 'Database insertion (NoteIndex) failed'});
                return;
            }
            res.json({ success: true, id: results.insertId});
        })
    })
    return router;
}