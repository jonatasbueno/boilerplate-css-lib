# Core CSS

É uma biblioteca CSS que conta com diversas classes e ferramentas.

## Principais Tópicos
* [NPM Scripts](#npm-scripts)
* [Arquitetura ITCSS](#arquitetura-itcss)
* [Metodologia BEM](#metodologia-bem)
* [Documentação SASSDOC](#documentacao-sassdoc)

## <a id="npm-scripts"></a> NPM Scripts
Compilando arquivos **SCSS** em uma folha de estilo **CSS**:
```console
$ npm run dev
```

Caso queira deixar a compilação automática basta inserir o **:watch** no final:
```console
$ npm run dev:watch
```

Gerando uma documentação em **HTML** usando a biblioteca do SASS**DOC**:
```console
$ npm run sassdoc
```

Verificando a qualidade do  **SASS/CSS**, esse comando conta com dois sub-comandos para alterar a visualização no console:
```console
$ npm run lint | $ npm run lint:table | $ npm run lint:vs
```

Gerando um build final dos arquivos em **SASS**:
```console
$ npm run build
```

## <a id="arquitetura-itcss"></a> Arquitetura ITCSS
**ITCSS** significa *Inverted Triangle CSS* (CSS do Triângulo Invertido) e ajuda a organizar os arquivos CSS do seu projeto de forma que você possa lidar melhor com as especificações CSS, como global namespace, cascata (cascade) e especificidade de seletores.

Um dos princi­pios-chave do **ITCSS** é que ele separa sua base de código CSS em várias camadas, que assumem a forma de um triângulo invertido:

* **Configurações (Settings) -** Camada usada com pré-processadores e contém definições de fonte, cores e etc;

* **Ferramentas (Tools) -** Camada de mixins e funções usadas globalmente.

* **Genérico (Generic) -** Camada responsável por redefinir e/ou normalizar estilos, definições de tamanho de caixa e etc. Esta é a primeira camada que gera CSS real;

* **Elementos (Elements) -** Estilo para elementos HTML básicos (**Ex.:** H1, A e etc.). Eles vém com o estilo padrão do navegador para que possamos redefinir;

* **Objetos (Objects) -** Camada para seletores baseados em classe que definem padrões de design não decorados, por exemplo, objeto de mídia conhecido de **OOCSS**;

* **Componentes (Components) -** Camada responsável por definir comportamentos de UI. É aqui que a maior parte do nosso trabalho ocorre e nossos componentes;

* **Trunfos ou Utilitários (trumps or Utilities) -** Camada de utilitários e classes auxiliares com capacidade de substituir tudo o que vem antes no triângulo (Por exemplo: Ocultar classe auxiliar).

**Nota:** É importante não gerar nenhum **CSS** nas **2** primeiras camadas;
### **Referências**:
Caso queira aprofundar-se mais na arquitetura do **ITCSS**:
* [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
* [Manage large CSS projects with ITCSS](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528)

## <a id="metodologia-bem"></a> Metodologia BEM
**BEM** significa *Block Element Modifier* (Bloco, Elemento e Modificador) é uma metodologia que ajuda você a criar componentes reutilizáveis e compartilhamento de código no desenvolvimento front-end.

### **Bloco**
Entidade autônoma que é significativa por si só.

Exemplos:
* header
* container
* menu
* checkbox
* input

### **Elemento**
Uma parte de um bloco que não tem significado autônomo e estão semanticamente ligada a seu bloco.

Exemplos:
* menu__item
* list__item
* checkbox__caption
* header__title

### **Modificador**
Uma bandeira em um bloco ou elemento. Use-os para mudar a aparência ou o comportamento.

Exemplos:
* menu__item--disabled
* list__item--highlighted
* checkbox__caption--checked
* header__title--size-large

### **Referências**:
Caso queira aprofundar-se mais na metodologia do **BEM**:
* [Get BEM](http://getbem.com/)
* [BEM: Guia do Padrão](https://desenvolvimentoparaweb.com/css/bem/)

## <a id="documentacao-sassdoc"></a> Documentação SASS**DOC**
Para a documentação do SASS iremos usar a biblioteca SASS**DOC**, com ela poderemos construir de maneira ágil uma documentação elegante e organizada. 

### Grupos
Para organizar o código criamos grupos especí­ficos para separar melhor a documentação:

* **Componentes (components) -** Grupo específico para separar as classes referente aos componentes;
* **Ferramentas (tools) -** Grupo específico para separar os Mixins e as Funções;
* **Ferramentas Privadas (private-tools) -** Grupo específico para separar os Mixins e as Funções de uso interno;
* **Genérico (generic) -** Grupo específico para elementos mais genéricos;
* **Configurações (settings) -** Grupo específico para os arquivos referente as constantes e os mapas;
* **Não Classificados (undefined) -** Quando nenhum grupo for atribuí­do na documentação, esse será atribuí­do automaticamente.

### Uso do Grupo
Para atribuir o arquivo a um grupo, basta usar o código **@group** e o nome dele:
```group
/// @group components
```
### **Referências**:
Como a documentação é bem extensa segue uns links para ajudar na utilização do SASS**DOC**:
* [SASS**DOC**](http://sassdoc.com/)
* [Documentação](http://sassdoc.com/getting-started/)