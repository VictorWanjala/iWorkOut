#!/usr/bin/env python3
from faker import Faker
from app import app
from models import db, Customer
from passlib.hash import sha256_crypt

fake = Faker()

def generate_fake_users(num_users=10):
    with app.app_context():
        Customer.query.delete()

        customers=[]

        for _ in range(num_users):
            name = fake.name()
            email = fake.email()
            password = sha256_crypt.hash(fake.password())

            customer = Customer(name=name, email=email, password=password)
            customers.append(customer)

        db.session.add_all(customers)
        db.session.commit()


if __name__ =='__main__':
    with app.app_context():
        generate_fake_users()
