import {UserDetails} from './UserDetail';

export class ChatMessage {
  public chatId: string;
  public chatSessionId: string;
  public user: UserDetails;
  public chatMember: string;
  public chatMessage: string;

  constructor() {

  }
}
