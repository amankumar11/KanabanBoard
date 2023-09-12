import { v4 as uuidv4 } from "uuid";

const taskLimitNumber = 5;

export const columnsRawData = [
  {
    id: 1,
    name: "Resources",
    limit: taskLimitNumber,
    color: "#A162D8 ",
    taskIds: [
      {
        id: uuidv4(),
        text: "Status component",
        idColumn: 1,
        user: "",
      },
      {
        id: uuidv4(),
        text: "2017 goals and KPIs",
        idColumn: 1,
        user: "",
      },
      {
        id: uuidv4(),
        text: "Brand Guide",
        idColumn: 1,
        user: "",
      },
      {
        id: uuidv4(),
        text: "Employee Manual",
        idColumn: 1,
        user: "",
      },
    ],
  },
  {
    id: 2,
    name: "To-Do",
    limit: taskLimitNumber,
    color: "#5A9DF9",
    taskIds: [
      {
        id: uuidv4(),
        text: "Build a better Burito: 7 layers to success",
        idColumn: 2,
        user: "Rakesh",
      },
      {
        id: uuidv4(),
        text: "Nacho ordinary birthday",
        idColumn: 2,
        user: "David",
      },
    ],
  },
  {
    id: 3,
    name: "Doing",
    limit: taskLimitNumber,
    color: "#1387BE",
    taskIds: [
      {
        id: uuidv4(),
        text: "tacko truck world tour",
        idColumn: 3,
        user: "Aman",
      },
      {
        id: uuidv4(),
        text: "Global franchise opportunities",
        idColumn: 3,
        user: "Rohan",
      },
    ],
  },
  {
    id: 4,
    name: "Done",
    limit: taskLimitNumber,
    color: "#FF5F6F",
    taskIds: [
      {
        id: uuidv4(),
        text: "Chrome extension design",
        idColumn: 4,
        user: "David",
      },
      { id: uuidv4(), text: "Focus Group", idColumn: 4, user: "Aryan" },
      {
        id: uuidv4(),
        text: "Eco-friendly napkins",
        idColumn: 4,
        user: "Stefan",
      },
    ],
  },
];
