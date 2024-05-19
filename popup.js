document.getElementById('calculate').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'calculate' }, (response) => {
      document.getElementById('result').innerText = `Carbono estimado: ${response.carbon} gramas`;
    });
  });
});

document.getElementById('blockImages').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'blockImages' }, (response) => {
      document.getElementById('result').innerText = response.message;
    });
  });
});

document.getElementById('blockVideos').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'blockVideos' }, (response) => {
      document.getElementById('result').innerText = response.message;
    });
  });
});

document.getElementById('changeFont').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'changeFont' }, (response) => {
      document.getElementById('result').innerText = response.message;
    });
  });
});
