import axios from "axios";
import { bankApiUrl } from "../env/envVars";

const axiosInstance = axios.create({
	baseURL: bankApiUrl,
	headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
