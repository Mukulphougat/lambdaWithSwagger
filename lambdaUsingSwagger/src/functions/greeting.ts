import {APIGatewayProxyEvent} from "aws-lambda";
import Response from "../models/Response"
const greet=async (event:APIGatewayProxyEvent):Promise<Response>=>{
    try {
        if ( !event.body ) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Body Is Mandatory!"
                })
            }
        }
        const {name}=JSON.parse(event.body)
        if ( !name ) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Name Is Mandatory!"
                })
            }
        }
        return {
            statusCode: 200,
            body: JSON.stringify({
                greeting: `Hello ${name}`
            })
        }
    } catch (error:any){
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}
export default greet