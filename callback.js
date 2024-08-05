function countdown(counts) {
    function timer(n, callback) {
        document.body.innerHTML = n;
        setTimeout(function() {
            callback();
        }, 1000);
    }

    if (counts > 0) {
        timer(counts, function() {
            countdown(counts - 1);
        });
    } else {
        document.body.innerHTML = 'Happy Independence Day';
    }
}
countdown(10);
