export type Theme = "light" | "dark"

export interface ServiceType{
    id:number,
    title: string,
    description:string,
    processes:process[]
}

interface process{
    title: string,
    description:string
}