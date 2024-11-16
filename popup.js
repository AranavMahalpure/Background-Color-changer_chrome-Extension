document.getElementById('changeColorBtn').addEventListener('click', () => {
    console.log("Button clicked!");
  
    // Execute the changeBackgroundColor function on the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) {
        console.error("No active tab found.");
        return;
      }
  
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: changeBackgroundColor // Pass the function directly
      });
    });
  });
  
  // Standalone function for changing background color
  function changeBackgroundColor() {
    console.log("Changing background color...");
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  }
  