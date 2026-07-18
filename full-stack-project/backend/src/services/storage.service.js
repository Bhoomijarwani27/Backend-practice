const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {
    
}