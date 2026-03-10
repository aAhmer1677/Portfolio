from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime

app = Flask(__name__, static_folder='static')
app.secret_key = 'secret'


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/achievements')
def achievements():
    return render_template('achievements.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        print("=== CONTACT FORM SUBMITTED ===")
        print(f"Request method: {request.method}")
        print(f"Form data: {dict(request.form)}")
        
        name = request.form.get('name', '')
        email = request.form.get('email', '')
        subject = request.form.get('subject', '')
        message = request.form.get('message', '')
        
        print(f"Name: '{name}'")
        print(f"Email: '{email}'")
        print(f"Subject: '{subject}'")
        print(f"Message: '{message}'")
        
        if not name or not subject or not email or not message:
            print("ERROR: Missing form data!")
            flash('Please fill in all fields.', 'error')
        else:
            try:
                with open('data.txt', 'a') as f:
                    f.write(f"Name: {name}\nSubject: {subject}\nEmail: {email}\nMessage: {message}\n{'='*40}\n")
                print(f"SUCCESS: Data written to data.txt")
                flash('Thank you! Your message has been sent. Abdullah will try his best to get back to you.', 'success')
            except Exception as e:
                print(f"ERROR writing to file: {e}")
                flash('Error saving your message. Please try again.', 'error')
        
        return redirect(url_for('contact'))
    
    return render_template('contact.html')

@app.route('/cv')
def cv():
    return render_template('cv.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')



if __name__ == '__main__':
    app.run(debug=True)
