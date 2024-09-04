# /app.py
# Server Code

from flask import Flask, render_template, jsonify
from datetime import datetime

# ====================== #
# Global Declarations    #
# ====================== #

app = Flask( __name__ )

# ====================== #
# Website Routes         #
# ====================== #

# home page
@app.route( '/' )
def index():
    server_log( 'index', 'Rendering Main index.html')
    return render_template( 'index.html' )

# data read in
@app.route( '/read/<row>' )
def read_data( row ):
    
    data = 0
    
    return jsonify( data )

# ====================== #
# Helper Functions       #
# ====================== #

def server_log( source, message ):
    timestamp = datetime.now().strftime( '%d/%b/%Y %H:%M:%S' )
    print( f'\033[31mPY-SERVER - - [{timestamp}][{source.upper()}]: {message}\033[0m' )

# ====================== #
# Driver Code            #
# ====================== #

if __name__ == '__main__':
    
    app.run( debug=True )