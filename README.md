Pantry tracker, stylised as PantryTracker, is a food inventory management system developed using angular and MySQL 94.


# Setup before application can be ran:

## Database Config:
Before the application can be ran, a database must be available for it to use. included in all releases are creation schemas for such a database.

!! Disclaimer!!
The current database files uses the sys database, another database can be used instead but doing so means also updating the `server.js` file.

#### Import data
1. Under the `Server` Tab, select `Import Data`.
2. Select the `SQL Server Data` folder that is included with the release.
3. run the import tool with the default parameters.

#### Create Server User
1. Under the `Server` Tab, select `Users and Privileges`
2. Click `Add Account`
3. Make its `Login Name`, `Authentication Type` & `Password` the following: 

| | |
| --- | --- |
| Login Name: | `DBuser` |
| Auth Type: | `caching_sha2_password` |
| Password: | `DBpassword` |

4. Press Apply.
5. Apply Administrative Role: `DBA`

Once both of these steps are completed the application can be ran via the terminal, its is recommended to use VSCode's integrated terminal for this.

## Running the Application:

### Server
To open the server do the following:
1. right click on the server folder and press `Open in Integrated Terminal`.
2. Type `node server.js`  and press enter.
3. The server will now be running on `LocalHost:3000` via express.

### Client
To open the client do the following:
1. right click on the client folder and press `Open in Integrated Terminal`.
2. Type `ng serve` and press enter.
3. The Client will now be running on `LocalHost:4200` via express.
 
