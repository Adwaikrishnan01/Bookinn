
import { prisma } from "../libs/prismadb"
import getCurrentUser from "../actions/getCurrentUser";
import { redirect } from "next/navigation";
import RoomCard from "../components/Room/RoomCard";



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

export default async function FavoriteRoute() {

    const user = await getCurrentUser()
    if (!user) {
        return redirect("/")
    }
    const data = await getFavorites(user?.id)


    return (
        <section className="container mx-auto px-5 lg:px-10 mt-10">
            <h2 className="text-3xl font-semibold tracking-tighter">Your favorites</h2>
            {
                data.length === 0 ? (<h2 className="text-3xl font-semibold tracking-tighter">
                    your favorites is empty</h2>) :
                    (<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
                    gap-8 mt-8">
                        {
                            data.map((item: any) => (
                                <RoomCard key={item?.id}
                                    data={item} />
                            ))}
                    </div>)
            }
        </section>

    )
}

