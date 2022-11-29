export interface Peticion {
    count: number;
    rows:  Usuario[];
    pages: number;
}

export interface Usuario {
    id:        string;
    name:      string;
    birthday:  string;
    email:     string;
    image:     string;
    createdAt?: string;
    password?:string;
}
