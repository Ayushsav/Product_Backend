import express from "express";
import userRouter from "./UserRouter";
import candidateRouter from "./Admin/CandidateRouter";
import designationRouter from "./Admin/DesignationRouter";
import ReasonRouter from "./Admin/ReasonRouter";
import educationRouter from "./Admin/EducationRouter";
import tagRouter from "./Admin/TagRouter";
import ClientRouter from "./Admin/ClientRouter/ClientRouter";
import regionRouter from "./Admin/RegionRouter/RegionRouter";
import degreeRouter from "./Admin/DegreeRouter";
import clientsecurityRouter from "./Admin/ClientSecurityRouter";
import securityRouter from "./Admin/Security/index";

const indexRouter = express.Router();
indexRouter.use("/user", userRouter);
indexRouter.use("/designation", designationRouter);
indexRouter.use("/candidate", candidateRouter);
indexRouter.use("/reason", ReasonRouter);
indexRouter.use("/education/", educationRouter);
indexRouter.use("/tag", tagRouter);
indexRouter.use("/client", ClientRouter);
indexRouter.use("/region", regionRouter);
indexRouter.use("/degrees", degreeRouter);
indexRouter.use("/client-security", clientsecurityRouter);
indexRouter.use("/security", securityRouter);

export default indexRouter;
