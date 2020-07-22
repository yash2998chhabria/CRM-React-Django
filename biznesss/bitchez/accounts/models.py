from django.db import models

# Create your models here.
class customer(models.Model):
    name = models.CharField(max_length=1000, null=True)
    phone = models.CharField(max_length=100,null=True)
    email = models.CharField(max_length=100,null=True)
    date = models.DateTimeField(auto_now_add=True,null=True)
    def __str__(self):
        return self.name

class tag(models.Model):
    name = models.CharField(max_length=1000, null=True)
    
    def __str__(self):
        return self.name
    
    

class Product(models.Model):
    CATEGORY = (
            ('Indoor','Indoor'),
            ('Outdoor','Outdoor')
        )
    name = models.CharField(max_length=100,null=True)
    price= models.CharField(max_length=100,null=True)
    descrption = models.CharField(max_length=100)
    category = models.CharField(max_length=100,null=True,choices=CATEGORY)
    date_created = models.DateTimeField(auto_now_add=True,null=True)
    tag= models.ManyToManyField(tag)
    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS=(
            ('Out for delivery','Out for delivery'),
            ('Pending','Pending'),
            ('delivered','delivered')
        )
    customer = models.ForeignKey(customer, null=True,on_delete=models.SET_NULL)
    product = models.ForeignKey(Product, null=True,on_delete= models.SET_NULL)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=100,null=True,choices=STATUS)
    
    
