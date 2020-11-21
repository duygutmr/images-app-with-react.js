import axios from 'axios'


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID cYPbM6Zp9yAmmCBzf2_JUTNlYW1rGT5b4FXvNk4eIMM"
    }
})