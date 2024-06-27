import { NotFoundError } from "../errors/customErrors.js";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";


// GET ALL JOBS
export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await Job.find({createdBy: req.user.userId});
  res.status(StatusCodes.OK).json({ jobs });
};

// CREATE JOBS
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// GET SINGLE JOB
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

// UPDATE JOB
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ msg: "job modified", job: updateJob });
};

// DELETE JOB
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  // console.log(job);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
