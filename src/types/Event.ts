import { Dayjs } from "dayjs";

export default interface Event {
    name: string;
    date: Dayjs | string;
    uid: string;
    id: string
}