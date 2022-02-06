const fs = require('fs');

const CreateFile = (directory, fileName, fileData = '') => {
  try {
    const HTML_FILE = `${directory}/${fileName}`;

    fs.writeFile(HTML_FILE, fileData, (error) => {
      if (error) {
        throw error;
      }
      console.log(`Arquivo '${fileName}' criando com sucesso, acesse a pasta '${directory}' para visualizá-lo!`);
    });
  } catch (error) {
    console.error(error);
  }
};
module.exports = CreateFile;