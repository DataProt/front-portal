window.addEventListener('keydown', function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 75)) {
        if (document.getElementById('searchid') !== document.activeElement) {
            e.preventDefault();
            console.log('Search is not in focus');
            document.getElementById('searchid').focus();
        } else {
            console.log('Default action of CtrlF');
            return true;
        }
    }
});