import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
	* @name getEntryDatabase
	* @param operation the type of operation that is gonna be performed:
	* ID: returns the ID for a specific entry based on a unique variable.
	*
	* User: returns information about a user entry based on the User's internal ID, use the subOperation to specify.
	*
	* Food: returns information about a food entry based on the Food's internal ID, use the subOperation to specify.
	*
	* HouseHold: returns information about a household entry based on the HouseHold's internal ID, use the subOperation to specify.
	*
	* Cabinet: returns information about a cabinet entry based on the Cabinet's internal ID, use the subOperation to specify.
	*
	* HouseHoldCabinet: returns a cabinet's internal ID code based on which householdindex it is located in.
	*
	* Recipe: returns information about a recipe entry based on the Recipe's internal ID, use the subOperation to specify.
	* @param subOperation the subOperation is used to specify which information is wanted.
	*
	* ID: User, Food, Household1, Household2, Household3, Household4, Household5, Household6.
	*
	* User: FirstName, LastName, UserName, AccessCode, EMail.
	*
	* Food: BarCode, DisplayName.
	*
	* HouseHold: DisplayName, InviteCode, HouseHoldMember1, HouseHoldMember2, HouseHoldMember3, HouseHoldMember4, HouseHoldMember5, HouseHoldMember6.
	*
	* Cabinet: ItemDisplayName, ItemAmount, ItemExpirationDate.
	*
	* HouesHoldCabinet: CabinetCode.
	*
	* Recipe: DisplayName, Link.
	* @param body the body object for the SQL statements, specific properties must be included.
	*
	* ID: User = email, Food = barCode, Household1-6 = userID.
	*
	* User: UUID.
	*
	* Food: UFID.
	*
	* HouseHold: UHID.
	*
	* Cabinet: cabinetCode & UCID.
	*
	* HouseHoldCabinet: UHID & UHCIID.
	*
	* Recipe: URID
	* @returns the results of the SQL statements.
	*/
getEntryDatabase(operation: String, subOperation: String, body: any): Observable<any>{
	if (operation == "ID"){
		this.path2 = '/id'
		switch (subOperation) {
				case "User":
					this.path1 = '/get/user';
					break;
				case "Food":
					this.path1 = '/get/food';
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
				this.path2 = 'firstname';
				break;
			case "LastName":
				this.path2 = 'lastname';
				break;
			case "UserName":
				this.path2 = 'username';
				break;
			case "AccessCode":
				this.path2 = 'accesscode';
				break;
			case "EMail":
				this.path2 = 'email';
				break;
			default:
				break;
		}
	}
	else if (operation == "Food"){
		this.path1 = '/get/food';
		switch (subOperation){
			case "BarCode":
				this.path2 = 'barCode';
				break;
			case "DisplayName":
				this.path2 = 'displayName';
				break;
			default:
				break;
		}
	}
	else if (operation == "HouseHold"){
		this.path1 = '/get/household';
		switch (subOperation){
			case "DisplayName":
				this.path2 = 'displayName';
				break;
			case "InviteCode":
				this.path2 = 'inviteCode';
				break;
			case "HouseHoldMember1":
				this.path2 = 'householdmember';
				this.path3 = '/1';
				break;
			case "HouseHoldMember2":
				this.path2 = 'householdmember';
				this.path3 = '/2';
				break;
			case "HouseHoldMember3":
				this.path2 = 'householdmember';
				this.path3 = '/3';
				break;
			case "HouseHoldMember4":
				this.path2 = 'householdmember';
				this.path3 = '/4';
				break;
			case "HouseHoldMember5":
				this.path2 = 'householdmember';
				this.path3 = '/5';
				break;
			case "HouseHoldMember6":
				this.path2 = 'householdmember';
				this.path3 = '/6';
				break;
			default:
				break;
		}
	}
	else if (operation == "Cabinet"){
		this.path1 = '/get/cabinet';
		switch (subOperation){
			case "ItemDisplayName":
				this.path2 = '/itemdisplayname';
				break;
			case "ItemAmount":
				this.path2 = '/itemamount';
				break;
			case "ItemExpirationDate":
				this.path2 = '/itemexpirationdate';
				break;
			default:
				break;
		}
	}
	else if (operation == "HouseHoldCabinet"){
		this.path1 = '/get/householdcabonetindex';
		switch (subOperation){
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
	return this.http.get(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}

updateEntryDatabase(operation: String, subOperation: String, body: any): Observable<any>{
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
        this.path2 = '/useremail';
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
      case "ItemDisplayName":
        this.path2 = '/itemdisplayname';
        break;
      case "ItemAmount":
        this.path2 = '/itemamount';
        break;
      case "ItemExpirationDate":
        this.path2 = '/itemexpirationdate';
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
        this.path2 = '/recipelink';
        break;
      default:
        break;
    }
  }

  return this.http.put(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}


/**
 *
 * @param operation which kind of opeeration is whiched to be performed:
 * (User, Food, Household, Cabinet, HouseholdCabinet)
 *
 * @param body the SQL body object. the body must include all information parsed into the database properly labelled. check the server.js file for more information if needed.
 * @returns confirmation or error for the SQL command.
 */
insertIntoDatabase(operation: String, body: any): Observable<any>{
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

	return this.http.post(`${this.apiUrl}${this.path1}${this.path2}${this.path3}`, body);
}

deleteEntryDatabase(operation: String){}

createTableDatabase(operation: string){}


}
