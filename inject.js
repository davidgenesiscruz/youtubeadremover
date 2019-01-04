MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const videoAdObserver = new MutationObserver((mutations) => {
    Array.from(mutations).find((mutation) => {
        const found = Array.from(mutation.addedNodes)
            .filter((node) => node instanceof Element)
            .find((node) => {
                const overlayButton = node.querySelector('.ytp-ad-overlay-close-button');
                const videoAdButton = node.querySelector('.ytp-ad-skip-button');

                const button = overlayButton || videoAdButton;
                if (button) {
                    button.click();
                    return true;
                }
            });

        return found != undefined;
    });
});

const videoAd = document.querySelector('.video-ads');
if (videoAd) {
    videoAdObserver.observe(videoAd, { childList: true, subtree: true });
}

