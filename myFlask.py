from flask import Flask, render_template, request, jsonify
import pickle

app = Flask(__name__)

model = pickle.load(open('pipe.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    text = request.get_json()['text']

    # print('Received text:', text)

    emotion_type = model.predict([text])[0]
    emotion_prob = model.predict_proba([text])[0]

    response = {
        'emotion_type': emotion_type,
        'emotion_prob': emotion_prob.tolist()  # Convert probability array to a list
    }

    return jsonify(response)


if __name__ == '__main__':
    app.run()

