
var urls: Array<string> = [
  'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
  'https://www.kkkk1000.com/images/getImgData/gray.gif',
  'https://www.kkkk1000.com/images/getImgData/Particle.gif',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
  'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
  'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
  'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
  'https://www.kkkk1000.com/images/wxQrCode2.png'
];
function loadImg(url: string): Promise<any> {
  return new Promise((resolve: any, reject: any) => {
    console.log(url + '----loading');

    const img = new Image()
    img.onload = function () {
      console.log(url + '----load end');
      resolve();
    }
    img.onerror = reject
    img.src = url
  })
};


// 同步堵塞加载的通道
function queue(): void {
  if (urls.length) {
    loadImg(urls.shift() || '').then(queue)
  }
}

// 开三条通道
for (let i = 0; i < 3; i++) {
  queue()
}