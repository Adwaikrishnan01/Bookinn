
 import { prisma } from "../libs/prismadb"
// export default async function removeFavoriteItem (uId: string, user: string): Promise<void>{
//     try {
//         await prisma.favorite.deleteMany({ 
//             where: {
//                 userId: user,
//                 roomId: uId
//             }
//         });
//     } catch (error) {
//         console.log(error)
        
//     }
// };

export const  getFavorites=async(userId: string) =>{
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

