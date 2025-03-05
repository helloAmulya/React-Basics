import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;// or storage

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({ title, slug, content, featuredimage, status, userId }) {
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
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        // we take slug outside to take the document id (slug will give the id)

        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,  // slug is the document id , it will act like that
                {
                    title,
                    content,
                    featuredimage,
                    status,

                }

            )

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }

    }

    async deletePost(slug) {
        // only the id is required to delete 

        try {

            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            // only return true if deleted and other things can be handled in frontend

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;// if any error
        }

    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
                // getDocument to get only single doc
                // use listDocuments for all 

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }


    async getPosts(queries = [Query.equal('status', ['active'])]) {

        // we need to create indexes in the appwrite else we cannot apply queries here
        //  because it requires a key i.e 'status'

        try {

            // we will use query because the documents with no active status will also come
            // therefore use Query.equal('status', ['active']),

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                /*
                  [
                    Query.equal('title', ['Avatar', 'Lord of the Rings']
                  ]
                  as we have defined this earlier, only pass the ->  queries
                */
            )

        } catch (error) {
            console.log("Appwrite service :: allPost :: error", error);
            return false;
        }

    }

    //  file upload service , later on shift this to another file
    // for the files we require the bucket id

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true

        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // we can directly pass, without using async, as it is very fast and return no promise
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
            /* 
                these can also be given
                0, // width (optional)
                0, // height (optional)
                ImageGravity.Center, // gravity (optional)
                0, // quality (optional)
                0, // borderWidth (optional)
                '', // borderColor (optional)
                0, // borderRadius (optional)
                0, // opacity (optional)
                -360, // rotation (optional)
                '', // background (optional)
                ImageFormat.Jpg // output (optional)
            */
        )
    }


}
const service = new Service();
// this step is done to return / give the object 
export default service