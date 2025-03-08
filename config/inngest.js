import { Inngest } from "inngest";
import connectDB from "./db";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "Waki-Ecommerce" });

//create the ingest function to handle user events in database

export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk',
    },
    {
        event:'clerk/user-created',
        
    },
    async({event}) => {
        const {id, first_name, last_name, email_addresses, image_url} = event.data;
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email_address,
            imageUrl: image_url,                                                        
        }

        await connectDB();
        await User.create(userData);
    }
)

//update the user data using the user-updated event of inngest
export const syncUserUpdattion = inngest.createFunction(
    {
        id: 'sync-user-update-from-clerk',
    },
    {
        event:'clerk/user-updated',
        
    },
    async({event}) => {
        const {id, first_name, last_name, email_addresses, image_url} = event.data;
        const userData = {
            _id: id,
            name: `${first_name} ${last_name}`,
            email: email_addresses[0].email,
            imageUrl: image_url,                                                        
        }

        await connectDB();
        await User.findByIdAndUpdate(id, userData);
    }
)

//delete the user data using the user-deleted event of inngest
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'sync-user-deletion-from-clerk',
    },
    {
        event:'clerk/user-deleted',
        
    },
    async({event}) => {
        const {id} = event.data;
        await connectDB();
        await User.findByIdAndDelete(id);
    }
)
