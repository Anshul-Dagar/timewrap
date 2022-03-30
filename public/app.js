import {toJpeg} from "html-to-image";

function downloadThumbnail(e) {
    toJpeg(e.currentTarget, { quality: 0.95 })
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'thumbnail.jpeg';
            link.href = dataUrl;
            link.click();
            link.remove();
        });
}
document.querySelector('.wrapper').addEventListener(
    'click',downloadThumbnail);