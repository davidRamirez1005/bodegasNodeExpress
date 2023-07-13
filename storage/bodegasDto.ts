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
let nombreReguex = /^[a-z A-Z]+$/
let numeroReguex = /^[0-9]+$/g
let fechaReguex = /^[0-9]{4}(-[0-9]{2}){2}$/

export class DatoBodegas{
    @Expose({name:"nombre"})
    @Transform(({value})=>{
        let data =  nombreReguex.test(value)
        if(data) return (value)
        else throw {status: 401, message:"El valor de nombre no cumple con el formato esperado. (>_<)"}
    })
    NOM:string
    @Expose({name:"id_responsable"})
    @Transform(({value})=>{
        let data =  numeroReguex.test(value)
        if(data) return Number(value)
        else throw {status: 401,Error, message:"El valor de id_responsable no cumple con el formato esperado. (>_<)"}
    })
    IDRES :number
    @Expose({name:"estado"})
    @Transform(({value})=>{
        let data =  numeroReguex.test(value)
        if(data) return Number(value)
        else throw {status: 401, message:"El valor de estado no cumple con el formato esperado. (>_<)"}
    })
    EST:number
    @Expose({name:"created_by"})
    @Transform(({value})=>{
        let data =  numeroReguex.test(value)
        if(data) return Number(value)
        else throw {status: 401, message:"El valor de estado no cumple con el formato esperado. (>_<)"}
    })
    CREBY:number
    @Expose({name:"update_by"})
    @Transform(({value})=>{
        let data =  numeroReguex.test(value)
        if(data) return Number(value)
        else throw {status: 401, message:"El valor de update_by no cumple con el formato esperado. (>_<)"}
    })
    UPDBY:number
    @Expose({name:"created_at"})
    @Transform(({value})=>{
        let data =  fechaReguex.test(value)
        if(data) return (value)
        else throw {status: 401, message:"El valor de update_by no cumple con el formato esperado. (>_<)"}
    })
    CREAT:string
    @Expose({name:"updated_at"})
    @Transform(({value})=>{
        let data =  fechaReguex.test(value)
        if(data) return (value)
        else throw {status: 401, message:"El valor de updated_at no cumple con el formato esperado. (>_<)"}
    })
    UPDAT:string
    @Expose({name:"deleted_at"})
    @Transform(({value})=>{
        let data =  fechaReguex.test(value)
        if(data) return (value)
        else throw {status: 401, message:"El valor de deleted_at no cumple con el formato esperado. (>_<)"}
    })
    DELAT:string
    constructor(p1:string, p2:number, p3:number,p4:number, p5:number, p6:string, p7:string, p8:string){
        this.NOM=p1;
        this.IDRES=p2;
        this.EST=p3;
        this.CREBY=p4;
        this.UPDBY=p5;
        this.CREAT=p6;
        this.UPDAT=p7;
        this.DELAT=p8;
    }
}