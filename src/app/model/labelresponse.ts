export class LabelResponse{

    labelId    : number;
    labelTitle : string;
    note       : Set<Note>;
}
export class Note{
    
    noteId: number;
    title:string;
    description:string;
}

