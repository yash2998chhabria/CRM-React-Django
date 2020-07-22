from django.contrib import admin
from .models import customer, Product,Order,tag

# Register your models here.
admin.site.register(customer)
admin.site.register(tag)
admin.site.register(Product)
admin.site.register(Order)