import axios from "axios";

const BASE_URL = "https://eshop-react-node-app.herokuapp.com/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGE2MWI1OWIzN2Q4MGM0ZjQxMWYxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTAxOTk0OSwiZXhwIjoxNjQ1Mjc5MTQ5fQ.0_aIY5l1d2S2U8Kx4F8wYR1c2HSgz08z8PvWEpXpx4c"
export const publicRequest = axios.create({
    baseURL:BASE_URL,
    header:{Access_Control_Allow_Origin:"*"},
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})