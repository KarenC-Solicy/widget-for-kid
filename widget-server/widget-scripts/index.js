let id
let lang
window.addEventListener('message', (event) => {
    if (event.origin === 'https://kidadvisor.ca' && event.data === 'close-iframe') {
        document.querySelector('.frameContainer').remove()
    }
})
function addBucket() {
    const elem = document.createElement('div')
    elem.className = 'frameContainer'
    elem.style.position = 'absolute';
    elem.style.width = '100%';
    elem.style.height = '100%';
    elem.style.display = 'flex';
    elem.style.justifyContent = 'center';
    elem.style.alignItems = 'center';
    elem.style.top = 0;
    elem.style.opacity = 0;
    elem.innerHTML = `<iframe src="https://kidadvisor.ca/detail-for-ifram/${id}/${lang}" class="widget-iframe" id="widget-iframe" style="width: 100%;
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: 999999;"></iframe>`
    document.getElementsByTagName('body')[0].append(elem)
    setTimeout(() => {
        elem.style.opacity = 1
    }, 3500)
}

setTimeout(() => {
    let elems = document.getElementsByClassName('kidadvisor-bucketlist');
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];

        lang = elem.dataset.lang
        id = elem.href.substring(elem.href.lastIndexOf('/') + 1);
        const mm = document.createElement('div')
        mm.addEventListener('click', () => {
            addBucket()
        })
        mm.style.width = 'fit-content'
        mm.style.display = 'flex'
        mm.style.alignItems = 'center'
        mm.style.marginLeft = '20px'
        mm.style.cursor = 'pointer'
        mm.style.padding = '0 10px'
        mm.style.gap = '10px'

        mm.innerHTML = `<img src="https://kidadvisor.ca/gray-slipper-icon.svg" alt="icon" class="linkIcon" style="width: 32px;
    height: 32px; >
    <h2 class="link" style="color: #22BBF3 !important;
    font-size: 20px !important;
    text-decoration: underline;
    font-weight: 600 !important;">
    Add To Bucket List
    </h2>`
        elem.after(mm)
    }
}, 1000)

