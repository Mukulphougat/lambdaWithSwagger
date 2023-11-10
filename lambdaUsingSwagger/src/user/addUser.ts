import {APIGatewayEvent} from "aws-lambda";
import Response from "../models/Response";
import user from "../models/User"
import db from "../models/UserList"
const addUser=async (event:APIGatewayEvent):Promise<Response>=>{
    try {
        if ( !event.body ) {
            throw new Error("Body Is Mandatory");
        }
        const {cName,cEmail,cPassword}=JSON.parse(event.body)
        if ( !cName || !cEmail || !cPassword ) {
            throw new Error("All Fields Are Mandatory");
        }
        if( db.set.has(cEmail) ) {
            throw new Error("User Exists With This Email");
        }
        db.set.add(cEmail)
        db.map.set(cEmail,db.id)
        const currUser:user={
            id: db.id++,
            name: cName,
            email: cEmail,
            password: cPassword
        }
        db.list.push(currUser)
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
export default addUser;