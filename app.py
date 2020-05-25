#!/usr/bin/python3
from flask import Flask, render_template
import uuid

app = Flask(__name__)

@app.route('/viewer', methods=['GET'], strict_slashes=False)
def viewer():
    """
    Shows a simple html
    """
    return render_template('nasa.html', **{'cache_id': uuid.uuid4()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8934')
