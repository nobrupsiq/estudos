// HISTORY
// É possível acessarmos o histórico de acesso do browser em uma sessão específica através do window.history. O objeto history possui diferentes métodos e propriedades.

// window.history.pushState(null, null);

// // PUSHSTATE()
// // A parte interessante de manipularmos o history é que podemos modificar o histórico e adicionar um novo item. window.history.pushState(obj, title, url).

// // Em obj podemos enviar um objeto com dados
// // mas o seu uso é restrito por isso geralmente utilizamos
// // null. O title ainda é ignorado por alguns browsers, também
// // utilizamos null nele. O url que é parte importante.

// window.history.pushState(null, null, 'sobre.html');

// window.addEventListener('popstate', () => {
//     console.log('teste');
// });

// // POPSTATE
// // O evento popstate pode ser adicionado ao objeto window. Assim podemos executar uma função toda vez que o usuário clicar no botão de voltar ou próximo.

// window.addEventListener('popstate', () => {
//     fetchPage(window.location.pathname);
// });

// // FETCH E HISTORY
// // Ao puxarmos dados via fetch api, o url da página continua o mesmo. Ao combinar fetch com a history api conseguimos simular uma navegação real entre páginas, sem a necessidade de recarregamento da mesma.

// async function fetchPage(url) {
//     const pageResponse = await fetch(url);
//     const pageText = await pageResponse.text();
//     window.history.pushState(null, null, url);
// }

const links = document.querySelectorAll('a');

function handleclick(event) {
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
    document.querySelector('.content').innerHTML = 'Carregando';
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
    console.log(newHtml);
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
});

links.forEach((link) => {
    link.addEventListener('click', handleclick);
});
