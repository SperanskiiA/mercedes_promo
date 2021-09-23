const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const tabsTitleElems = document.querySelectorAll('[data-tabs-title]');
const contentElems = [...tabsFieldElems, ...tabsTitleElems];


for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', () => {
        tabsHandlerElems.forEach(btn =>
            btn.classList.remove('design-list__item_active'));
        btn.classList.add('design-list__item_active');

        contentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler || content.dataset.tabsTitle === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')
            } else {
                content.classList.add('hidden')
            }
        })
    })
}