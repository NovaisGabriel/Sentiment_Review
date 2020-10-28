import time
from flask import Flask
# from security import authenticate, identity

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return{'time': time.time()}

app.run(port=5000, debug=True)
