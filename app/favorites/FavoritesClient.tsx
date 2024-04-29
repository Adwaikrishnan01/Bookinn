"use client"
import RoomCard from "../components/Room/RoomCard";
import { AiOutlineDelete } from "react-icons/ai";
import { redirect } from "next/navigation";

const FavoritesClient = ({data,currentUser}:any) => {
    
     if(!currentUser){
       return redirect('/')
}  
    return (  
        <section className="container mx-auto px-4 lg:px-6 mt-10">
            <h2 className="text-3xl font-semibold tracking-tighter">Your favorites</h2>
            {
                data.length === 0 ? (<h2 className="text-3xl font-semibold tracking-tighter">
                    your favorites is empty</h2>) :
                    (<div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3
                    lg:grid-cols-4 2xl:grid-cols-6 gap-8">
                        {
                            data.map((item: any,index:number) => (<div key={index}>
                                <RoomCard key={item?.id}
                                    data={item} />
                                    <div className="w-full bg-red-500 rounded-md mt-1 py-2 cursor-pointer hover:opacity-90" 
                                    onClick={()=>""}>
                                        <AiOutlineDelete className="mx-auto"/>
                                        </div>
                                    </div>
                            ))}
                    </div>) 
            }
        </section>
    );
}
 
export default FavoritesClient;