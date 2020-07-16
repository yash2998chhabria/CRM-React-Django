
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('product/',views.product,name = 'product'),
    path('customer/<int:pk_test>/',views.Customer,name='customer'),
    path('dashboard/',views.dashboard,name = 'dashboard'),
    path('new_order/',views.makeneworder,name = 'new_order'),
    path('update_order/<str:pk>/',views.updateorderr,name = 'update_order'),
    path('delete_order/<str:pk>/',views.deleteorderr,name = 'delete_order'),
    path('login_form/',views.loginform,name = 'login_form'),
    path('register_form/',views.registerform,name = 'register_form'),
    path('logout/',views.logoutbutton,name = 'logout'),

]
