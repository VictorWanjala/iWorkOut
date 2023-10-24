from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from passlib.hash import sha256_crypt
from models import Customer, db

app=Flask(__name__)

#secrete key for session management
app.secret_key = 'wanjalavictor'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)

db.init_app(app)

def hash_password(password):
    return sha256_crypt.hash(password)

def save_user(name, email, password):
    customer = Customer(name=name, email=email,password=hash_password(password))
    db.session.add(customer)
    db.session.commit()

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        name = data['name']
        email = data['email']
        password = data['password']
        confirm_password = data['confirmPassword']

        if password !=confirm_password:
            return make_response(jsonify({
                'message': 'Passwords do not match'
            }),400)
        
        if Customer.query.filter_by(name=name).first():
            return make_response(jsonify({
                'message':'Username already exists'
            }),400)
        
        save_user(name, email, password)

        return make_response(jsonify({
            'message':'User registered successfully'
        }), 201)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data('email')
    password = data('password')

    user = Customer.query.filter_by(email=email).first()

    if user and sha256_crypt.verify(password, user.password):
        return jsonify({'message':'Login successfully'}), 201
    else:
        return jsonify({'message':'Invalid credentials'}),401
    



if __name__ == '__main__':
    app.run(port='5555', debug=False)
    



    
        