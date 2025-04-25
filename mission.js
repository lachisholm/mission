const themeSelector = document.querySelector('#themeSelector');
function changeTheme() {
    if (themeSelector.value === 'dark'){
        document.body.classList.add('dark');
        document.querySelector('img').src = 'byui-logo_white.webp';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('img').src = 'byui-logo_blue.webp';
    }
}


themeSelector.addEventListener('change',changeTheme);
