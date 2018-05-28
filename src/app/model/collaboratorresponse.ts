export class CollaboratorResponse {

     collaboratorId: number;
     sharedUser: User;
     note: Note;
   
}
export class User {
     email: string;
}

export class Note {
     noteId: number;
}