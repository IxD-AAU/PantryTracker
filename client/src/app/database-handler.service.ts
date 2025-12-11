import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from 'express';


@Injectable({
	providedIn: 'root'
})
export class DatabaseHandlerService {
	private apiUrl = 'http://localhost:3000/api/data';
	private path1 = '';
	private path2 = '';
	private path3 = '';

	constructor(private http: HttpClient) {}



/**
 * Constructs a GET request path based on the provided operation and subOperation,
 * updates the service instance path properties (path1, path2, path3), and issues
 * an HTTP GET request using the constructed URL.
 *
 * The function maps the following operation and subOperation combinations to
 * path segments:
 *  - "ID"
 *    - "User"         -> returns the user's ID based on its unique email.
 *    - "Food"         -> returns the food's ID based on its unique barcode.
 *    - "Household1".. "Household6"
 *                     -> returns the household's ID based on which household member is logged in (run in loop).
 *  - "User"
 *    - "FirstName"    -> returns the user's FirstName based on their ID.
 *    - "LastName"     -> returns the user's LastName based on their ID.
 *    - "UserName"     -> returns the user's UserName based on their ID.
 *    - "AccessCode"   -> returns the user's AccessCode based on their ID.
 *    - "EMail"        -> returns the user's Email based on their ID.
 *  - "Food"
 *    - "BarCode"      -> returns the food's BarCode based on its ID.
 *    - "DisplayName"  -> returns the food's DisplayName based on its ID
 *  - "HouseHold"
 *    - "DisplayName"  -> returns the household's DisplayName based on its ID
 *    - "InviteCode"   -> returns the household's InviteCode based on its ID.
 *    - "HouseHoldMember1".. "HouseHoldMember6"
 *                     -> returns the ID of the householdmember based on the households ID
 *  - "Cabinet" (Remember to provide the CabinetCode via the body OBJ).
 *    - "ItemID"     -> returns the foodID of a given item based on its ID.
 *    - "ItemAmount"          -> returns the amount of a given item based on its ID.
 *    - "ItemExpirationDate"  -> returns the expiration date of a given item based on its ID.
 *    - "Everything"          -> returns all the content in a cabinet.
 *  - "HouseHoldCabinetIndex"
 *    - "DisplayName"  -> returns the display name of a given cabinet based on its ID.
 *    - "CabinetCode"  -> returns the internal CabinetCode for a given cabinet based on its ID.
 *    - "CabinetType"  -> returns the internal cabinetType for a given cabinet based on its ID.
 *  - "Recipe"
 *    - "DisplayName"  -> returns the recipe's DisplayName based on its ID.
 *    - "Link"         -> returns the recipe's external website link based on its ID.
 *  - "Note"
 *    - "Amount"       -> returns the amount of items noted based on its ID.
 *    - "Text"         -> returns the text of a note entry based on its ID.
 *
 * @param operation - Primary operation category used to select the base path (e.g., "ID", "User", "Food", "HouseHold", "Cabinet", "HouseHoldCabinetIndex", "Recipe").
 * @param subOperation - Secondary operation (selector) used to refine the path (see mapping above for allowed values).
 * @param body - Object forwarded as the second argument to HttpClient.get
 *
 * (For ID:
 * - "User" -> user's email
 * - "Food" -> the food's BarCode
 * - "HouseHold" -> a given user's ID compared against all the user ID's tied as memberships of said household.
 * )
 * For all other operations/suboperations used the assosiated ID.
 * @returns Observable<any> - An observable that emits the HTTP GET response from the constructed endpoint.
 */
getEntryDatabase(operation: String, subOperation: String, query: any): Observable<any>{
  this.path1 = '';
  this.path2 = '';
  this.path3 = '';
	if (operation == "ID"){
		this.path2 = '/id'
		switch (subOperation) {
			case "User":
				this.path1 = '/get/user';
				break;
      case "UserName":
        this.path1 = '/get/userName';
        break;
			case "Food":
				this.path1 = '/get/food';
				break;
      case "FoodName":
        this.path1 = '/get/foodName';
        break;
			case "Household1":
				this.path1 = '/get/household';
				this.path3 = '/1';
				break;
			case "Household2":
				this.path1 = '/get/household';
				this.path3 = '/2';
				break;
		  case "Household3":
				this.path1 = '/get/household';
				this.path3 = '/3';
				break;
			case "Household4":
				this.path1 = '/get/household';
				this.path3 = '/4';
				break;
			case "Household5":
				this.path1 = '/get/household';
				this.path3 = '/5';
				break;
			case "Household6":
				this.path1 = '/get/household';
				this.path3 = '/6';
				break;
			default:
				break;
		}
	}
	else if (operation == "User"){
		this.path1 = '/get/user'
		switch (subOperation) {
			case "FirstName":
				this.path2 = '/firstname';
				break;
			case "LastName":
				this.path2 = '/lastname';
				break;
			case "UserName":
				this.path2 = '/username';
				break;
			case "AccessCode":
				this.path2 = '/accesscode';
				break;
			case "EMail":
				this.path2 = '/email';
				break;
			default:
				break;
		}
	}
	else if (operation == "Food"){
		this.path1 = '/get/food';
		switch (subOperation){
			case "BarCode":
				this.path2 = '/barcode';
				break;
			case "DisplayName":
				this.path2 = '/displayname';
				break;
			default:
				break;
		}
	}
	else if (operation == "HouseHold"){
		this.path1 = '/get/household';
		switch (subOperation){
			case "DisplayName":
				this.path2 = '/displayname';
				break;
			case "InviteCode":
				this.path2 = '/invitecode';
				break;
			case "HouseHoldMember1":
				this.path2 = '/householdmember';
				this.path3 = '/1';
				break;
			case "HouseHoldMember2":
				this.path2 = '/householdmember';
				this.path3 = '/2';
				break;
			case "HouseHoldMember3":
				this.path2 = '/householdmember';
				this.path3 = '/3';
				break;
			case "HouseHoldMember4":
				this.path2 = '/householdmember';
				this.path3 = '/4';
				break;
			case "HouseHoldMember5":
				this.path2 = '/householdmember';
				this.path3 = '/5';
				break;
			case "HouseHoldMember6":
				this.path2 = '/householdmember';
				this.path3 = '/6';
				break;
			default:
				break;
		}
	}
	else if (operation == "Cabinet"){
		this.path1 = '/get/cabinet';
		switch (subOperation){
			case "itemID":
				this.path2 = '/itemID';
				break;
			case "ItemAmount":
				this.path2 = '/itemamount';
				break;
			case "ItemExpirationDate":
				this.path2 = '/itemexpirationdate';
				break;
      case "Everything":
        this.path2 = '/everything'
        break;
			default:
				break;
		}
	}
	else if (operation == "HouseHoldCabinetIndex"){
		this.path1 = '/get/householdcabinetindex';
		switch (subOperation){
	    case "DisplayName":
		    this.path2 = '/displayname'
		    break;
			case "CabinetCode":
				this.path2 = '/cabinetcode';
				break;
			default:
				break;
		}
	}
	else if (operation == "Recipe"){
		this.path1 = '/get/recipe';
		switch(subOperation){
			case "DisplayName":
				this.path2 = '/displayname';
				break;
			case "Link":
				this.path2 = '/link';
				break;
			default:
				break;
		}
	}
  else if (operation == "Note"){
    this.path1 = '/get/note';
    switch(subOperation){
      case "Amount":
        this.path2 = '/amount';
        break;
      case "Text":
        this.path2 = '/text'
        break;
      default:
        break;
    }
  }


  const params = new HttpParams({ fromObject: query});

  console.log(`constructed URL: ${this.apiUrl}${this.path1}${this.path2}${this.path3}${params}`);
  console.log('params: ',params);

	return this.http.get(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, { params });
}

/**
 * Update an entry in the backend database by constructing a REST path from the
 * provided operation and subOperation and issuing an HTTP PUT with the given body.
 *
 *
 * Accepted operations and subOperation values (exact casing):
 * - "User"
 *   - "FirstName" -> updates the user's FirstName, provide: New FirstName & ID via Body OBJ.
 *   - "LastName"  -> updates the user's LastName, provide: New LastName & ID via Body OBJ
 *   - "UserName"  -> updates the user's UserName, provide: New Username & ID via Body OBJ
 *   - "AccessCode"-> updates the user's AccessCode, provide: New AccessCode & ID via Body OBJ
 *   - "Email"     -> updates the user's Email, provide: New Email & ID via Body OBJ
 *
 * - "Food"
 *   - "DisplayName" -> updates the food's DisplayName, provide: New DisplayName & ID via Body OBJ
 *   - "BarCode"     -> 'updates the food's BarCode, provide: New BarCode(numerical) & ID via Body OBJ
 *
 * - "HouseHold"
 *   - "DisplayName"      -> updates the HouseHold's DisplayName, provide: New DisplayName & ID via Body OBJ
 *   - "InviteCode"       -> updates the HouseHold's InviteCode, provide: New InviteCode & ID via Body OBJ
 *   - "HouseHoldMember1" -> updates the HouseHold's HouseHoldMember1, provide: New HouseHoldMember1(user ID) & ID via Body OBJ
 *   - "HouseHoldMember2" -> updates the HouseHold's HouseHoldMember2, provide: New HouseHoldMember2(user ID) & ID via Body OBJ
 *   - "HouseHoldMember3" -> updates the HouseHold's HouseHoldMember3, provide: New HouseHoldMember3(user ID) & ID via Body OBJ
 *   - "HouseHoldMember4" -> updates the HouseHold's HouseHoldMember4, provide: Nwe HouseHoldMember4(user ID) & ID via Body OBJ
 *   - "HouseHoldMember5" -> updates the HouseHold's HouseHoldMember5, provide: Nwe HouseHoldMember5(user ID) & ID via Body OBJ
 *   - "HouseHoldMember6" -> updates the HouseHold's HouseHoldMember6, provide: Nwe HouseHoldMember6(user ID) & ID via Body OBJ
 *
 * - "Cabinet"
 *   - "ItemDisplayName"    -> updates the item's DisplayName, provide: New ItemDisplayName & ID via Body OBJ
 *   - "ItemAmount"         -> updates the item's amount, provide: new ItemAmount & ID via Body OBJ
 *   - "ItemExpirationDate" -> updates the item's expirationDate, provide: new ItemExpirationDate & ID via Body OBJ
 *
 * - "Recipe"
 *   - "DisplayName" -> updates the recipe's DisplayName, provide: new DisplayName & ID via Body OBJ.
 *   - "RecipeLink"  -> updates the recipe's external link, provide: New Link & ID via Body OBJ
 *
 * - "HouseHoldCabinetIndex"
 *   - "DisplayName" -> updates the DisplayName for a cabinet, provide: New DisplayName & ID via Body OBJ.
 *   - "CabinetType" -> updates the CabinetType for a cabinet, provide: New CabinetType & ID via Body OBJ.
 *
 * - "Note"
 *   - "Amount" -> updates the Amount for a note, provide: New Amount & ID via Body OBJ.
 *   - "Text" -> updates the Text for a note, provide: New Text & ID via Body OBJ.
 * Parameters:
 * @param operation - The top-level operation/category (e.g. "User", "Food", "HouseHold", "Cabinet", "Recipe").
 * @param subOperation - The specific field or sub-operation to update (must match one of the accepted values above).
 * @param body - The payload sent as the HTTP PUT body (any JSON-serializable value expected by the server).
 *
 * @returns Observable<any> - An Observable that emits the HTTP response from the server. Errors from the HTTP call are propagated through the returned Observable.
 */
updateEntryDatabase(operation: String, subOperation: String, body: any): Observable<any>{
  this.path1 = '';
  this.path2 = '';
  this.path3 = '';

	if (operation == "User"){
	  this.path1 = '/update/user';
	  switch(subOperation){
	    case "FirstName":
	  	  this.path2 = '/firstname';
  		  break;
	    case "LastName":
  	  	this.path2 = '/lastname';
	  	  break;
  	  case "UserName":
    		this.path2 = '/username';
	    	break;
  	  case "AccessCode":
    		this.path2 = '/accesscode';
	    	break;
  	  case "Email":
    		this.path2 = '/email';
	    	break;
  	  default:
	  	  break;
	}
	}
	else if (operation == "Food"){
	  this.path1 = '/update/food';
	  switch(subOperation){
  	  case "DisplayName":
  	  	this.path2 = '/displayname';
	  	  break;
  	  case "BarCode":
	  	  this.path2 = '/barcode'
		    break;
	}
  }
  else if (operation == "HouseHold"){
	  this.path1 = '/update/household';
	  switch(subOperation){
	    case "DisplayName":
  		  this.path2 = '/displayname';
	  	  break;
	    case "InviteCode":
    		this.path2 = '/invitecode';
    		break;
  	  case "HouseHoldMember1":
    		this.path2 = '/householdmember';
	    	this.path3 = '/1';
		    break;
	    case "HouseHoldMember2":
    		this.path2 = '/householdmember';
    		this.path3 = '/2';
    		break;
  	  case "HouseHoldMember3":
    		this.path2 = '/householdmember';
    		this.path3 = '/3';
    		break;
	    case "HouseHoldMember4":
    		this.path2 = '/householdmember';
    		this.path3 = '/4';
    		break;
	    case "HouseHoldMember5":
    		this.path2 = '/householdmember';
    		this.path3 = '/5';
    		break;
  	  case "HouseHoldMember6":
    		this.path2 = '/householdmember';
    		this.path3 = '/6';
    		break;
	    default:
    		break;
	}
  }
  else if (operation == "Cabinet"){
	  this.path1 = '/update/cabinet';
	  switch (subOperation){
		  case "ItemID":
			  this.path2 = '/ID';
  			break;
	    case "ItemAmount":
		  	this.path2 = '/amount';
			  break;
  	  case "ItemExpirationDate":
  	  	this.path2 = '/expirationdate';
		    break;
	    default:
		    break;
	}
  }
  else if (operation == "Recipe"){
	  this.path1 = '/update/recipe';
  	switch (subOperation){
	    case "DisplayName":
    		this.path2 = '/displayname';
    		break;
	    case "RecipeLink":
    		this.path2 = '/link';
		    break;
  	  default:
	    	break;
	}
  }
  else if (operation == "HouseHoldCabinetIndex"){
    this.path1 = '/update/householdcabinetindex';
    switch (subOperation){
      case "DisplayName":
        this.path2 = '/displayname';
        break;
      case "CabinetType":
        this.path2 = '/cabinettype';
        break;
      default:
        break;
  }
  }
  else if (operation == "Note"){
    this.path1 = '/update/note';
    switch (subOperation){
      case "Amount":
        this.path2 = '/amount';
        break;
      case "Text":
        this.path2 = '/text';
        break;
      default:
        break;
    }
  }

  return this.http.put(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}



/**
 * Insert an object into the backend database by issuing an HTTP POST to a constructed endpoint.
 *
 * Operation:
 * - `"User"` -> New user, provide: `FirstName`, `LastName`, `UserName`, `AccessCode` & `Email` via Body OBJ
 * - `"Food"` -> New food, provide: `DisplayName` & `BarCode` via Body OBJ
 * - `"Household"` -> New HouseHold `DisplayName`, `InviteCode` & `HouseHoldMember1`..`HouseHoldMember6` via Body OBJ
 * - `"Cabinet"` -> New Cabinet, provide: `CabinetCode`, `DisplayName`, `Amount` & `ExpirationDate` via Body OBJ
 * - `"HouseholdCabinet"` -> New HouseHoldCabinetIndex, provide: `DisplayName` & `CabinetCode` via Body OBJ
 * - `"Note"` -> New Note, Provide: `Amount` & `Text` via Body OBJ
 *
 * @param operation - A string identifying which resource to add. See supported values above.
 * @param body - The payload to send in the POST request (typically the new resource representation).
 * @returns An Observable that emits the server response (or an error if the HTTP request fails).
 *
 */
insertIntoDatabase(operation: String, body: any): Observable<any>{
  this.path1 = '';
  this.path2 = '';
  this.path3 = '';

	this.path1 = '/add';
	if (operation == "User"){
		this.path2 = '/user';
	}
	else if (operation == "Food"){
		this.path2 = '/food';
	}
	else if (operation == "Household"){
		this.path2 = '/household';
	}
	else if (operation == "Cabinet"){
		this.path2 = '/cabinet';
	}
	else if (operation == "HouseholdCabinet"){
		this.path2 = '/householdcabinetindex';
	}
  else if (operation == "Note"){
    this.path2 = '/note';
  }

	return this.http.post(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}




/**
 * Sends a DELETE request to the API to remove an entry from the database based on the specified operation type.
 *
 * @param operation - The type of resource to delete. Supported values are:
 *   - "User" -> Deletes User Entry
 *   - "Food" -> Deletes Food Entry
 *   - "Household" -> Deletes HouseHold Entry
 *   - "Recipe" -> Deletes Recipe Entry
 *   - "CabinetEntry" -> Deletes Cabinet Entry
 *   - "CabinetWhole" -> Deletes Entire Cabinet
 *   - "HouseHoldIndexEntry" -> Deletes HouseHoldCabinetIndex Entry
 *   - "HouseHoldIndexWhole" -> Deletes Entire HouseHoldCabinetIndex
 *   - "NoteEntry" -> Deletes Note Entry
 *   - "NoteWhole" -> Deletes Entire Notes
 * @param body - The request body to send with the DELETE request, containing needed (ID/ cabinetCode / HouseHoldCode) for deletion specification.
 * @returns An `Observable<any>` that emits the server's response to the DELETE request.
 */
deleteEntryDatabase(operation: String, body: any): Observable<any>{
  this.path1 = '';
  this.path2 = '';
  this.path3 = '';

  this.path1 = '/delete';
  if (operation == "User"){
    this.path2 = '/user';
  }
  else if (operation == "Food"){
    this.path2 = '/food';
  }
  else if (operation == "Household"){
    this.path2 = '/household';
  }
  else if (operation == "Recipe"){
    this.path2 = '/recipe';
  }
  else if (operation == "CabinetEntry"){
    this.path2 = '/cabinet';
    this.path3 = '/entry';
  }
  else if (operation == "CabinetWhole"){
    this.path2 = '/cabinet';
    this.path3 = '/whole';
  }
  else if (operation == "HouseHoldIndexEntry"){
    this.path2 = '/householdindex';
    this.path3 = '/entry';
  }
  else if (operation == "HouseHoldIndexWhole"){
    this.path2 = '/householdindex';
    this.path3 = '/whole';
  }
  else if (operation == "NoteEntry"){
    this.path2 = '/notes';
    this.path3 = '/entry';
  }
  else if (operation == "NoteWhole"){
    this.path2 = '/notes';
    this.path3 = '/whole';
  }

  return this.http.delete(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, {body});
}


/**
 * Creates a table in the database for the specified operation.
 * @param operation - The type of operation to perform, Supported: Cabinet & HouseHoldCabinetIndex.
 * @param body - The request body containing the data(cabinetCode for Cabinet & IndexCode for HouseHoldIndex) for table creation.
 * @returns An Observable containing the HTTP POST response from the database.
 */
createTableDatabase(operation: string, body: any): Observable<any>{
  this.path1 = '';
  this.path2 = '';
  this.path3 = '';

  this.path1 = '/create';
  if (operation == "cabinet"){
    this.path2 = '/cabinet';
  }
  else if (operation == "HouseHoldIndex"){
    this.path2 = '/houseindex';
  }
  else if (operation == "note"){
    this.path2 = '/noteindex';
  }
  return this.http.post(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}

/**
 * Create a noteIndex table for a household (one-time setup)
 * @param householdId - The household ID (UHID)
 * @returns Observable containing the creation response
 */
createNoteIndex(householdId: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/create/noteindex`, {
    UHID: householdId
  });
}

/**
 * Create a household cabinet index table (one-time setup)
 * @param householdId - The household ID (UHID)
 * @returns Observable containing the creation response
 */
createHouseholdCabinetIndex(householdId: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/create/houseindex`, {
    UHID: householdId
  });
}

/**
 * Get all grocery lists/notes for a household
 * @param householdId - The household ID (UHID)
 * @returns Observable containing array of all notes
 */
getAllNotes(householdId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/get/note/all`, {
    params: { UHID: householdId.toString() }
  });
}

/**
 * Get a specific note field by ID
 * @param householdId - The household ID (UHID)
 * @param noteId - The note ID (UNID)
 * @param field - Which field to get: 'amount' or 'text'
 * @returns Observable containing the requested field value
 */
getNoteById(householdId: number, noteId: number, field: 'amount' | 'text'): Observable<any> {
  const endpoint = field === 'amount' ? '/get/note/amount' : '/get/note/Text';
  return this.http.get(`${this.apiUrl}${endpoint}`, {
    params: {
      UHID: householdId.toString(),
      UNID: noteId.toString()
    }
  });
}

/**
 * Add a new grocery list/note
 * @param householdId - The household ID (UHID)
 * @param text - The list name/note text
 * @param amount - Optional amount field (default: 0)
 * @param parentId - Optional parent list ID (for items belonging to a list)
 * @returns Observable containing the creation response with new ID
 */
addNote(householdId: number, text: string, amount: number = 0, parentId?: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/add/note`, {
    UHID: householdId,
    text: text,
    amount: amount,
    parentId: parentId || null
  });
}

/**
 * Update the text of a grocery list/note
 * @param householdId - The household ID (UHID)
 * @param noteId - The note ID (UNID)
 * @param newText - The new text value
 * @returns Observable containing the update response
 */
updateNoteText(householdId: number, noteId: number, newText: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/note/text`, null, {
    params: {
      UHID: householdId.toString(),
      UNID: noteId.toString(),
      text: newText
    }
  });
}

/**
 * Update the amount field of a grocery list/note
 * @param householdId - The household ID (UHID)
 * @param noteId - The note ID (UNID)
 * @param newAmount - The new amount value
 * @returns Observable containing the update response
 */
updateNoteAmount(householdId: number, noteId: number, newAmount: number): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/note/amount`, null, {
    params: {
      UHID: householdId.toString(),
      UNID: noteId.toString(),
      itemAmount: newAmount.toString()
    }
  });
}

/**
 * Get all cabinets for a household
 * @param householdId - The household ID (UHID)
 * @returns Observable containing array of all cabinets
 */
getAllCabinets(householdId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/get/cabinet/all`, {
    params: { UHID: householdId.toString() }
  });
}

/**
 * Add a new cabinet to the household cabinet index
 * @param householdId - The household ID (UHID)
 * @param displayName - The cabinet name
 * @param cabinetType - The cabinet type as integer (0=fridge, 1=freezer, 2=cabinet)
 * @returns Observable containing the creation response with new ID and auto-generated cabinetCode
 */
addCabinet(householdId: number, displayName: string, cabinetType: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/add/householdcabinetindex`, {
    UHID: householdId,
    displayName: displayName,
    cabinetType: cabinetType.toString() // Convert to string for VARCHAR field
    // cabinetCode will be auto-generated by server as HCIID
  });
}

