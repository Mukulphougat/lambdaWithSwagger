import {APIGatewayEvent} from "aws-lambda";
import Response from "../models/Response";
import db from "../models/UserList"
const getAll=async (event:APIGatewayEvent):Promise<Response>=>{
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                users: db.list
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
export default getAll;