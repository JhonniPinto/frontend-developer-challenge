Olá, Linx. 

Fiz três modelos da mesma landing page, onde o html e css ficaram muito parecidos, o que mudou mais foi a parte do javascript. 

Neste modelo, escrevi tudo da maneira mais básica, sendo um arquivo html, um css e um js. Fazia um tempinho que não escrevia dessa maneira, mas foi muito divertido. Minha linha de raciocínio tratou de lidar com html e css primeiro, em todos os modelos que fiz, usando alguns dados fakes, como nome de produto, descrição e etc. Depois escrevi o JS. Realizei a validação dos campos da newsletter com expressões regulares e seu métodos e criei feedbacks pra erros no preenchimento de campos e feedback positivo, também, pro sucesso no envio dos dados. Eu não cheguei a aprender sobre UX com alguém. Vou ter tal cadeira este semestre, na facul, então me perdoem se algum efeito não for bem o ideal. Usei algum efeito (hover) de botão apenas nos botões da navegação do cabeçalho, usei um efeito de "carregando" para os produtos, enquanto carregam e foi isso. Também tratei erro de forma básica na requisição, alertando o usuário sobre falha no carregamento. Em geral, não achei muito difícil, mas é o meu segundo desafio técnico, então eu posso estar equivocado quanto a alguma coisa. Todos esses detalhes tem nos dois outros modelos também.

Como a vaga dizia que seria um diferencial conhecimento em javascript e frameworks, como react, eu fiz dois outros modelos onde usei react. 

Em um deles gerenciando estado com os produtos usando redux e redux saga para lidar com o assincronismo das requisições na api. Eu estava escrevendo um gerenciamento de estado mais robusto, com reduxsauce e outros detalhes, mas achei que não tivesse necessidade. Fiz alguns testes também, onde não os usei de forma exaustiva, mas apenas alguns deles, mostrando que conseguiria testar o redux, principalmente, caso seja interessante pra vocês. Ah! Usei classe no componente com estado, nesse modelo. 
Repositório: https://github.com/JhonniPinto/linxchallenge-class
Deploy no zeit.com: https://linxchallenge-class.now.sh/

No outro modelo com react, usei componentes funcionais com alguns hooks e useReducer criando hooks como o useGet, por exemplo, pra gerenciar o estado com os produtos. UseReducer não me parece uma abordagem muito comum, pois não ouço muito os meus colegas do curso que fiz falando sobre, mas acho interessante pela parte organizacional de um projeto simples, como esse. Evidente que poderia fazer tudo no componente com useState armazenando os produtos e useEfect responsável pela primeira requisição, mas acredito ter ficado bem mais organizado desta maneira. 
Repositório: https://github.com/JhonniPinto/linxchallenge-functional
Deploy no zeit.com: https://linxchallenge-functional.now.sh/

Bem! Muito obrigado pela oportunidade, pessoal. Espero que gostem.

Caso não tenham ficado bons, espero feedback pra dar uma melhorada.

*Eu acabei não dando os commits com cada feat porque não uso muito git e não tinha feito um fork, até então. Pensei em deixar o que eu não sabia pro final, olhei e vi ser tudo bem simples, mas caso tenham dúvida sobre a minha linha de raciocínio relacionado determinado tópico, me encaminhem um e-mail que respondo na hora.