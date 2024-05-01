## **Atividade de Identificação e Correção de erros em uma aplicação com ligação em Banco de Dados proposta por José Lucas Barbosa na 5 edição do camp da empresa Ioasys.**
###### Aluno: Gustavo José Vieira Trilha: Back-End


<p>O desafio se trata da identificação e correção de possiveis erros da aplicação disponibilizada. No total foram detectados e corrigidos 3 erros na aplicação nos quais serão detalhados a seguir: <br\>
<h3>🧰 Ferramentas Utilizadas:</h3><blockquote><ul>
<li> <b>Node.js</b>  <br />  </li>
<li> <b>Sequelize (ORM para Integração com o Banco de Dados)</b> <br />  </li>
<li> <b>Bcrypt (Framework para criptografia)</b> <br />  </li>

<ul></blockquote>
<br />
<h3>1️⃣ Primeiro Erro Encontrado: <b>Endpoint de Login vulnerável a SQL Injection</b> </h3><blockquote><ul>

<li> <b>Caso queira saber mais sobre o asssunto: </b>  <br />  </li>
<li> <b><a href = "https://media.blackhat.com/bh-us-11/Sullivan/BH_US_11_Sullivan_Server_Side_WP.pdf">📚Material de Apoio sobre SQL Injection</a></b> <br />  </li>
<li> <b><a href = "https://doc.esdoc.org/github.com/sequelize/sequelize/manual/querying.html">📚Material de Apoio sobre Operadores em Sequelize</a></b> <br />  </li>
<ul></blockquote><br/>


 
![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/190ea01e-d788-462f-864e-4bae8578fb76) <br/>
<li>O código possui um erro conhecido como SQL Injection através de seu endpoint de login, por ele o invasor pode manipular dados a fim de encontrar uma abertura no banco de dados e suas aplicações.</li>

<h3>💡 Solução Encontrada</h3>

![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/e377841e-3f74-4bee-80af-361ac8e392a0)

<li>Operadores em Sequelize são amplamente utilizados para a criação de comparações mais complexas, e nesse caso eles foram utilizados a fim de uma dificultação da tecnica de SQL Injection por invasores.</li>

<h3>2️⃣ Segundo Erro Encontrado: <b>Endpoint dede Listagem de Usuários Expondo Dados Sensíveis</b></h3><blockquote><ul>

<li> <b>Caso queira saber mais sobre o asssunto: </b>  <br />  </li>
<li> <b><a href = "https://media.blackhat.com/bh-us-11/Sullivan/BH_US_11_Sullivan_Server_Side_WP.pdf">📚Material de Apoio sobre Sensitive Data Exposure</a></b> <br />  </li>
<li> <b><a href = "https://training.genexus.com/en/learning/pdf/role-based-access-control-rbac-pdf">📚Material de Apoio sobre Role-Based Access Control (RBAC)</a></b> <br />  </li>
<ul></blockquote><br/>
  
![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/012b7e4f-d921-4a45-af59-8c9a734da04c)

<li>Data Exposure é um erro muito recorrente em projetos com muitas rotas e que não tenham a devida proteção das mesmas. Existem diveras formas de proteção de dados, mas para fins didaticos nesse caso usaremos a definição de autenticação de usuários</li>

<h3>💡 Solução Encontrada</h3>

![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/722ac6de-6e00-47b9-8958-ff686f24294c)

<li>A forma de preservar dados sensiveis nesse caso foi a autenticação de usuários, nos quais serão mostrados determinados dados sensiveis apenas a pessoas devidamente autorizadas e autenticadas</li>

<h3>3️⃣ Terceiro Erro Encontrado: <b>Endpoint de Detalhe do Usuário Logado Expondo Senha</b></h3><blockquote><ul>
<li> <b>Caso queira saber mais sobre o asssunto: </b>  <br />  </li>
<li> <b><a href = "https://medium.com/@shital.pimpale5/how-to-store-password-and-credentials-in-nodejs-application-fd6420e4db6c">📚Material de Apoio sobre Password Exposure</a></b> <br />  </li>
<li> <b><a href = "https://www.okta.com/blog/2019/03/what-are-salted-passwords-and-password-hashing/">📚Material de Apoio sobre Criptografia</a></b> <br />  </li>
<ul></blockquote><br/>

![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/0c037ed0-64ea-4982-8aa9-cc8289b6cb9a)

<li>Password Exposure é comum em casos onde se é passado mais informações que se é necessario. Nesse caso, uma maneira simples que irá solucionar a maioria dos problemas sobre é a amostragem e manipulação de dados que sejam essenciais para determinado caso ou até mesmo a criptografia de senhas por meio de bibliotecas externas</li><br/>

<h3>💡 Solução Encontrada</h3>

![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/7f2a0403-8ad4-4447-855c-fec0d3beaf01)

![image](https://github.com/GustavoJVvieira/TesteSeguranca_CampIoasys/assets/164119202/fde7d9e0-a2ad-418a-822e-7e1371835f26)

<li>Na primeira imagem, é possível observar que houve a alteração das informações a serem manipuladas para prevenir vazamento de dados. Também é possível observar, na segunda imagem, que houve a criptografia das senhas pela biblioteca em JavaScript bcrypt. Dessa forma, mesmo que ocorra o vazamento da senha, ela estará criptografada.</li>

### Conclusão

Ademais, os devidos desafios propostos foram resolvidos e todos os requisitos devidamentesolucionados. <br />
No mais, tenho a agradecer pela proposta de desafio que colocou em prova meus conhecimentos sobre o assunto. <br />
Em caso de quaisquer dúvidas sobre o projeto feito, disponibilizo meus meios de comunicação para resolução das mesmas:

<a href = "mailto:gustavojvieira2004@gmail.com">📧 Email</a> <br />
<a href = "https://www.instagram.com/_vi_eira/">📷 Instagram </a>
