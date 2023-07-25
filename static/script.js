function detectEmoji() {
    var textInput = document.getElementById('textInput').value;
    var container = document.querySelector('.container');
    var emojiOutput = document.getElementById('emojiOutput');
    var loadingAnimation = document.getElementById('loadingAnimation');
    var header1 = document.getElementById('Header1');
    var header2 = document.getElementById('Header2');
    var header3 = document.getElementById('Header3');
    const canvas = document.getElementById('#myCanvas')
    const jsConfetti = new JSConfetti({ canvas })

    // Define your text-to-emoji mappings
    var emojiMappings = {
        'happiness': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Grinning%20Face.png',
        'sadness': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Frowning%20Face.png',
        'love': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Heart-Eyes.png',
        'surprise': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png',
        'fun': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png',
        'enthusiasm': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Star-Struck.png',
        'anger': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face.png',
        'neutral': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png',
        'hate': 'https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face.png'
        // Add more mappings as needed
    };


    textInput.disabled = 'true';
    loadingAnimation.style.display = 'block';
    container.innerHTML = '';

    // ... (previous code)
setTimeout(function () {
    // Check if the entered text has a matching emoji
    console.log("Hey:");
    fetch('/predict', {
        method: 'POST',
        body: JSON.stringify({ text: textInput }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Hey3:");
        // 'data' contains the response from Flask, including the predicted emotion
        var predictedEmotion = data.emotion_type;
        var emotionProbabilities = data.emotion_prob;

//        console.log("Emotion Probabilities:", emotionProbabilities);

        var emojiUrl = emojiMappings[data.emotion_type];
//        console.log('prediction:', predictedEmotion)
        if (emojiUrl) {

        var anger = emotionProbabilities[0] * 100;
        var enthusiasm = emotionProbabilities[1] * 100;
        var fun = emotionProbabilities[2] * 100;
        var happiness = emotionProbabilities[3] * 100;
        var hate = emotionProbabilities[4] * 100;
        var love = emotionProbabilities[5] * 100;
        var neutral = emotionProbabilities[6] * 100;
        var sadness = emotionProbabilities[7] * 100;
        var surprise = emotionProbabilities[8] * 100;

        var S_E_F;
        if(surprise > enthusiasm && surprise > fun){
            S_E_F = surprise;
        }else if(enthusiasm > surprise && enthusiasm > fun){
            S_E_F = enthusiasm;
        }else{
            S_E_F = fun;
        }

        var A_H;
        if(anger > hate){
             A_H = anger;
        }else{
            A_H = hate;
        }
        // Use 'predictedEmotion' to determine the appropriate emoji and display it
            if (predictedEmotion === 'sadness') {

                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                         backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };
                jsConfetti.addConfetti({
                    emojis: ['☹️'],
                });
            } else if (predictedEmotion === 'love') {
                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                        backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };
                jsConfetti.addConfetti({
                    emojis: ['😍'],
                });
            } else if (predictedEmotion === 'surprise' || predictedEmotion === 'fun' || predictedEmotion === 'enthusiasm') {
                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                        backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };

                jsConfetti.addConfetti({
                    emojis: ['🤩'],
                });
            } else if (predictedEmotion === 'happiness') {
                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                        backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };
                jsConfetti.addConfetti({
                    emojis: ['😀'],
                });
            } else if (predictedEmotion === 'neutral') {
                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                        backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };
                jsConfetti.addConfetti({
                    emojis: ['😐'],
                });
            } else if (predictedEmotion === 'anger'|| predictedEmotion === 'hate') {
                var chartData = {
                    labels: ['Happiness', 'Sadness', 'Surprise', 'Love','Anger','Neutral'],
                    datasets: [{
                        label: 'Emoji Data',
                        backgroundColor: ['rgb(255, 165, 0)', 'rgb(120, 120, 120)', 'rgb(0, 0, 255)', 'rgb(255, 0, 0)', 'rgb(46, 139, 87)', 'rgb(70, 130, 180)'],
                                borderWidth: 1,
                         data: [happiness, sadness, S_E_F, love, A_H, neutral], // Replace these values with your actual data
                    }]
                };
                jsConfetti.addConfetti({
                    emojis: ['😠'],
                });
            }

            emojiOutput.innerHTML = '<img src="' + emojiUrl + '" alt="emoji" />';
            var chartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                // Set the background color for the chart
                layout: {
                    padding: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Change the background color here
                }
            };
            var ctxChart = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctxChart, {
                type: 'bar',
                data: chartData,
                options: chartOptions
            });

        } else {
            emojiOutput.textContent = 'No matching emoji found.';
        }

        var resultText = document.getElementById('resultText');
        resultText.textContent = '"' + textInput + '"';
        resultText.style.display = 'block';
        loadingAnimation.style.display = 'none';
        header1.style.display = 'block';
        header2.style.display = 'block';
        header3.style.display = 'block';
    })
    .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error fetching data:', error);
    });

    textInput.disabled = false;
}, 2000);

}

