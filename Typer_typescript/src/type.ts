type BaseType = {
    requred : boolean
}
 type Bruker = {
    id: number

 }

 type Demo ={

    age: number
 }

type Users = Record<string, Bruker>

type Combined = Bruker & Demo