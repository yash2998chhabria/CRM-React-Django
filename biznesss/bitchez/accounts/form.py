from django.forms import ModelForm
from .models import Order
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class neworder(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'

class loginform1(UserCreationForm):
    form = UserCreationForm()
    class Meta():
        model = User
        fields = ['username','email','password1','password2']
        labels = {
        "username": "username",
        "email": "email",
        "password1": "pass",
        "password2": "confirmpass"
    }
