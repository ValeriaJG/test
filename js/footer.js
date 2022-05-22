
class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        this.innerHTML = `
        <footer class="block_3">
            <div class="block fotcont">
                <ul id="all_footer_contact">
                    <!-- <li class="footer_contact">г. Киев, м. Тараса Шевченко<br>ул. Новоконстантиновская 1В</li> -->
                    <li>г. Киев, метро Тараса Шевченко<br>ул. Новоконстантиновская 1В</li>
                    <li>График работы:<br>ПН-ПТ с 9:00 до 17:00</li>
                    <li>Телефоны для связи:<br>
                        <a href="tel:+380503523951">(050) 352-39-51</a><br>
                        <a href="tel:+380986026936">(098) 602-69-36</a>
                    </li>
                    <li>E-mail для связи:<br>
                        <a href="mailto:garkanov@voliacable.com"> garkanov@voliacable.com </a>
                    </li>
                    <li><a href="https://www.facebook.com/steklo.kiev"><img src="/assets/img/fb.png" alt=""></a></li>
                </ul>
                <div class="site">
                    <a href="mailto:garkanovavaleria@gmail.com">Заказать сайт</a>
                </div>
            </div>
        </footer>

        `
    }
}

customElements.define('new-footer', Footer)
