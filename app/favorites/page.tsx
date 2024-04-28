
import { prisma } from "../libs/prismadb"
import getCurrentUser from "../actions/getCurrentUser";
import { redirect } from "next/navigation";
import FavoritesClient from "./FavoritesClient";




async function getFavorites(userId: string) {
    const data = await prisma.favorite.findMany({
        where: {
            userId: userId,
        }
        , select: {
            room: {
                select: {
                    imgSrc: true,
                    id: true,
                    Favorite: true,
                    price: true,
                    description: true,
                    address: true
                }
            }
        }
    });
    const tData = data.map((item) => item.room);
    return tData
}
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

export default async function FavoriteRoute() {

    const user = await getCurrentUser()
    if (!user) {
        return redirect("/")
    }
    const data = await getFavorites(user?.id)


    return (
        <FavoritesClient data={data} currentUser={user}/>

    )
}

