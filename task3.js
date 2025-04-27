const http = require('http');

const counters = {
    home: 0,
    about: 0
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        counters.home++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`<p>Вы посетили эту страницу ${counters.home} раз.</p>
            <a href="/about"> Перейти на страницу обо мне</a>`);
    } else if (req.url === '/about') {
        counters.about++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(` <p>Вы посетили эту страницу ${counters.about} раз.</p>
            <a href="/"> Перейти на страницу главная</a>`);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Страница 404<h1/>');
    }   
})

const port = 3000;

server.listen(port);