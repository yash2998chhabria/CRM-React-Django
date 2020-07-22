from django.contrib import admin
from django.urls import path,include
from . import views
from .views import register_form,login_form,logout_form

from django.shortcuts import reverse


urlpatterns = [
    
    path('registerr/', views.register_form, name = 'registerf' ),
    path('login_form/', views.login_form, name = 'loginf' ),
    path('logout_form/', views.logout_form, name = 'logoutf' ),
    
    
] 