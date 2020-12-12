const openItem = item => {
    const container = item.closest(".team-item");
    const contentBlock = container.find(".team-content");
    const textBlock = contentBlock.find(".team-content__block");
    const reqHeight = textBlock.height();

    contentBlock.height(reqHeight);

}

$('.team__title').click(e => {
    const $this = $(e.currentTarget);

    openItem($this);
}

)