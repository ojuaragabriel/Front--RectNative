
# Ecoflow

Ecoflow é um projeto desenvolvido no hackathon da residência de software. O aplicativo oferece duas visões principais: a visão do **Administrador** e a visão do **Produtor**. 

Você pode testar as funcionalidades do app através do cadastro como produtor ou administrador, e cada tipo de usuário verá uma interface e funcionalidades específicas.

## Funcionalidades

- **Login**: Tela inicial onde você pode se autenticar.
- **Cadastro**: Você pode criar uma conta como Produtor ou Administrador.
- **Visão do Administrador**: Acesso a funcionalidades administrativas, como gestão de lotes e outros.
- **Visão do Produtor**: Funcionalidades focadas no gerenciamento de produtos, etapas de produção e QR Codes.

## Requisitos

Antes de rodar o projeto, certifique-se de ter o seguinte instalado:

1. **Node.js** (versão >= 18.x)
   - [Instalar Node.js](https://nodejs.org/)

2. **Expo CLI** (caso ainda não tenha)
   - Para instalar o Expo CLI globalmente, use o comando:
     ```bash
     npm install -g expo-cli
     ```

3. **Expo Go** (no seu dispositivo móvel)
   - Instale o app **Expo Go** na Play Store ou App Store para testar no celular.

## Como rodar o projeto

### Passo 1: Clonar o repositório

Primeiro, clone o repositório para a sua máquina:

```bash
git clone https://github.com/seu-usuario/Ecoflow.git
cd Ecoflow
```

### Passo 2: Instalar dependências

Dentro da pasta do projeto, instale as dependências com o seguinte comando:

```bash
npm install
```

### Passo 3: Iniciar o projeto

Para rodar o projeto, utilize o Expo:

```bash
npx expo start
```

Isso irá abrir uma página no navegador com um QR Code. Escaneie esse código com o app **Expo Go** no seu dispositivo móvel para visualizar o aplicativo.

### Passo 4: Navegação e funcionalidades

- Ao abrir o aplicativo, você verá a **tela de login**. Você pode visualizá-la, mas o uso completo começa ao realizar o **cadastro**.
- Ao se cadastrar como **Produtor** ou **Administrador**, você verá diferentes funcionalidades de acordo com o tipo de usuário selecionado.

### Visões do App:

1. **Visão do Administrador**:
   - Funcionalidades para gerenciar lotes e etapas de produção.

2. **Visão do Produtor**:
   - Funcionalidades para gerenciar produtos e visualizar etapas de produção.

## Observações

- A tela de login inicial é apenas para visualização. Para testar as funcionalidades, basta realizar o cadastro.
- O app é totalmente funcional a partir do cadastro e depende da escolha do tipo de usuário (Produtor ou Administrador) para determinar as funcionalidades disponíveis.

## Contribuições

Este projeto foi desenvolvido como parte de um hackathon de residência de software. Contribuições são bem-vindas!
