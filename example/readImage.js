const sharp = require("sharp");

//Get meta data
async function getMetadata() {
  try {
    const metadata = await sharp("./images/page.jpg").metadata();
    console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}
getMetadata();

