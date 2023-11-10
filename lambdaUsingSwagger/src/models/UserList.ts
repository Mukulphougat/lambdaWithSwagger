import User from "./User";
let userId:number=0
const userList:User[]=[]
const userSet:Set<String>=new Set()
const userMap:Map<String,Number>=new Map()
const db={
    id: userId,
    list: userList,
    map: userMap,
    set: userSet
}
export default db