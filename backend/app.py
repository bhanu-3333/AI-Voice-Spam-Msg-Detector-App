from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)

# ✅ ENABLE CORS (IMPORTANT)
CORS(app)

classifier = pipeline(
    "text-classification",
    model="cybersectony/phishing-email-detection-distilbert_v2.1"
)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("text")
    result = classifier(text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
