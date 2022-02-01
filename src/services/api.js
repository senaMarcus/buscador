import axios from "axios"

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" //baseURL nunca muda, sempre a mesma
})

export default api