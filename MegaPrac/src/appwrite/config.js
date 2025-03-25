import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite"

export class Service {
    client = new Client();
    databases;
    storage; // or bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredimage, status, userId })
    // { title, slug, content, featuredimage, status, userId }, object destructuring in js, we extract required fields
    {
        try {

            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                    // { title, slug, content, featuredimage, status, userId },
                    //  this is the actual data passed to be stored in the appwrite database
                }
            );

        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    // async createPost({ title, slug, content, featuredimage, status, userId }) {
    //     try {
    //         return await this.databases.createDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             ID.unique(), // ✅ Generate unique ID
    //             { title, slug, content, featuredimage, status, userId }
    //         );
    //     } catch (error) {
    //         console.log("Appwrite service :: createPost :: error", error);
    //     }
    // }

    async updatePost(slug, { title, content, featuredimage, status }) {
        // take the id of the post i.e. the slug

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                },

            )

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }

    }

    async deletePost(slug) {
        // we only need the docment id to delete the post 
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
            // only return true if deleted and other things can be handled in frontend


        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }


    }


    // async getPost(slug) {
    //     try {
    //         await this.databases.getDocument(
    //             conf.appwriteDatabaseId,
    //             conf.appwriteCollectionId,
    //             slug,
    //         )

    //     } catch (error) {
    //         console.log("Appwrite serive :: getPost :: error", error);
    //     }
    // }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return null; // Return null if post is not found
        }
    }
    

    // now like get post, we will get all the posts, but with the condition that are the active or not
    // therefore we will use Query 

    async allPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: allPost :: error", error);
            return false;
        }
    }





    //  this is for uploading a file, i.e. the image

    async uploadFile(file) {

        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                // document.getElementById('uploader').files[0]
            );

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }


    async deleteFile(fileId) {

        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,

            // 0, // width (optional)
            // 0, // height (optional)
            // ImageGravity.Center, // gravity (optional)
            // 0, // quality (optional)
            // 0, // borderWidth (optional)
            // '', // borderColor (optional)
            // 0, // borderRadius (optional)
            // 0, // opacity (optional)
            // -360, // rotation (optional)
            // '', // background (optional)
            // ImageFormat.Jpg // output (optional)
        );
    }


}

const service = new Service();
export default service;