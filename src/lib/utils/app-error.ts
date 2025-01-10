
export default class AppError{
    protected message:string='';
    protected statuscode:number=500;
    constructor(mesaage:string,statuscode:number){
            this.message=mesaage;
            this.statuscode=statuscode;
    }
}