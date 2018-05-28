import { CollaboratorComponent } from "../component/collaborator/collaborator.component";

export class NoteResponse {

  noteId: number;
  title: string;
  description: string;
  inTrash: Boolean;
  isPin: Boolean;
  isArchive: Boolean;
  color: string;
  reminder: Date;
  label: Set<Label>;
  collaborator: Set<Collaborator>;
  noteImage:any[];
  imageString: string;
}

export class Label {

  labelId: number;
  labelTitle: string;
}

export class Collaborator {
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