export interface UserAddress {
    street: string;
    no: number;
}

export interface User {
    name: string;
    age: number;
    email: string;
    address?: UserAddress;
}