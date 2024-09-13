# /app.py
# Server Code

from flask import Flask, render_template, jsonify
from datetime import datetime
import pandas as pd

# ====================== #
# Global Declarations    #
# ====================== #

app = Flask( __name__ )
df = pd.read_csv('skincare_products_clean.csv')

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

    data=df.iloc[row, :]
    
    return jsonify( data )

# ====================== #
# Helper Functions       #
# ====================== #

dataset = pd.read_csv('skincare_products_clean.csv')
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:,4].values


def server_log( source, message ):
    timestamp = datetime.now().strftime( '%d/%b/%Y %H:%M:%S' )
    print( f'\033[31mPY-SERVER - - [{timestamp}][{source.upper()}]: {message}\033[0m' )

# ====================== #
# Driver Code            #
# ====================== #

if __name__ == '__main__':
    
    app.run( debug=True )