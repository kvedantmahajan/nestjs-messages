import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }
  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(message: string) {
    return this.messagesRepo.create(message);
  }
}
