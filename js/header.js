class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
        <header>
            <div class="block header">
                <a href="index.html" id="menu-inline">
                    <div class="logo"> </div>
                </a>
                <nav class="menu menu-contact" id="menu-inline">
                    <ul id="contact">
                        <li class="contact_up">
                            <a href="tel:+380503523951">(050) 352-39-51</a><br>
                                <a href="tel:+380986026936">(098) 602-69-36</a>
                        </li>
                        <li class="contact_up">График работы<br>Пн-Пт 9-17</li>
                        <li class="contact_up">г.Киев м.Тараса Шевченка<br>ул. Новоконстантиновская 1В</li>
                    </ul>
                </nav>
                <div class="header_line"></div>

                <nav id="menu menu-inline" class="menu menu-list">
                    <div class="menu_burger" id="menu_burger">
                        <hr class="line">
                        <hr class="line">
                        <hr class="line">
                    </div>
                    <ul id="all_menu" class>
                        <li>
                            <a href="index.html">
                                <div class="menu_down active_1">
                                    <div class="txt"> Главная </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="services.html">
                                <div class="menu_down active_2">
                                    <div class="txt"> Услуги</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="about.html">
                                <div class="menu_down active_3">
                                    <div class="txt"> О нас </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="photogallery.html">
                                <div class="menu_down active_4">
                                    <div class="txt"> Фотогалерея </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                                <div class="menu_down active_5">
                                    <div class="txt"> Контакты </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        `
    }
}

customElements.define('new-header', Header)