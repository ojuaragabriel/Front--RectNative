import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  // Contêiner principal da tela
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Cor de fundo branca
  },

  // Caixa superior (área da logo e título principal)
  boxTop: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    paddingHorizontal: 60, // Espaço superior
  },

  // Caixa intermediária (área do subtítulo)
  boxMid: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Espaço interno lateral
  },

  // Caixa inferior (área dos botões)
  boxBottom: {
    flex: 2,
    justifyContent: 'flex-start', // Alinha os itens no topo
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 150, // Espaço no topo
  },
  
  tetoText:{
    fontWeight: 'bold',
    fontSize: 20,        // Tamanho de fonte pequeno
    color: '#333333',    // Cor do texto
    marginBottom: 40,
    marginTop: 120,
  },

  // Estilo da logo
  logoImage: {
    width: 200, // Largura da imagem da logo
    height: 200, // Altura da imagem da logo
    resizeMode: 'contain', // Mantém a proporção da imagem
  },

  // Texto do título principal ("Bem-vindo ao Ecoflow")
  titleText: {
    fontSize: 20, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
    color: '#333333', // Cor do texto
    marginTop: 30, // Reduza ou remova o espaçamento acima (de 20 para 10)
    marginBottom: 20},

  // Texto do subtítulo ("Uma nova forma de garantir a qualidade...")
  subtitleText: {
    fontSize: 16, // Tamanho da fonte
    color: '#665665', // Cor do texto
    textAlign: 'center', // Alinha o texto ao centro
    marginTop: 10,
    marginBottom:0
    
  },

  // Estilo do botão "Entrar"
  button: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#388E3C', // Verde do botão "Entrar"
    marginBottom: 10, // Espaço inferior entre os botões
  },

  // Texto dentro do botão "Entrar"
  buttonText: {
    color: '#FFFFFF', // Cor do texto (branco)
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
  },

  // Estilo do botão "Criar Conta"
  secondaryButton: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0E0E0', // Cinza claro do botão "Criar conta"
    marginTop: 0, // Remove espaço superior
  },

  // Texto dentro do botão "Criar Conta"
  secondaryButtonText: {
    color: '#333333', // Cor do texto (cinza escuro)
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
  },
});
