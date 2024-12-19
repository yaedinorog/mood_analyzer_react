import "./style.css"
import Header from "./Components/simpleHeader";


const MainText = () => {
    return(
        <div class="main-container">
            <h2 class="main-title">Условия пользования</h2>
            <p class="main-text">Настоящие Условия пользования (далее — «Условия») регулируют отношения между вами (пользователем) и MOOD (далее — «мы», «наш», «компания») при использовании нашего сайта [адрес сайта]. Пожалуйста, внимательно ознакомьтесь с этими Условиями перед использованием наших услуг.</p>
            <div class="main-content">
                <div class="main-item">
                    <h3 class="main-item-title">1. Принятие условий</h3>
                    <p class="main-item-text">Используя наш сайт, вы соглашаетесь с настоящими Условиями пользования. Если вы не согласны с каким-либо из положений настоящих Условий, пожалуйста, не используйте наш сайт.
                        Мы оставляем за собой право в любое время изменять, обновлять или дополнять эти Условия. Все изменения будут опубликованы на этой странице, и дата последнего обновления будет указана внизу страницы. Ваше продолжение использования сайта после внесения изменений означает ваше согласие с обновленными Условиями.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">2. Использование сайта</h3>
                    <p class="main-item-text">Вы обязуетесь использовать сайт только в законных целях, в соответствии с применимыми законами и нормативными актами.</p>
                    <p class="main-item-text">Запрещается использовать наш сайт для следующих целей:</p>
                    <ul>
                        <li>Нарушение прав интеллектуальной собственности или других прав третьих лиц;</li>
                        <li>Распространение вирусов, вредоносных программ или других материалов, которые могут повредить наш сайт или системы пользователей;</li>
                        <li>Публикация или распространение материалов, которые могут нарушать закон или моральные нормы;</li>
                        <li>Попытки несанкционированного доступа к системам, данным или сети, принадлежащей компании.</li>
                    </ul>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">3. Регистрация и учетная запись</h3>
                    <p class="main-item-text">Для доступа к некоторым функциям сайта может потребоваться регистрация и создание учетной записи. Вы обязуетесь предоставить точную и актуальную информацию при регистрации, а также поддерживать вашу учетную запись в актуальном состоянии.
                        Вы несете ответственность за сохранность вашего пароля и не передавать доступ к своей учетной записи третьим лицам. В случае утраты контроля над вашей учетной записью, вы обязуетесь незамедлительно уведомить нас.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">4. Конфиденциальность и защита данных</h3>
                    <p class="main-item-text">Мы уважаем вашу конфиденциальность и обязуемся защищать ваши персональные данные в соответствии с нашей Политикой конфиденциальности. Используя наш сайт, вы соглашаетесь с условиями сбора, обработки и хранения данных, изложенными в Политике конфиденциальности.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">5. Интеллектуальная собственность</h3>
                    <p class="main-item-text">Все материалы на сайте, включая текст, графику, логотипы, изображения, программное обеспечение, видео и другие ресурсы, являются нашей интеллектуальной собственностью или принадлежат третьим лицам, и защищены авторским правом, товарными знаками и другими правами на интеллектуальную собственность.
                        Запрещается использовать материалы сайта без нашего предварительного согласия, за исключением случаев, прямо предусмотренных законодательством.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">6. Ответственность</h3>
                    <p class="main-item-text">Мы не несем ответственности за любые прямые или косвенные убытки, возникшие в результате использования (или невозможности использования) нашего сайта, включая, но не ограничиваясь, утратой данных, упущенной выгодой или повреждением оборудования.
                        Мы также не несем ответственности за действия третьих лиц, размещающие ссылки на наш сайт или предоставляющие свои услуги через наш сайт.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">7. Прекращение доступа</h3>
                    <p class="main-item-text">Мы оставляем за собой право временно или навсегда приостановить доступ к сайту или его функциям для вас без предварительного уведомления, если будет установлено нарушение вами настоящих Условий.</p>
                </div>
                <div class="main-item">
                    <h3 class="main-item-title">8. Применимое законодательство</h3>
                    <p class="main-item-text">Настоящие Условия регулируются и толкуются в соответствии с законодательством РФ, независимо от коллизионных норм. Все споры, возникающие в связи с использованием нашего сайта, подлежат разрешению в судах РФ.</p>
                </div>
            </div>
        </div>
    );
}

export default function Use() {
    return(
        <>
            <Header />
            <MainText />
        </>
    );
}