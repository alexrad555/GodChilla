const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images/');
  },
  filename(req, file, cb) {
    const dateTime = new Date();
    cb(null, `${dateTime.toISOString()}-${file.originalname}`);
  },
});

//TODO dateTime монжо заменить на id user для перезаписи старых аватаор

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    // null - the place where error
  }
};

module.exports = multer({ storage, fileFilter });
