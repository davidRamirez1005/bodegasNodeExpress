import { Type, Transform, Expose } from 'class-transformer'
/*
    "nombre": "string",
    "id_responsable": bigint,
    "estado": tyninit,
    "created_by": bigint,
    "update_by": bigint,
    "created_at": "timeStamp",
    "updated_at": timeStamp,
    "deleted_at": timeStamp
*/
export class user{
    @Expose({name:"id"})
    @Transform(({value})=>{
        let data =  /^[0-9]+$/g.test(value)
        if(data) return Number(value)
        else throw {status: 401, message:"El valor no cumple con el formato esperado. (>_<)"}
    })
    ID:number
    @Expose({name:"nombre"})
    NOM :string
    @Expose({name:"edad"})
    AGE:number
    constructor(p1:number, p2:string, p3:number){
        this.ID=p1;
        this.NOM=p2;
        this.AGE=p3;
    }
}