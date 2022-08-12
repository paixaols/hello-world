class headerTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <ul class="icons">
                <li><a href="https://www.linkedin.com/in/lucassopaixao/" class="icon brands fa-linkedin" target="_blank" rel="noopener noreferrer"><span class="label">LinkedIn</span></a></li>
                <li><a href="https://github.com/paixaols" class="icon brands fa-github" target="_blank" rel="noopener noreferrer"><span class="label">Github</span></a></li>
                <li><a href="https://www.youtube.com/c/pontodecodigo" class="icon brands fa-youtube" target="_blank" rel="noopener noreferrer"><span class="label">Youtube</span></a></li>
                <li><a href="http://lattes.cnpq.br/1618705091616375" class="icon ai ai-lattes" target="_blank" rel="noopener noreferrer"><span class="label">CV Lattes</span></a></li>
            </ul>
        `
    }
}
customElements.define('header-template', headerTemplate)

class sidebarTemplate extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <!-- Menu -->
            <nav id="menu">
                <header class="major">
                    <h2>Menu</h2>
                </header>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="research.html">Pesquisa</a></li>
                    <li><a href="#">Ensino</a></li>
                    <li><a href="dataviz.html">Visualização de dados</a></li>
                    <li><a href="portfolio.html">Ciência de dados</a></li>
                </ul>
            </nav>

            <hr class="major" />

            <!-- Contato -->
            <section>
                <header class="major">
                    <h2>Contato</h2>
                </header>
                <p>Algumas formas de entrar em contato e saber mais sobre meu trabalho.</p>
                <ul class="contact">
                    <li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/lucassopaixao/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li class="icon brands fa-github"><a href="https://github.com/paixaols" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li class="icon brands fa-youtube"><a href="https://www.youtube.com/c/pontodecodigo" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                    <li class="icon ai ai-lattes"><a href="http://lattes.cnpq.br/1618705091616375" target="_blank" rel="noopener noreferrer">CV Lattes</a></li>
                    <li class="icon solid fa-envelope"><a href="mailto:lucas.lsop@gmail.com">lucas.lsop@gmail.com</a></li>
                    <li class="icon solid fa-home">Rio de Janeiro, RJ, Brasil</li>
                </ul>
            </section>

            <hr class="major" />

            <!-- Footer -->
            <footer id="footer">
                <p class="copyright">&copy; 2022 Lucas Paixão. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
        `
    }
}
customElements.define('sidebar-template', sidebarTemplate)
