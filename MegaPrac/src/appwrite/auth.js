import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";


export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // these are the backend services which can be modified later on
    // whether the service is appwrite or firebase or supabase etc.
    // this template is perfect for the appwrite and can be used in production and other projects "save it" 


    // this function can fail therefore we will use try & catch
    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another 
                return this.login({ email, password });
            }
            else { 
                return userAccount;
            }

        } catch (error) {
            console.log("Appwrite service :: create account :: error ", error);
            throw error;
        }

    }

    async login({ email, password }) {
        try {
            // return await this.account.createEmailSession(email, password); // this has changed
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite service :: login :: error ", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            // throw error;
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }


    async logout() {
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            console.log("Appwrite service :: logout :: error ", error)
        }
    }

};
const authService = new AuthService();
// this step is done to return / give the object 

export default authService

