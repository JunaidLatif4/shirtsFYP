import axios from "axios"



const Instance = axios.create({
    baseURL:"http://localhost:80"
}) 

export default Instance