// const conf = {

//     // we do this for better approach and it provides confirmation that these are in string
//     // and for better access through the env file
//     // in production grade this will help a lot

//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// }

// export default conf;


const conf = {

    // we do this for better approach and it provides confirmation that these are in string
    // and for better access through the env file
    // in production grade this will help a lot

    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;