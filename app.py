from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('/index.html')

@app.route("/mostrar_numero", methods=['GET', 'POST'])
def mostrar_numero():
    if request.method == 'POST':
        form = request.form
        numero = form['digitarNumero']
    return render_template("mostrar_numero.html", numero = numero)

if __name__ == '__main__':
    app.run(debug = True, port = 8000)