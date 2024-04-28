import { prisma } from "../libs/prismadb"
export async function removeFavoriteItem(uId:string,user:string){
    try{
        await prisma.favorite.deleteMany({ 
            where:{
            userId:user,
            roomId:uId
            }
        }) 
    }catch(error){
        console.log(error)
    }
}