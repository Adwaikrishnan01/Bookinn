// import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { PrismaClient } from "@prisma/client"
// const prisma=new PrismaClient()

// export default async function getCurrentUser() {
//     try {
//       const session = await getServerSession(authOptions)
  
//       if (!session?.user?.email) {
//         return null;
//       }
  
//       const currentUser = await prisma.user.findUnique({
//         where: {
//           email: session.user.email as string,
//         }
//       });
  
//       if (!currentUser) {
//         return null;
//       }
  
//       return {
//         ...currentUser}
//       }catch(error){
//           alert(error)
//       }
// }