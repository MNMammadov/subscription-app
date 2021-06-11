export interface IUser {
    _id?: string,
    email: string,
    createdAt: string
}

export interface IAuthUserPayload {
    email: string,
    password: string
}