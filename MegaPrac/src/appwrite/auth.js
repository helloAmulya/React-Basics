import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }


    // wrapper code, which can be modified later on for different backend service

    async createAccount({ email, password, name }) {

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // if the account exist , login the user
                return this.login(email, password);

            } else {
                return userAccount;
            }

        } catch (error) {
            console.log("AppwriteService :: CreateAccount :: Error ", error)
            throw error

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("AppwriteService :: login :: Error ", error)
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
            // Logged in
        } catch (error) {
            console.log("AppwriteService :: getCurrentUser :: Error ", error)
        }
        return null;
    }


    async logout() {
        try {
            // deleteSession for single session
            return await this.account.deleteSessions()

        } catch (error) {
            console.log("AppwriteService :: logout :: Error ", error)

        }
    }

}


const authService = new AuthService()
export default authService