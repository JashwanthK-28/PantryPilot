import { currentUser } from "@clerk/nextjs/dist/types/server";
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const strapiApiKey = process.env.STRAPI_API_KEY || "";


export const checkUser = async () => {
    const user = await currentUser();

    if(!user){
        console.log("Not a user");
        return null;
    }
    if(!strapiApiKey){
        console.log("Strapi API Key not found");
        return null;
    }

    const subscription ="free";

    try {
        const existingUserResponse = await fetch(`${strapiUrl}/api/users?filters[clerkId][$eq]=${user.id}`,{
            headers:{
                "Authorization": `Bearer ${strapiApiKey}`
            },
            cache: "no-store"
        });
        const existingUser = await existingUserResponse.json();
        if(existingUser.length > 0){
            return existingUser[0];
        }
        else{
            const newUserResponse = await fetch(`${strapiUrl}/api/users`,{
                method: "POST",
                headers:{
                    "Authorization": `Bearer ${strapiApiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.emailAddresses[0].emailAddress,
                    clerkId: user.id,
                    subscription: subscription
                })
            });
            const newUser = await newUserResponse.json();
            return newUser;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
    
};