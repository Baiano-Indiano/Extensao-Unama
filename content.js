chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'calculate') {
    const images = document.querySelectorAll('img');
    let totalCarbon = 0;

    images.forEach((img) => {
      const size = img.naturalWidth * img.naturalHeight;
      totalCarbon += size * 0.02; // Supondo 0.02 gramas de carbono por pixel
    });

    sendResponse({ carbon: totalCarbon.toFixed(2) });
  } else if (request.action === 'blockImages') {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      img.remove();
    });

    sendResponse({ message: 'Imagens bloqueadas para reduzir a pegada de carbono.' });
  } else if (request.action === 'blockVideos') {
    const videos = document.querySelectorAll('video');
    
    videos.forEach((video) => {
      video.remove();
    });

    sendResponse({ message: 'Vídeos bloqueados para reduzir a pegada de carbono.' });
  } else if (request.action === 'changeFont') {
    changeFontToDefault();
    sendResponse({ message: 'Fonte alterada para uma fonte padrão de baixo carbono.' });
  }
});

function changeFontToDefault() {
  // Remover estilos de fonte como negrito e itálico
  const elements = document.querySelectorAll('*');
  elements.forEach(element => {
    element.style.fontWeight = 'normal';
    element.style.fontStyle = 'normal';
    element.style.fontSize = '14px'; // Tamanho da fonte menor
  });
  document.body.style.fontFamily = 'Arial, sans-serif';
}
