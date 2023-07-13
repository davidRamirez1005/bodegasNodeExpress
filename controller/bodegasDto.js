/*eslint-disable*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Transform, Expose } from 'class-transformer';
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
let nombreReguex = /^[a-z A-Z]+$/;
let numeroReguex = /^[0-9]+$/g;
let fechaReguex = /^[0-9]{4}(-[0-9]{2}){2}$/;
export class DatoBodegas {
    constructor(p1, p2, p3, p4, p5, p6, p7, p8) {
        this.NOM = p1;
        this.IDRES = p2;
        this.EST = p3;
        this.CREBY = p4;
        this.UPDBY = p5;
        this.CREAT = p6;
        this.UPDAT = p7;
        this.DELAT = p8;
    }
}
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value }) => {
        let data = nombreReguex.test(value);
        if (data)
            return (value);
        else
            throw { status: 401, message: "El valor de nombre no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", String)
], DatoBodegas.prototype, "NOM", void 0);
__decorate([
    Expose({ name: "id_responsable" }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (data)
            return Number(value);
        else
            throw { status: 401, Error, message: "El valor de id_responsable no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", Number)
], DatoBodegas.prototype, "IDRES", void 0);
__decorate([
    Expose({ name: "estado" }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (data)
            return Number(value);
        else
            throw { status: 401, message: "El valor de estado no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", Number)
], DatoBodegas.prototype, "EST", void 0);
__decorate([
    Expose({ name: "created_by" }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (data)
            return Number(value);
        else
            throw { status: 401, message: "El valor de estado no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", Number)
], DatoBodegas.prototype, "CREBY", void 0);
__decorate([
    Expose({ name: "update_by" }),
    Transform(({ value }) => {
        let data = numeroReguex.test(value);
        if (data)
            return Number(value);
        else
            throw { status: 401, message: "El valor de update_by no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", Number)
], DatoBodegas.prototype, "UPDBY", void 0);
__decorate([
    Expose({ name: "created_at" }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (data)
            return (value);
        else
            throw { status: 401, message: "El valor de update_by no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", String)
], DatoBodegas.prototype, "CREAT", void 0);
__decorate([
    Expose({ name: "updated_at" }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (data)
            return (value);
        else
            throw { status: 401, message: "El valor de updated_at no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", String)
], DatoBodegas.prototype, "UPDAT", void 0);
__decorate([
    Expose({ name: "deleted_at" }),
    Transform(({ value }) => {
        let data = fechaReguex.test(value);
        if (data)
            return (value);
        else
            throw { status: 401, message: "El valor de deleted_at no cumple con el formato esperado. (>_<)" };
    }),
    __metadata("design:type", String)
], DatoBodegas.prototype, "DELAT", void 0);
