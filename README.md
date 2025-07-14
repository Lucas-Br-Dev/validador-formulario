# validador-formulario

Este é um validador de formulários desenvolvido com HTML, TailwindCSS (via CDN) e JavaScript puro.

Foi criado com o objetivo de praticar conceitos de validação e responsividade.
## 🚀 Funcionalidades

- Validação de campos obrigatórios (`required`)
- Validação de mínimo de caracteres (`min=`)
- Validação de e-mail (`email`) "utilizando regex"
- Estilização dos campos com erro
- Exibição de mensagens de erro abaixo dos campos
- Limpeza automática dos erros ao tentar reenviar

## 🛠️ Como funciona:

Este validador atua de acordo com as regras regidas por meio dos atributos (`datas-rules`), sendo um código flexivel e reutilizavel.

A interface é totalmente responsiva, e o formulário pode ser facilmente expandido para incluir outras validações, conforme necessário.

As regras são separadas por meio de (` | `) no atributo, como (data-rules="`required|email`").

##Principais desafios

O principal desafio foi em como realizar a validação literal dos dados inseridos no campo, após um periodo de estudo encontrei uma solução segura de se fazer essa validação por meio do front end, que seria usar Expressões Regulares (Regex).
