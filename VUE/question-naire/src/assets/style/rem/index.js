(function (doc) {
    let douEl = document.documentElement;
    doc.addEventListener('DOMContentLoaded', recalc)
    function recalc() {
        let clientWidth = douEl.clientWidth;
        docEl.style.fontSize = 20 * (width / 320) + 'px';
    }
})(document)

