import { ClassRoom } from "./class-room";
import { Student } from "./student";

export class Result {
    public resultId?:number;
    public term1?:number;
    public term2?:number;
    public term3?:number;
    public result?:string;
    public term1Status?:string;
    public term2Status?:string;
    public term3Status?:string;
    public student?:Student; 
    public classDetail?:ClassRoom;
}
