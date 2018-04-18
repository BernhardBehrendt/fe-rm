if (!!Reveal) {
    Reveal.addEventListener('processMap', function () {
        var stations =

            [
                [130, -36, 3.2],
                [40, -36, 3.2],
                [-60, 11, 3.2],
                [-60, -2.5, 3.2],
                [-60, -17.5, 3.2],
                [-60, -70, 3.2],
                [-140, 105, 3.2],
                [-140, 80, 3.2],
                [-140, 50, 3.2],
                [-140, 20, 3.2],
                [-140, -10, 3.2],
                [-140, -20, 3.2],
                [-140, -40, 3.2],
                [-140, -50, 3.2],
                [-140, -80, 3.2],
                [-140, -100, 3.2],
                [-140, -120, 3.2],
                [-140, -170, 3.2],
                [-140, -190, 3.2]
            ]
                .reverse();

        var element = $('img.processMap');

        function goToNextPoint() {

            var currentStation = stations.pop();
            var transformation = 'transform:translateX(' + (currentStation[0]) + '%) translateY(' + (currentStation[1]) + '%) scale(' + (currentStation[2] || 1) + ');';

            element.attr('style', transformation);
        }

        goToNextPoint();

        var stationsInterval = setInterval(function () {
            goToNextPoint();

            if (stations.length === 0) {
                clearInterval(stationsInterval);
            }

        }, 3000);
    });
}