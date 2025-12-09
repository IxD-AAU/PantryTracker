import express from 'express';

const router = express.Router();


export const getID = (connection, operation) => {
    if (operation == "user"){
        router.get('/api/data/get/user/id', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UUID FROM usertable WHERE UserEmail = ?', [data.UserEmail], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(UUID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "food"){
        router.get('/api/data/get/food/id', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UFID FROM foodtable WHERE barCode = ?', [data.barCode], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(UFID) |data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household1"){
        router.get('/api/data/get/household/id/1', (req, res)=>{
            console.log('received query data:',req.query);
            const data = req.query;
            console.log('data:',data);
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember1 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M1(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household2"){
        router.get('/api/data/get/household/id/2', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember2 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M2(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household3"){
         router.get('/api/data/get/household/id/3', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember3 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M3(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household4"){
        router.get('/api/data/get/household/id/4', (req, res)=>{
            const data = req.query
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember4 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M4 (UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household5"){
        router.get('/api/data/get/household/id/5', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember5 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSEHOLD-M5 (UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    else if (operation == "household6"){
         router.get('/api/data/get/household/id/6', (req, res)=>{
            const data = req.query;
            connection.query('SELECT UHID FROM householdtable WHERE HouseHoldMember6 = ?', [data.UUID], (err, results)=>{
                if(err){
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD-M6(UHID) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getUser = (connection, operation) => {
    if (operation == "firstname") {
        router.get('/api/data/get/user/firstname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UUID
            const uuid = typeof data.UUID === 'object' ? data.UUID.value || data.UUID[0] : data.UUID;
            console.log('Extracted UUID:', uuid);

            if (!uuid) {
                console.error('Invalid UUID:', uuid);
                res.status(400).json({ error: 'Invalid UUID' });
                return;
            }

            connection.query('SELECT FirstName FROM usertable WHERE UUID = ?', [uuid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(FirstName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "lastname") {
        router.get('/api/data/get/user/lastname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UUID
            const uuid = typeof data.UUID === 'object' ? data.UUID.value || data.UUID[0] : data.UUID;
            console.log('Extracted UUID:', uuid);

            if (!uuid) {
                console.error('Invalid UUID:', uuid);
                res.status(400).json({ error: 'Invalid UUID' });
                return;
            }

            connection.query('SELECT LastName FROM usertable WHERE UUID = ?', [uuid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(LastName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "username") {
        router.get('/api/data/get/user/username', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UUID
            const uuid = typeof data.UUID === 'object' ? data.UUID.value || data.UUID[0] : data.UUID;
            console.log('Extracted UUID:', uuid);

            if (!uuid) {
                console.error('Invalid UUID:', uuid);
                res.status(400).json({ error: 'Invalid UUID' });
                return;
            }

            connection.query('SELECT Username FROM usertable WHERE UUID = ?', [uuid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(Username) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "accesscode") {
        router.get('/api/data/get/user/accesscode', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UUID
            const uuid = typeof data.UUID === 'object' ? data.UUID.value || data.UUID[0] : data.UUID;
            console.log('Extracted UUID:', uuid);

            if (!uuid) {
                console.error('Invalid UUID:', uuid);
                res.status(400).json({ error: 'Invalid UUID' });
                return;
            }

            connection.query('SELECT AccessCode FROM usertable WHERE UUID = ?', [uuid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(AccessCode) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "email") {
        router.get('/api/data/get/user/email', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UUID
            const uuid = typeof data.UUID === 'object' ? data.UUID.value || data.UUID[0] : data.UUID;
            console.log('Extracted UUID:', uuid);

            if (!uuid) {
                console.error('Invalid UUID:', uuid);
                res.status(400).json({ error: 'Invalid UUID' });
                return;
            }

            connection.query('SELECT UserEmail FROM usertable WHERE UUID = ?', [uuid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: USER(UserEmail) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;
}

export const getFood = (connection, operation) => {
    if (operation == "barcode") {
        router.get('/api/data/get/food/barcode', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UFID
            const ufid = typeof data.UFID === 'object' ? data.UFID.value || data.UFID[0] : data.UFID;
            console.log('Extracted UFID:', ufid);

            if (!ufid) {
                console.error('Invalid UFID:', ufid);
                res.status(400).json({ error: 'Invalid UFID' });
                return;
            }

            connection.query('SELECT barCode FROM foodtable WHERE UFID = ?', [ufid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(barCode) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "displayname") {
        router.get('/api/data/get/food/displayname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UFID
            const ufid = typeof data.UFID === 'object' ? data.UFID.value || data.UFID[0] : data.UFID;
            console.log('Extracted UFID:', ufid);

            if (!ufid) {
                console.error('Invalid UFID:', ufid);
                res.status(400).json({ error: 'Invalid UFID' });
                return;
            }

            connection.query('SELECT displayName FROM foodtable WHERE UFID = ?', [ufid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: FOOD(displayName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;
}

export const getHousehold = (connection, operation) => {
    if (operation == "displayname") {
        router.get('/api/data/get/household/displayname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT displayName FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(displayName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "invitecode") {
        router.get('/api/data/get/household/invitecode', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT inviteCode FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(inviteCode) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember1") {
        router.get('/api/data/get/household/householdmember/1', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember1 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member1) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember2") {
        router.get('/api/data/get/household/householdmember/2', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember2 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member2) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember3") {
        router.get('/api/data/get/household/householdmember/3', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember3 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member3) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember4") {
        router.get('/api/data/get/household/householdmember/4', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember4 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member4) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember5") {
        router.get('/api/data/get/household/householdmember/5', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember5 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member5) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "householdmember6") {
        router.get('/api/data/get/household/householdmember/6', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UHID
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            connection.query('SELECT HouseHoldMember6 FROM householdtable WHERE UHID = ?', [uhid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSEHOLD(Member6) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;  
}

export const getCabinet = (connection, operation) => {
    if (operation == "itemdisplayname") {
        router.get('/api/data/get/cabinet/itemID', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate cabinetCode
            const cabinetCode = typeof data.cabinetCode === 'object' ? data.cabinetCode.value || data.cabinetCode[0] : data.cabinetCode;
            console.log('Extracted cabinetCode:', cabinetCode);

            if (!cabinetCode) {
                console.error('Invalid cabinetCode:', cabinetCode);
                res.status(400).json({ error: 'Invalid cabinetCode' });
                return;
            }

            const cabinetTableName = `cabinet${cabinetCode}`;
            console.log('Constructed table name:', cabinetTableName);

            connection.query(`SELECT itemID FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: CABINET(itemID) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "itemamount") {
        router.get('/api/data/get/cabinet/itemamount', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate cabinetCode
            const cabinetCode = typeof data.cabinetCode === 'object' ? data.cabinetCode.value || data.cabinetCode[0] : data.cabinetCode;
            console.log('Extracted cabinetCode:', cabinetCode);

            if (!cabinetCode) {
                console.error('Invalid cabinetCode:', cabinetCode);
                res.status(400).json({ error: 'Invalid cabinetCode' });
                return;
            }

            const cabinetTableName = `cabinet${cabinetCode}`;
            console.log('Constructed table name:', cabinetTableName);

            connection.query(`SELECT itemAmount FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: CABINET(itemAmount) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "itemexpirationdate") {
        router.get('/api/data/get/cabinet/itemexpirationdate', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate cabinetCode
            const cabinetCode = typeof data.cabinetCode === 'object' ? data.cabinetCode.value || data.cabinetCode[0] : data.cabinetCode;
            console.log('Extracted cabinetCode:', cabinetCode);

            if (!cabinetCode) {
                console.error('Invalid cabinetCode:', cabinetCode);
                res.status(400).json({ error: 'Invalid cabinetCode' });
                return;
            }

            const cabinetTableName = `cabinet${cabinetCode}`;
            console.log('Constructed table name:', cabinetTableName);

            connection.query(`SELECT itemExpirationDate FROM ${cabinetTableName} WHERE UCID = ?`, [data.UCID], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: CABINET(itemExpirationDate) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "everything") {
        router.get('/api/data/get/cabinet/everything', (req, res) => {
            const data = req.query;
            console.log("running retrieval of all data from cabinet");
            console.log('Received data:', data);

            // Extract and validate cabinetCode
            const cabinetCode = typeof data.cabinetCode === 'object' ? data.cabinetCode.value || data.cabinetCode[0] : data.cabinetCode;
            console.log('Extracted cabinetCode:', cabinetCode);

            if (!cabinetCode) {
                console.error('Invalid cabinetCode:', cabinetCode);
                res.status(400).json({ error: 'Invalid cabinetCode' });
                return;
            }

            const cabinetTableName = `cabinet${cabinetCode}`;
            console.log('Constructed table name:', cabinetTableName);

            connection.query(`SELECT * FROM ${cabinetTableName}`, (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: CABINET(everything) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;
};

export const getHouesholdCabinetIndex = (connection, operation) => {
    if (operation == "DisplayName"){
        router.get('/api/data/get/householdcabinetindex/displayname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract UHID and ensure it's a primitive value
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            const index = `household${uhid}`;
            console.log('Constructed table name:', index);

            connection.query(`SELECT displayName FROM ${index} WHERE HCIID = ?`, [data.HCIID], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: HOUSECABINETINDEX (displayName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    else if (operation == "cabinetCode"){
        router.get('/api/data/get/householdcabinetindex/cabinetcode', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract UHID and ensure it's a primitive value
            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID:', uhid);

            if (!uhid) {
                console.error('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID' });
                return;
            }

            const index = `household${uhid}`;
            console.log('Constructed table name:', index);

            connection.query(`SELECT cabinetCode FROM ${index} WHERE HCIID = ?`, [data.HCIID], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Query failed' });
                    return;
                }
                res.json(results);
            });
        })
    }
    else if (operation == "cabinetType"){
        router.get('/api/data/householdcabinetindex/cabinetType', (req, res)=>{
            const data = req.query;
            console.log('Received data:',data);

            const uhid = typeof data.UHID === 'object' ? data.UHID.value || data.UHID[0] : data.UHID;
            console.log('Extracted UHID', uhid);

            if (!uhid){
                console.log('Invalid UHID:', uhid);
                res.status(400).json({ error: 'Invalid UHID'});
                return;
            }

            const index = `household${uhid}`;
            console.log('constructed table name:', index);

            connection.query(`SELECT cabinetType FROM ${index} WHERE HCIID = ?`, [data.HCIID], (err, results)=>{
                if (err){
                    console.error(err);
                    res.status(500).json({error: 'Dataset: HOUSECABINETINDEX(cabinetType) | data retrieval failed'});
                    return;
                }
                res.json(results);
            })
        })
    }
    return router;
}

export const getRecipe = (connection, operation) => {
    if (operation == "displayname") {
        router.get('/api/data/get/recipe/displayname', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate URID
            const urid = typeof data.URID === 'object' ? data.URID.value || data.URID[0] : data.URID;
            console.log('Extracted URID:', urid);

            if (!urid) {
                console.error('Invalid URID:', urid);
                res.status(400).json({ error: 'Invalid URID' });
                return;
            }

            connection.query('SELECT displayName FROM recipetable WHERE URID = ?', [urid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: RECIPE(displayName) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "link") {
        router.get('/api/data/get/recipe/link', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate URID
            const urid = typeof data.URID === 'object' ? data.URID.value || data.URID[0] : data.URID;
            console.log('Extracted URID:', urid);

            if (!urid) {
                console.error('Invalid URID:', urid);
                res.status(400).json({ error: 'Invalid URID' });
                return;
            }

            connection.query('SELECT recipeLink FROM recipetable WHERE URID = ?', [urid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: RECIPE(recipeLink) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;
};

export const getNotes = (connection, operation) => {
    if (operation == "Amount") {
        router.get('/api/data/get/note/amount', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UNID
            const unid = typeof data.UNID === 'object' ? data.UNID.value || data.UNID[0] : data.UNID;
            console.log('Extracted UNID:', unid);

            if (!unid) {
                console.error('Invalid UNID:', unid);
                res.status(400).json({ error: 'Invalid UNID' });
                return;
            }

            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;
            console.log('Constructed table name:', index);

            connection.query(`SELECT amount FROM ${index} WHERE UNID = ?`, [unid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: NOTEINDEX(amount) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    } else if (operation == "Text") {
        router.get('/api/data/get/note/text', (req, res) => {
            const data = req.query;
            console.log('Received data:', data);

            // Extract and validate UNID
            const unid = typeof data.UNID === 'object' ? data.UNID.value || data.UNID[0] : data.UNID;
            console.log('Extracted UNID:', unid);

            if (!unid) {
                console.error('Invalid UNID:', unid);
                res.status(400).json({ error: 'Invalid UNID' });
                return;
            }

            const index = `noteIndex${data.UHID}-${data.NoteIndex}`;
            console.log('Constructed table name:', index);

            connection.query(`SELECT text FROM ${index} WHERE UNID = ?`, [unid], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Dataset: NOTEINDEX(text) | data retrieval failed' });
                    return;
                }
                res.json(results);
            });
        });
    }
    return router;
};