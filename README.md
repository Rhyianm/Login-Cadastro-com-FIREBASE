📖 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de implementar um sistema funcional de login e cadastro de usuários, atendendo aos requisitos da atividade proposta em sala.

A aplicação permite que usuários se registrem e façam login, com os dados sendo devidamente capturados e armazenados.

🔥 Integração com Firebase

Para garantir o armazenamento e gerenciamento seguro das informações dos usuários, foi utilizada a plataforma Firebase, incluindo:

Firebase Authentication → Responsável pela autenticação dos usuários (login e cadastro com e-mail e senha).
Cloud Firestore → Utilizado como banco de dados para armazenar informações adicionais dos usuários.

📊 Dados Coletados

Durante o processo de cadastro, os seguintes dados são coletados e armazenados:

Nome completo
Nome de usuário
E-mail
Data de criação da conta

Essas informações podem ser verificadas diretamente no painel do Firebase, tanto na seção de autenticação quanto no banco de dados Firestore.

⚠️ Observação Importante

Devido à natureza do Firebase (serviço externo em nuvem), não é possível demonstrar diretamente sua execução apenas pelos arquivos presentes neste repositório do GitHub.

No entanto, o funcionamento do sistema pode ser comprovado através:

Do registro de usuários no Firebase Authentication
Dos dados armazenados no Cloud Firestore
Da integração funcional entre a interface de login/cadastro e o banco de dados

🖼️ Evidências de Funcionamento

Para comprovar o correto funcionamento da aplicação e da integração com o Firebase, foi incluída no repositório:

📁 Uma pasta contendo prints e imagens, demonstrando:

Cadastro de usuários sendo realizado
Login funcionando corretamente
Dados sendo armazenados no Firestore
Informações visíveis no painel do Firebase

✅ Conclusão

O sistema cumpre com os requisitos propostos, implementando com sucesso:

Tela de cadastro
Tela de login
Coleta de dados do usuário
Integração com Firebase para autenticação e armazenamento