/**
 * Update the display name of a cabinet
 * @param householdId - The household ID (UHID)
 * @param cabinetId - The cabinet ID (HCIID)
 * @param newName - The new display name
 * @returns Observable containing the update response
 */
updateCabinetName(householdId: number, cabinetId: number, newName: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/householdcabinetindex/displayname`, null, {
    params: {
      UHID: householdId.toString(),
      HCIID: cabinetId.toString(),
      displayName: newName
    }
  });
}

/**
 * Delete a cabinet from the household
 * @param householdId - The household ID (UHID)
 * @param cabinetId - The cabinet ID (HCIID)
 * @returns Observable containing the delete response
 */
deleteCabinet(householdId: number, cabinetId: number): Observable<any> {
  const body = {
    UHID: householdId.toString(),
    HCIID: cabinetId.toString()
  };
  return this.deleteEntryDatabase('HouseHoldIndexEntry', body);
}

/**
 * Add an item to a cabinet
 * @param cabinetCode - The cabinet code (numeric ID, same as HCIID)
 * @param foodId - The food ID (UFID) from foodtable
 * @param amount - The quantity of the item
 * @param expirationDate - The expiration date (format: YYYY-MM-DD)
 * @returns Observable containing the insertion response
 */
addItemToCabinet(cabinetCode: number, foodId: number, amount: number, expirationDate: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/add/cabinet`, {
    cabinetCode: cabinetCode,
    UFID: foodId,
    amount: amount,
    expirationDate: expirationDate
  });
}

}


