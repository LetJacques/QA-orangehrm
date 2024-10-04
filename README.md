# QA-orangehrm

# Descrição
Este repositório contém testes automatizados desenvolvidos em Cypress para o sistema Orange HRM. O objetivo é verificar a funcionalidade de diferentes módulos da aplicação, incluindo autenticação, gerenciamento de informações de usuários e outras interações importantes para garantir a qualidade do software.

# Estrutura do Projeto
O projeto segue a estrutura de Page Object Model (POM) para garantir um código mais limpo e organizado. Cada página da aplicação tem seu próprio arquivo de classe para encapsular os seletores e funções de interação com a página.

# Diretórios:
cypress/e2e/: Contém os arquivos de teste (spec files) que realizam os testes automatizados.
cypress/fixtures/: Contém os arquivos JSON com dados de entrada para os testes.
cypress/pages/: Contém as classes que representam as páginas da aplicação.
cypress/support/: Contém arquivos utilitários que oferecem suporte aos testes.

# Testes
Os testes cobrem os seguintes fluxos funcionais:
-Login de Usuário: Verificação do processo de login com credenciais válidas e inválidas.
-Edição de Informações de Usuário: Testes para edição de dados pessoais na seção "My Info", incluindo campos como nome, sobrenome, apelido, etc.
-Validação de Drop-Downs: Seleção de opções em campos do tipo select (exemplo: seleção de idioma).

# Tecnologias Usadas
Cypress: Framework de testes automatizados para realizar testes end-to-end.
JavaScript: Linguagem usada para a automação dos testes.
Node.js: Ambiente de execução dos testes.

# Instalação
Pré-requisitos
Node.js instalado na máquina.
Cypress instalado globalmente ou no projeto.
# Passos
Clone este repositório:
git clone https://github.com/LetJacques/QA-orangehrm.git
Acesse o diretório do projeto:
cd QA-orangehrm
Instale as dependências do projeto:
npm install
Execute os testes com o Cypress:
npx cypress open
