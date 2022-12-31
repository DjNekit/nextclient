export interface IUser {
  id: number
  name: string
  email: string
}

export interface IMessage {
  id: number
  author_id: number
  content: string
  created_date: Date
  status: 'unread' | 'read' | 'delete'
}

export interface IChat {
  id: number
  author_id?: number
  isPrivate: boolean
  members: IUser[]
  messages: IMessage[]
  lastMessage?: string
}