import {APIGatewayProxyEvent, APIGatewayProxyHandler} from 'aws-lambda';
import greet from "./functions/greeting";
import Response from "./models/Response"
import addUser from "./user/addUser";
import getAll from "./user/getAll";
import updateUser from "./user/updateUser";
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const indexHandler:APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<any> => {
    let res:Response;
    try {
        const route:String = `${event.httpMethod} ${event.path}`
        switch (route) {
            case `POST /foo/greet`:
                res=await greet(event)
                break
            case `POST /user/add`:
                res=await addUser(event)
                break
            case `POST /user/get`:
                res=await greet(event)
                break
            case `POST /user/all`:
                res=await getAll(event)
                break
            case `POST /user/update`:
                res=await updateUser(event)
                break
            default:
                throw new Error(`Unsupported route: ${JSON.stringify(event)}`)
        }
    } catch (err) {
        console.error(err);
        res= {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }
    res.headers = {
        'Access-Control-Allow-Origin': '*'
    }
    console.log({res})
    return res
};
