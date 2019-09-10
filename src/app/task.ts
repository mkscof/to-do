export class Task {
    title: String = "";
    description: String = "";
    urgency: number;
    id: number;
    
    constructor(
        title: String, 
        description: String, 
        urgency: number,
        id: number
    ) {
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.id = id;
     }
}