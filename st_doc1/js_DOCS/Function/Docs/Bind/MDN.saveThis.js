function LateBloomer() {
    this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Объявляем цветение с задержкой в 1 секунду
LateBloomer.prototype.bloom = function() {
    window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function() {
    console.log('Я прекрасный цветок с ' +
                    this.petalCount + ' лепестками!');
};
