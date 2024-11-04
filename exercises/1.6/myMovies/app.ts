import express from "express";

import usersRouter from "./routes/users";
import filmRouter from "./routes/films";

let getRequestCount = 0;


const app = express();

app.use((req, _res, next) => {
    if (req.method === 'GET') {
        getRequestCount++;
        console.log(`GET counter: ${getRequestCount}`);
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/films", filmRouter);

export default app;
