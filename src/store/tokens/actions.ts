export type Action = {type: "ADD_TOKEN" | "ADD_ID", payload: string}

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
})

//pega o id do user no login
export const addId = (id: string): Action => ({
    type: "ADD_ID",
    payload: id
})