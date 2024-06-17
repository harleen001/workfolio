// Prevent scrolling initially
document.documentElement.style.overflowY = 'hidden';

// Start loading animation
startLoadingAnimation();

async function startLoadingAnimation() {
    const loadingAnimation = document.getElementById('hns_lottie');

    // Play animation after a delay (2 seconds in this case)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Play Lottie animation
    loadingAnimation.play();

    // Wait for animation to complete
    await new Promise(resolve => {
        loadingAnimation.addEventListener('complete', resolve);
    });

    // Animation complete, hide animation and reveal page content
    loadingAnimation.classList.add('hide');
    revealPageContent();
}

function revealPageContent() {
    const reTransitionTiles = document.querySelectorAll('.page_transition_background_tile');
    const transitionTiles = document.querySelectorAll('.loading_transition_background_tile');
    const awwwwardsEntry = document.getElementById('awwwards');
    const loadingAnimationWrapper = document.getElementById('loading_animation');

    // Use requestAnimationFrame for batch DOM changes
    requestAnimationFrame(() => {
        gsap.to(reTransitionTiles, {
            height: '0vh',
            duration: 0,
            delay: 0,
            stagger: {
                each: 0.1,
                from: 'left'
            }
        });

        gsap.to(transitionTiles, {
            height: '0vh',
            duration: 0.5,
            delay: 0.3,
            stagger: {
                each: 0.1,
                from: 'left'
            },
            onComplete: () => {
                awwwwardsEntry.style.display = 'inherit';
                loadingAnimationWrapper.style.height = '0px';
                document.documentElement.style.overflowY = 'auto';
            }
        });
    });
}
