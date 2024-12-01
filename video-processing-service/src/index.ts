import express from "express"; 
import ffmpeg from "fluent-ffmpeg";
import { path as ffmpegPath } from "@ffmpeg-installer/ffmpeg";

// Set FFmpeg path dynamically using @ffmpeg-installer/ffmpeg
ffmpeg.setFfmpegPath(ffmpegPath);

const app = express(); 
app.use(express.json());

app.post("/process-video", (req, res) => {
    // Get path of the input video file from the request body 
    const inputFilePath = req.body.inputFilePath;
    const outputFilePath = req.body.outputFilePath;

    if (!inputFilePath || !outputFilePath) { 
        res.status(400).send("Bad Request: Missing file path.");
    }

    ffmpeg(inputFilePath)
        // -vf working with a video, scale it to 360p
        .outputOptions('-vf', "scale=-1:360") //360p 
        .on("end", () => {
            res.status(200).send("Video processing completed successfully")
        })
        .on("error", (err) => {
            console.log(`An error occurred: ${err.message}`);
            res.status(500).send(`Interval Server Error: ${err.message}`);
        })
        .save(outputFilePath)
    
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Video processing service listening at http://127.0.0.1:${port}/`);   
});