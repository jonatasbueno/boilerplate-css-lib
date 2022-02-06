const FsExtra = require('fs-extra')
const CreateFile = require('./helpers/create-file.helper')

const FOLDER = 'playground';
const CSS_FOLDER = `${FOLDER}/assets/css`;

const HTML = `
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta
    http-equiv="X-UA-Compatible"
    content="IE=edge"
  >
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Playground</title>
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

</body>
</html>
`;

// Criando pasta playground e o arquivo index.html
FsExtra.ensureDir(FOLDER)
  .then(() => {
    CreateFile(FOLDER, 'index.html', HTML);
  }).catch(error => console.error(error));

// Criando pasta assets/css e arquivo style.css
FsExtra.ensureDir(CSS_FOLDER)
  .then(() => {
    CreateFile(CSS_FOLDER, 'style.css');
    FsExtra.copy('src/assets', `${FOLDER}/assets`); // Copiando arquivos da pasta assets (Ativos)
  }).catch(error => console.error(error));