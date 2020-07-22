from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.
def home(resquest):
    return HttpResponse('home')
 

def product(request):
    return HttpResponse('product')
 

def customer(request):
    return HttpResponse('customer')



def delivery(request):
    return HttpResponse('delivery')