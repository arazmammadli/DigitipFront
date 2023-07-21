export interface ITransactions {
    status:boolean;
    lists:ITransactionsList[]
};

interface ITransactionsList {
    text:string;
}

export interface ILogin {
    email:string;
    password:string;
}