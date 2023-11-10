import {APIGatewayEvent} from "aws-lambda";
import Response from "../models/Response";
import user from "../models/User"
import db from "../models/UserList"
const updateUser=async (event:APIGatewayEvent):Promise<Response>=>{
    try {
        if ( !event.body ) {
            throw new Error("Body Is Mandatory");
        }
        const {cName,cEmail,cPassword}=JSON.parse(event.body)
        if ( !cName || !cEmail || !cPassword ) {
            throw new Error("All Fields Are Mandatory");
        }
        let pos=db.map.get(cEmail) as number
        if ( db.map.has(cEmail) === null || db.map.get(cEmail) === undefined ) throw new Error("User doesn't exist with this email")
        let currUser: user | undefined=db.list.at(pos);
        if ( cName !== '' && currUser ) currUser.name=cName
        if ( cPassword !== '' && currUser) currUser.password=cPassword
        console.log({pos})
        const posType=typeof  pos
        console.log({posType})
        // currUser = db.list[pos];
        return {
            statusCode: 200,
            body: JSON.stringify({
                user: currUser
            })
        }
    } catch (error:any) {
        console.error(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}
export default updateUser;