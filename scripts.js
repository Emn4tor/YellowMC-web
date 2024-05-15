

const copyIPBtn = document.getElementById("copyIPBtn");

//html <button onclick="copyIP()">Play Now</button>




function copyIP() {
    const ip = "yellowmc.de";
    navigator.clipboard.writeText(ip);
    const copiedLinkBox = document.querySelector(".copiedlinkbox");
    copiedLinkBox.style.display = "block";
    copiedLinkBox.addEventListener('animationend', () => {
        copiedLinkBox.style.display = 'none';
    });
}

//css in styles.css
// .copiedlinkbox {
//     display: none;
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     background-color: #333;
//     color: #fff;
//     padding: 10px 0;
//     text-align: center;
//     z-index: 1000;
// }
