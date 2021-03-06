import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";


const app = express();
const logger = morgan("dev");




/**/
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "Hello",
        resave: true,
        saveUninitialized:true,
    })
); 

//cookies and sessions are sparetely
// cookies are way to transfer thing sending the information
//session is on th cookies One is cookies which is way that we use transform information between backend and frontend and the other thing is the session id
//session ides are saved on the cookies cuz cookies are we use to move the session ides


app.use((req,res,next) => {
    res.locals.sexy = "you";
    res.locals.siteName = "Wetube";
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});


app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app 