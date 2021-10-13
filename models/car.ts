import icar from './iabstract.car';


export default class Car extends icar {
    model: string;
    color : string;
    type: string;
    constructor(model: string, color: string) {
        super();
        this.model= model;
        this.color = color;
    }
    
    move(): void {
        console.log("move")
    }

    stop(): void {
        console.log("stop")
    }


    getColor(): string {
        return this.color;
    }

    getModel(): string {
        return this.model;
    }

  
}