from django.urls import path
from . import views



urlpatterns = [
     path('', views.home),
   path('customer/', views.customer),
    path('delivery/', views.delivery),
     path('product/', views.product),
]