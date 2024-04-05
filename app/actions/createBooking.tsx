import {prisma} from "@/app/libs/prismadb";
const createBooking = async(formData:FormData) => {
    try {
        const userId = formData.get("userId") as string;
        const roomId = formData.get("roomId") as string;
        const startDate = formData.get("startDate") as string;
        const endDate = formData.get("endDate") as string;
        const totalPrice = 100;

        console.log("form data", userId, roomId, startDate, endDate);

        const data = await prisma.bookings.create({
            data: {
                userId: userId,
                roomId: roomId,
                startDate: startDate,
                endDate: endDate,
                totalPrice: totalPrice
            }
        });

        return data; // Return the created booking data
    } catch (error) {
        console.error("Error creating booking:", error);
     // Throw an error to be handled by the caller
    } 
}

export default createBooking;