export default interface IUser {
    _id:string;
    name: string;
    surname?: string;
    email: string;
    password: string;
    roles: string[];
    userImg?: string;
    phone?: string;
    position?: string;
    workAddress?: string;
    aboutMe?: string;
    nameSystem?: string;
    qrCode: string;
    userId: string;
    isActive: boolean;
}

export interface IUserUpdateReq {
    name: string;
    surname: string;
    file: string;
    position: string;
    phone: string;
    nameSystem: string;
    workAddress: string;
    aboutMe: string;
    id: string
}