
import pandas as pd


df = pd.read_csv('skincare_products_clean.csv')

x = 2
x=df.iloc[x, :]

print (x)
