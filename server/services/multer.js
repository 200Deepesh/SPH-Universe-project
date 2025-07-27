import multer from "multer";
import mongoFileStorage from "./storageEngine.js";
import File from "../models/file.js";

const fileStorage = mongoFileStorage({
    mongoModel: (req, file, cb) => {
        cb(null, File);
    },
});

const upload = multer({ storage: fileStorage, limits: { fileSize: 1048576 } });
export default upload;