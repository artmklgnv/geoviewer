import axios from "axios";

export class BucketsApi {
    constructor() {
        //this.hostUrl = `https://localhost:7277`;
        //this.hostUrl = `http://localhost:5001`;
        this.hostUrl = `https://geometryviewerapi.artmklgnv.repl.co`;
    }

    async getTest() {
        try {
            var response = await axios.get(this.hostUrl + `/Buckets/test`);
            var result = response.data;
            console.log(result);
            return result;
        } catch (error) {
            return "";
        }
    }

    async getLastBucket() {
        try {
            var response = await axios.get(
                this.hostUrl + `/Buckets/GetLastBucket`
            );
            var result = response.data;
            return result;
        } catch (error) {
            return null;
            console.log("Cannot get Bucket from backend");
        }
    }

    /**
     * @returns {number|null} id
     */
    async getLastBucketId() {
        try {
            let response = await axios.get(
                this.hostUrl + `/Buckets/GetLastBucketId`
            );
            let result = response.data;
            if (result == "") {
                return null;
            } else {
                return result;
            }
        } catch (error) {
            return null;
        }
    }
}
