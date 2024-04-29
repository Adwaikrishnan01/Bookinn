
import getCurrentUser from "../actions/getCurrentUser";
import { redirect } from "next/navigation";
import FavoritesClient from "./FavoritesClient";
import { getFavorites } from "../actions/favoritesAction";





const FavoritePage=async()=>{
    const user = await getCurrentUser()
    if (!user) {
        return redirect("/")
    }
    const data = await getFavorites(user?.id)


    return (
        <FavoritesClient data={data} currentUser={user}/>

    )
}
export default FavoritePage
