export {};

interface IResponse<T> {
  status: number;
  message: string;
  data: T;
}

declare global {
  interface IEvent {
    _id: ObjectId;
    title: string;
    content: string;
    start_date: string;
    end_date: string;
    reg_date: string;
  }

  interface IEventResponse extends IResponse<IEvent[]> {}

  type EventPayloadType = Pick<IEvent, "title" | "content" | "_id">;

  interface ISignUpPayload {
    email: string;
    password: string;
    username: string;
  }

  interface ICheckDuplicateNamePayload {
    name: string;
  }
}
