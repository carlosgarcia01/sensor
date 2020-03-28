export class Penaltyfee {
        price:Number;
        date?:Number;
        vehicleplate:string;
        personId:string;

        constructor(){
            this.date= Date.now();
            this.price=0.0;
            this.vehicleplate="";
            this.personId="";
        }
}