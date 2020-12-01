import { RequestHandler, Response } from 'express';

// Models
import Videos from '../models/Videos';

// Get Videos
export const getVideos: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  try {
    const videos = await Videos.find();
    return res.json(videos);
  } catch (error) {
    return res.status(204).json(error);
  }
};

// Get Video
export const getVideo: RequestHandler = async (req, res): Promise<Response> => {
  try {
    const videoFound = await Videos.findById(req.params.id);
    if (!videoFound) res.status(204).json();

    return res.json(videoFound);
  } catch (error) {
    return res.status(204).json(error);
  }
};

// Create Video
export const createVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  try {
    const video = new Videos(req.body);
    const savedVideo = await video.save();
    return res.json(savedVideo);
  } catch (error) {
    return res.status(204).json(error);
  }
};

// Update Video
export const updateVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  try {
    const videoUpdate = await Videos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!videoUpdate) return res.status(204).json();

    return res.json(videoUpdate);
  } catch (error) {
    return res.status(204).json(error);
  }
};

// Delete Video
export const deleteVideo: RequestHandler = async (
  req,
  res
): Promise<Response> => {
  try {
    const videoFound = await Videos.findById(req.params.id);
    if (!videoFound) res.status(204).json();

    await Videos.findByIdAndDelete(videoFound);
    return res.json('Video deleted');
  } catch (error) {
    return res.status(204).json(error);
  }
};
