export function createItem(info) {
    const item = document.createElement('li');
    item.innerHTML = info;
    return item;
}