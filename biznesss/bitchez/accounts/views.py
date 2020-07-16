from django.shortcuts import render,redirect
from django.shortcuts import HttpResponse
from  .models import Product,customer, Order
from .form import neworder,loginform1
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.
@login_required(login_url = 'login_form')
def home(request):
    
    orders = Order.objects.all()
    customers = customer.objects.all()
    pending = orders.filter(status='Pending').count()
    delivered = orders.filter(status='Delivered').count()
    total = orders.count()
    listt = {'orders':orders,'customers':customers,'total':total,'delivered':delivered,'pending':pending}
    return render(request, 'home.html',listt)

def logoutbutton(request):
    logout(request)
    return redirect('login_form')



def product(request):
    products = Product.objects.all()
    return render(request,'product.html',{'products':products})
 
@login_required(login_url='login_form')
def Customer(request,pk_test):
    customerr = customer.objects.get(id=pk_test)
    order = customerr.order_set.all()
    # orders = Order.objects.all()
    total = order.count()
    listt = {'customerr':customerr,'total':total,'order':order}
    return render(request,'customer.html',listt)
#    'order':

@login_required(login_url='login_from')
def makeneworder(request):
    if request.method == "POST":
        form=neworder(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')


    forms = neworder()
    context = {'form':forms}
    return render(request,'new_order.html',context)

@login_required(login_url='login_form')
def updateorderr(request,pk):
    order = Order.objects.get(id=pk)
    if request.method == "POST":
        form = neworder(request.POST, instance = order)
        if form.is_valid():
            form.save()
            return redirect('/')


    forms = neworder(instance=order)
    context = {'form':forms}
    return render(request,'update.html',context)    

@login_required(login_url='login_form')
def deleteorderr(request,pk):
    order = Order.objects.get(id=pk)
    if request.method == "POST":
        form = neworder(request.POST, instance = order)
        if form.is_valid():
            order.delete()
            return redirect('/')


    forms = neworder(instance=order)
    context = {'form':forms}
    return render(request,'delete.html',context)


def loginform(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username = username , password = password)
        if user is not None:
            login(request,user)
            return redirect ('home')
        else :
            messages.info(request,'username or password incorrect')

    return render(request,'login.html')

def registerform(request):
    form =loginform1

    if request.method == "POST":
        form = loginform1(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login_form')
        

   
    context = {'form':form}
    return render(request,'register.html',context)



     





def dashboard(request):
    return render(request,'dashboard.html')